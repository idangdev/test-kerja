import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPatient as editPatientApi } from "../../services/apiPatients";
import toast from "react-hot-toast";

export function useEditPatient() {
  const queryClient = useQueryClient();

  const { mutate: editPatient, isLoading: isEditing } = useMutation({
    mutationFn: ({ newData, id }) => editPatientApi(newData, id),
    onSuccess: () => {
      toast.success("Patient successfully edited");
      queryClient.invalidateQueries({ queryKey: ["patients"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editPatient };
}
