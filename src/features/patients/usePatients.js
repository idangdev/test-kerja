import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../../services/apiPatients";

export function usePatients() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
  });

  return { isLoading, data, error };
}
