import { useQuery } from "@tanstack/react-query";
import { getPatient } from "../../services/apiPatients";
import { useParams } from "react-router-dom";

export function usePatient() {
  const { id } = useParams();

  const {
    isLoading,
    data: patient,
    error,
  } = useQuery({
    queryKey: ["patient", id],
    queryFn: () => getPatient(id),
    retry: false,
  });

  return { isLoading, patient, error };
}
