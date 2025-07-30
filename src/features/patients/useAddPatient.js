import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPatient as addPatientApi } from "../../services/apiPatients";
import toast from "react-hot-toast";

export function useAddPatient() {
  const queryClient = useQueryClient();

  const { mutate: addPatient, isLoading: isAdding } = useMutation({
    mutationFn: addPatientApi,
    onSuccess: () => {
      toast.success("New Patient successfully created");
      queryClient.invalidateQueries({ queryKey: ["patients"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addPatient };
}
