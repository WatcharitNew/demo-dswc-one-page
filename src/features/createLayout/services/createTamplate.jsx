import { useMutation } from "@tanstack/react-query";

import { fetchAPI } from "@/lib/api";

export const createTemplate = async (data) => {
  await fetchAPI({
    path: "/createTemplate",
    method: "POST",
    data,
  });
};

export const useCreateTemplate = () => {
  return useMutation({
    mutationFn: createTemplate,
  });
};
