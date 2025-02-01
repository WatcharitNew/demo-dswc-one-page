import { useQuery } from "@tanstack/react-query";

import { fetchAPI } from "@/lib/api";
import { PROVINCES } from "@/constants";
import { LIST_REPORT } from "../constants/queryKeys";

const getListReports = async (province) => {
  const provinceId = PROVINCES.findIndex((p) => p === province);

  const { data } = await fetchAPI({
    path: `/getListReport?province_id=${provinceId}`,
    method: "GET",
  });

  return data;
};

export const useListReports = (province) => {
  return useQuery({
    queryKey: [LIST_REPORT, province],
    queryFn: () => getListReports(province),
  });
};
