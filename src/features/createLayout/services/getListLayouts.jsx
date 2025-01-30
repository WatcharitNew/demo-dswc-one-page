import { useQuery, keepPreviousData } from "@tanstack/react-query";

import { fetchAPI } from "@/lib/api";

export const getListLayouts = async () => {
  const { data } = await fetchAPI({
    path: "/getListLayouts",
  });

  const mock = new Array(5)
    .fill({ layout_id: null, img: null, img_thumbnail: null, bbox: [] })
    .map((item, idx) => ({
      ...item,
      layout_id: idx + 4,
      img: `/template_0${idx + 4}.svg`,
      img_thumbnail: `/template_0${idx + 4}.svg`,
    }));

  return data.concat(mock);
};

export const useListLayouts = () => {
  return useQuery({
    queryKey: ["list_layouts"],
    queryFn: getListLayouts,
    placeholderData: keepPreviousData,
  });
};
