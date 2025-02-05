import { fetchAPI } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { IconX } from "@tabler/icons-react";

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
    onError: () => notifications.show({
      title: "เกิดข้อผิดพลาด",
      message: "เกิดข้อผิดพลาดระหว่างสร้างส่วนประกอบข้อมูล",
      color: "red",
      position: "top-center",
      icon: <IconX/>
    }),
  });
