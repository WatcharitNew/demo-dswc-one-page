import { useQuery, keepPreviousData } from "@tanstack/react-query";

import { fetchAPI } from "@/lib/api";

export const getListLayouts = async () => {
  const { data } = await fetchAPI({
    path: "/getListLayouts",
  });

  return data;
};

export const useListLayouts = () => {
  return useQuery({
    queryKey: ["list_layouts"],
    queryFn: getListLayouts,
    placeholderData: keepPreviousData,
  });
};