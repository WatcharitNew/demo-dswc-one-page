import { fetchAPI } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

export const postCreateReport = async ({ params }) => {
  const { data } = await fetchAPI({
    path: "/createReport",
    method: "POST",
    data: params
  });

  return data;
};

export const usePostCreateReport = () =>
  useMutation({
    mutationFn: postCreateReport,
  });
