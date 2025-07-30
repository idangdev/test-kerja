import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEditPatient } from "./useEditPatient";
import { useNavigate, useParams } from "react-router-dom";

function EditPatient() {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const { editPatient, isEditing } = useEditPatient();
  const navigate = useNavigate();

  function onSubmit(data) {
    console.log(data);

    editPatient({ data, id });
    // navigate("/home");
  }

  function onError(errors) {
    console.error(errors);
  }

  if (isEditing) return <div>Loading...</div>;

  return (
    <div className="flex flex-col p-10 gap-3">
      <h2 className="font-semibold text-lg">EDIT PATIENT</h2>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex flex-col gap-1">
          <label htmlFor="nama">Nama :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="nama"
            type="text"
            placeholder="Nama"
            {...register("nama")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="alamat">Alamat :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="alamat"
            type="text"
            placeholder="Alamat"
            {...register("alamat")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="golonganDarah">Golongan Darah :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="golonganDarah"
            type="text"
            placeholder="Golongan Darah"
            {...register("golonganDarah")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="agama">Agama :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="agama"
            type="text"
            placeholder="Agama"
            {...register("agama")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="namaAyah">Nama Ayah :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="namaAyah"
            type="text"
            placeholder="Nama Ayah"
            {...register("namaAyah")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="namaIbuKandung">Nama Ibu Kandung :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="namaIbuKandung"
            type="text"
            placeholder="Nama Ibu Kandung"
            {...register("namaIbuKandung")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="noTelepon">No Telepon :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="noTelepon"
            type="text"
            placeholder="No Telepon"
            {...register("noTelepon")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="pendidikan">Pendidikan :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="pendidikan"
            type="text"
            placeholder="Pendidikan"
            {...register("pendidikan")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="statusPernikahan">Status Pernikahan :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="statusPernikahan"
            type="text"
            placeholder="Status Pernikahan"
            {...register("statusPernikahan")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="sukuBangsa">Suku Bangsa :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="sukuBangsa"
            type="text"
            placeholder="Suku Bangsa"
            {...register("sukuBangsa")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="tanggalLahir">Tanggal Lahir :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="tanggalLahir"
            type="text"
            placeholder="Tanggal Lahir"
            {...register("tanggalLahir")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="tempatLahir">Tempat Lahir :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="tempatLahir"
            type="text"
            placeholder="Tempat Lahir"
            {...register("tempatLahir")}
          />
        </div>

        <div>
          <button>Edit</button>
        </div>
      </form>
    </div>
  );
}

export default EditPatient;
