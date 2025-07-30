import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAddPatient } from "./useAddPatient";
import { useNavigate } from "react-router-dom";

function AddPatient() {
  const { register, handleSubmit } = useForm();
  const { addPatient, isAdding } = useAddPatient();
  const navigate = useNavigate();

  function onSubmit(data) {
    console.log(data);

    addPatient({ ...data });
    navigate("/home");
  }

  function onError(errors) {
    console.error(errors);
  }

  return (
    <div className="flex flex-col p-10 gap-3">
      <h2 className="font-semibold text-lg">ADD PATIENT</h2>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex flex-col gap-1">
          <label htmlFor="nama">Nama :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="nama"
            type="text"
            placeholder="Nama"
            {...register("nama", { required: "This field is required" })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="alamat">Alamat :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="alamat"
            type="text"
            placeholder="Alamat"
            {...register("alamat", { required: "This field is required" })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="golonganDarah">Golongan Darah :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="golonganDarah"
            type="text"
            placeholder="Golongan Darah"
            {...register("golonganDarah", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="agama">Agama :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="agama"
            type="text"
            placeholder="Agama"
            {...register("agama", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="namaAyah">Nama Ayah :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="namaAyah"
            type="text"
            placeholder="Nama Ayah"
            {...register("namaAyah", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="namaIbuKandung">Nama Ibu Kandung :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="namaIbuKandung"
            type="text"
            placeholder="Nama Ibu Kandung"
            {...register("namaIbuKandung", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="noTelepon">No Telepon :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="noTelepon"
            type="text"
            placeholder="No Telepon"
            {...register("noTelepon", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="pendidikan">Pendidikan :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="pendidikan"
            type="text"
            placeholder="Pendidikan"
            {...register("pendidikan", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="statusPernikahan">Status Pernikahan :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="statusPernikahan"
            type="text"
            placeholder="Status Pernikahan"
            {...register("statusPernikahan", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="sukuBangsa">Suku Bangsa :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="sukuBangsa"
            type="text"
            placeholder="Suku Bangsa"
            {...register("sukuBangsa", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="tanggalLahir">Tanggal Lahir :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="tanggalLahir"
            type="text"
            placeholder="Tanggal Lahir"
            {...register("tanggalLahir", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="tempatLahir">Tempat Lahir :</label>
          <input
            className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
            id="tempatLahir"
            type="text"
            placeholder="Tempat Lahir"
            {...register("tempatLahir", {
              required: "This field is required",
            })}
          />
        </div>

        <div>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
}

export default AddPatient;
