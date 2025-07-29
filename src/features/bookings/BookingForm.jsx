import { useState } from "react";

function BookingForm({ doctorName, onClose }) {
  const [doctor, setDoctor] = useState(doctorName);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");

  function handleBooking() {
    if (!doctor || !nama || !email || !keluhan || !tanggal || !jam)
      return alert("HARAP ISI FORMULIR!!!");

    console.log("########## BOOKING ##########");
    console.log(`Nama Dokter : ${doctor}`);
    console.log(`Nama Pasien : ${nama}`);
    console.log(`Email : ${email}`);
    console.log(`Keluhan : ${keluhan}`);
    console.log(`Tanggal Booking : ${tanggal}`);
    console.log(`Jam Booking : ${jam}`);
  }

  return (
    <div className="flex flex-col p-5">
      <div className="flex justify-evenly mb-2">
        <h1 className="font-semibold">Formulir Booking</h1>
        <button className="bg-red-400 p-1 rounded-full" onClick={onClose}>
          X
        </button>
      </div>
      <div className="flex gap-2">
        <p>Nama Dokter : </p>
        <input
          type="text"
          placeholder="Nama Dokter"
          value={doctorName}
          disabled
        />
      </div>
      <div className="flex gap-2">
        <p>Nama Pasien : </p>
        <input
          type="text"
          placeholder="Nama pasien"
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <p>Email : </p>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <p>Keluhan : </p>
        <input
          type="text"
          placeholder="Keluhan"
          onChange={(e) => setKeluhan(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <p>Tanggal Booking : </p>
        <input
          type="text"
          placeholder="Tanggal Booking"
          onChange={(e) => setTanggal(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <p>Jam Booking : </p>
        <input
          type="text"
          placeholder="Jam Booking"
          onChange={(e) => setJam(e.target.value)}
        />
      </div>
      <button
        className="bg-lime-400 rounded-md px-2 py-1"
        onClick={handleBooking}
      >
        Booking
      </button>
    </div>
  );
}

export default BookingForm;
