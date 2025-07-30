// export async function getPatients({ page }) {
export async function getPatients() {
  const res = await fetch(`http://localhost:3002/patients?limit=100`);
  if (!res.ok) throw new Error("Failed getting doctors data");

  const data = await res.json();
  return data;
}

export async function getPatient(id) {
  const res = await fetch(`http://localhost:3002/patients/${id}`);
  if (!res.ok) throw new Error("Failed getting doctors data");

  const data = await res.json();

  return data;
}

export async function deletePatient(id) {
  const { data, error } = await fetch(`http://localhost:3002/patients/${id}`, {
    method: "DELETE",
  });

  if (error) {
    console.error(error);
    throw new Error("Patient could not be deleted");
  }
  return data;
}

export async function addPatient(newPatient) {
  console.log(newPatient);
  // 1. Create/edit cabin
  const res = await fetch(`http://localhost:3002/patients/`, {
    method: "POST",
    body: JSON.stringify(newPatient),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Patient could not be created");
  }

  const data = await res.json();

  return data;
}
