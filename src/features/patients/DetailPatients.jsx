import { useNavigate } from "react-router-dom";
import { usePatient } from "./usePatient";

function DetailPatients() {
  const { patient, isLoading } = usePatient();
  const navigate = useNavigate();

  if (isLoading)
    return <div className="font-semibold text-center mt-10">Loading ...</div>;

  console.log(patient);

  function handleBack() {
    navigate(-1);
  }

  return (
    <div className="flex flex-col p-5">
      <div className="flex justify-between">
        <h2 className="font-semibold mb-3">DETAIL PATIENT</h2>
        <button
          className="px-2 py-1 bg-red-400 rounded-md"
          onClick={handleBack}
        >
          Back
        </button>
      </div>

      <div className="flex gap-2">
        <p className="font-semibold">Nama :</p>
        <p>{patient.data.nama}</p>
      </div>

      <div className="flex gap-2">
        <p className="font-semibold">Alamat :</p>
        <p>{patient.data.alamat}</p>
      </div>

      <div className="flex gap-2">
        <p className="font-semibold">Golongan darah :</p>
        <p>{patient.data.golonganDarah}</p>
      </div>

      <div className="flex gap-2">
        <p className="font-semibold">Agama :</p>
        <p>{patient.data.agama}</p>
      </div>

      <div className="flex gap-2">
        <p className="font-semibold">Nama ayah :</p>
        <p>{patient.data.namaAyah}</p>
      </div>

      <div className="flex gap-2">
        <p className="font-semibold">Nama ibu kandung :</p>
        <p>{patient.data.namaIbuKandung}</p>
      </div>

      <div className="flex gap-2">
        <p className="font-semibold">Nomor telepon :</p>
        <p>{patient.data.noTelepon}</p>
      </div>

      <div className="flex gap-2">
        <p className="font-semibold">Pendidikan :</p>
        <p>{patient.data.pendidikan}</p>
      </div>

      <div className="flex gap-2">
        <p className="font-semibold">Status pernikahan :</p>
        <p>{patient.data.statusPernikahan}</p>
      </div>

      <div className="flex gap-2">
        <p className="font-semibold">Suku bangsa :</p>
        <p>{patient.data.sukuBangsa}</p>
      </div>

      <div className="flex gap-2">
        <p className="font-semibold">Tanggal lahir :</p>
        <p>{patient.data.tanggalLahir}</p>
      </div>

      <div className="flex gap-2">
        <p className="font-semibold">Tempat lahir :</p>
        <p>{patient.data.tempatLahir}</p>
      </div>
    </div>
  );
}

export default DetailPatients;
