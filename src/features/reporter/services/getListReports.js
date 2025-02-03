import { useQuery } from "@tanstack/react-query";

import { fetchAPI } from "@/lib/api";
import { LIST_REPORT } from "../constants/queryKeys";

const getListReports = async (provinceId) => {
  const { data } = await fetchAPI({
    path: `/getListReport?province_id=${provinceId}`,
    method: "GET",
  });

  return data;
};

export const useListReports = (province) => {
  return useQuery({
    queryKey: [LIST_REPORT, province?.id],
    queryFn: () => getListReports(province?.id),
    enabled: !!province
  });
};
