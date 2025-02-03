'use client'

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import { MOCK_REPORT_LIST } from "../constants";

export const getReportDetail = async (id) => {
  return MOCK_REPORT_LIST.find((item) => item.id === id);
};

export const useReportDetail = () => {
  const { id } = useParams()

  return useQuery({
    queryKey: ["report_detail", id],
    queryFn: () => getReportDetail(id),
    placeholderData: keepPreviousData,
  });
};
