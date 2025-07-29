import { RESULTS_SIZE } from "../utils/constants";

const SPECIALTIES = [
  "Cardiology",
  "Neurology",
  "General",
  "Pediatrics",
  "Dermatology",
];

function transformDoctors(apiData) {
  return apiData.results.map((user, i) => ({
    name: `Dr. ${user.name.first} ${user.name.last}`,
    photo: user.picture.large,
    specialty: SPECIALTIES[i % SPECIALTIES.length], // putar dari array
    location: "RSU Siaga Medika",
    experience: `${5 + i} tahun`, // contoh dummy
  }));
}

export async function getDoctors() {
  const res = await fetch(`https://randomuser.me/api/?results=${RESULTS_SIZE}`);
  if (!res.ok) throw new Error("Failed getting doctors data");

  const data = transformDoctors(await res.json());
  return data;
}
