import { useQuery } from "@tanstack/react-query";

import { fetchAPI } from "@/lib/api";
import { PROVINCES } from "@/constants";
import { LIST_TEMPLATES } from "../constants/queryKeys";

const getListTemplates = async (province) => {
  const provinceId = PROVINCES.findIndex((p) => p === province);

  const { data } = await fetchAPI({
    path: `/getListTemplates?province_id=${provinceId}`,
    method: "GET",
  });

  return data
};

export const useListTemplates = (province) => {
  return useQuery({
    queryKey: [LIST_TEMPLATES, province],
    queryFn: () => getListTemplates(province),
  });
};
