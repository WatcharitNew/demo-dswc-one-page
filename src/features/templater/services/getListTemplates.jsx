import { useQuery } from "@tanstack/react-query";

import { fetchAPI } from "@/lib/api";
import { LIST_TEMPLATES } from "../constants/queryKeys";

const getListTemplates = async (provinceId) => {
  const { data } = await fetchAPI({
    path: `/getListTemplates?province_id=${provinceId}`,
    method: "GET",
  });

  return data
};

export const useListTemplates = (province) => {
  return useQuery({
    queryKey: [LIST_TEMPLATES, province?.id],
    queryFn: () => getListTemplates(province?.id),
    enabled: !!province
  });
};
