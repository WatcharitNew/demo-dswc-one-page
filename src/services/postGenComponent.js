import { fetchAPI } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

export const postGenComponents = async ({ params, file }) => {
  const { data } = await fetchAPI({
    path: "/genComponent",
    method: "Post",
    params,
    data: file,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const usePostGenComponents = () =>
  useMutation({
    mutationFn: postGenComponents,
  });
