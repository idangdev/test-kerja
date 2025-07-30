import { NavLink, useSearchParams } from "react-router-dom";
import { usePatients } from "../features/patients/usePatients";
import { useState } from "react";
import { useDeletePatient } from "../features/patients/useDeletePatient";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const { data: patients, isLoading } = usePatients();

  const { deletePatient, isDeleting } = useDeletePatient();

  console.log(patients);

  function handleChange(e) {
    setSearch(e.target.value);
    searchParams.set("search", e.target.value);
    setSearchParams(searchParams);
  }

  function handleDelete(id) {
    const isConfirm = window.confirm("Yakin ingin menghapus data ini?");
    if (isConfirm) deletePatient(id);
  }

  function handleReset() {
    setSearch("");
    searchParams.set("search", "");
    setSearchParams("");
  }

  if (isLoading || isDeleting)
    return <div className="font-semibold text-center mt-10">Loading ...</div>;

  const filteredPatients = !searchParams.get("search")
    ? patients.data
    : patients.data.filter((patient) =>
        patient.nama
          .toLowerCase()
          .includes(searchParams.get("search").toLowerCase())
      );

  return (
    <div className="flex flex-col gap-2 p-3">
      <div className="flex gap-3">
        <input
          className="border-[1px] rounded-md p-1 border-gray-300 border-solid"
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleChange}
        />
        <button
          className="px-2 py-1 bg-blue-400 rounded-md text-gray-100 font-semibold"
          onClick={handleReset}
        >
          Reset
        </button>
        <NavLink
          to="/add"
          className="px-2 py-1 bg-orange-400 rounded-md text-gray-100 font-semibold"
        >
          Add Patient
        </NavLink>
      </div>

      <table>
        <thead className=" text-gray-700">
          <th className="p-3">Nama</th>
          <th className="p-3">Nomor Telepon </th>
          <th className="p-3">Alamat</th>
          <th className="p-3">Action</th>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr className="p-5" key={patient.id}>
              <td>{patient.nama}</td>
              <td>{patient.noTelepon}</td>
              <td>{patient.alamat}</td>
              <td className="flex justify-center gap-2">
                <NavLink
                  to={`/detail/${patient.id}`}
                  className="px-2 py-1 bg-lime-400 rounded-md"
                >
                  Detail
                </NavLink>
                <button className="px-2 py-1 bg-blue-400 rounded-md">
                  Update
                </button>
                <button
                  className="px-2 py-1 bg-red-400 rounded-md"
                  onClick={() => handleDelete(patient.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
