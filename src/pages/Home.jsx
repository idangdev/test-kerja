import { useState } from "react";
import { useDoctors } from "../features/doctors/useDoctors";
import DoctorDetail from "../features/doctors/DoctorDetail";
import BookingForm from "../features/bookings/BookingForm";

function Home() {
  const [search, setSearch] = useState("");
  const [openDetail, setOpenDetail] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [detailName, setDetailName] = useState("");
  const [detailSpecialty, setDetailSpecialty] = useState("");
  const [detailExperience, setDetailExperience] = useState("");
  const [detailLocation, setDetailLocation] = useState("");
  const [detailPhoto, setDetailPhoto] = useState("");
  const [formName, setFormName] = useState("");

  const { isLoading, data: doctors } = useDoctors();

  function handleDetail(name, specialty, experience, location, photo) {
    setDetailName(name);
    setDetailSpecialty(specialty);
    setDetailExperience(experience);
    setDetailLocation(location);
    setDetailPhoto(photo);

    setOpenDetail(true);
  }

  function handleCloseDetail() {
    setDetailName("");
    setDetailSpecialty("");
    setDetailExperience("");
    setDetailLocation("");
    setDetailPhoto("");

    setOpenDetail(false);
  }

  function handleOpenForm(doctorName) {
    setFormName(doctorName);

    setOpenForm(true);
  }

  function handleCloseForm() {
    setFormName("");

    setOpenForm(false);
  }

  const filteredDoctors = !search
    ? doctors
    : doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(search.toLowerCase())
      );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-2 w-[800px] m-auto">
      {openDetail && (
        <DoctorDetail
          name={detailName}
          specialty={detailSpecialty}
          experience={detailExperience}
          location={detailLocation}
          photo={detailPhoto}
          onClose={handleCloseDetail}
        />
      )}

      {openForm && (
        <BookingForm doctorName={formName} onClose={handleCloseForm} />
      )}

      <input
        placeholder="Search (name)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredDoctors.map((doctor) => (
        <div
          key={doctor.name}
          className="flex items-center gap-2 justify-between"
        >
          <img src={doctor.photo} className="h-[80px] rounded-full" />
          <div className="flex flex-col">
            <div className="flex gap-3">
              <p className="font-semibold">Nama :</p>
              <p>{doctor.name}</p>
            </div>
            <div className="flex gap-3">
              <p className="font-semibold">Spesialis :</p>
              <p>{doctor.specialty}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className="bg-blue-400 px-2 py-1 rounded-md"
              onClick={() =>
                handleDetail(
                  doctor.name,
                  doctor.specialty,
                  doctor.experience,
                  doctor.location,
                  doctor.photo
                )
              }
            >
              Detail
            </button>
            <button
              className="bg-lime-400 px-2 py-1 rounded-md"
              onClick={() => handleOpenForm(doctor.name)}
            >
              Booking
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
