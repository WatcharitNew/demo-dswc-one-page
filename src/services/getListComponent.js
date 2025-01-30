import { fetchAPI } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const getListComponents = async () => {
  const { data } = await fetchAPI({
    path: "/getListComponent",
    method: "Get",
  });

  const keyMap = {
    อุทกภัย: "flood",
    "pm2.5": "pm25",
    ภัยแล้ง: "drought",
    "อื่น ๆ": "other",
  };

  const newData = Object.entries(data).reduce((acc, [key, value]) => {
    const newKey = keyMap[key] || key;
    acc[newKey] = value;
    return acc;
  }, {});

  return newData;
};

export const useGetListComponents = () => {
  return useQuery({
    queryKey: ["list_components"],
    queryFn: getListComponents,
  });
};
