function DoctorDetail({
  name,
  specialty,
  experience,
  location,
  photo,
  onClose,
}) {
  return (
    <div className="text-center p-10">
      <div className="flex mb-5 justify-around">
        <h1 className="font-semibold">DETAIL DOCTOR</h1>
        <button className="bg-red-500 p-2 rounded-full" onClick={onClose}>
          X
        </button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src={photo} className="mb-5 h-[80px] rounded-full" />
        <div className="flex gap-3">
          <p className="font-semibold">Nama :</p>
          <p>{name}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-semibold">Spesialis :</p>
          <p>{specialty}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-semibold">Pengalaman :</p>
          <p>{experience}</p>
        </div>
        <div className="flex gap-3">
          <p className="font-semibold">Lokasi :</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetail;
