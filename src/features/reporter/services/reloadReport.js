import { useMutation } from "@tanstack/react-query";

import { fetchAPI } from "@/lib/api";

export const reloadReport = async (data) => {
  const res = await fetchAPI({
    path: "/genReport",
    method: "POST",
    data: data,
  });
  return res;
};

export const useReloadReport = () => {
  return useMutation({
    mutationFn: (data) => reloadReport(data),
  });
};
