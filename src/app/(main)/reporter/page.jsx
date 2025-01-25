"use client";

import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import "dayjs/locale/th";

import { useAuthContext } from "@/lib/providers/auth";
import { OverviewStatusCard } from "@/components";

dayjs.extend(buddhistEra);
dayjs.locale("th");

const mockOverviewStatus = [
  {
    status: "pending",
    total: 1,
  },
  {
    status: "approved",
    total: 2,
  },
  {
    status: "rejected",
    total: 1,
  },
  {
    status: "total",
    total: 4,
  },
];

export default function ReporterPage() {
  const { data } = useAuthContext();

  return (
    <div className="w-full flex flex-col items-center bg-gray-100">
      <div className="flex flex-col mt-5 mx-auto gap-6">
        <p className="text-black text-left font-medium text-xl">
          งานที่ต้องดำเนินการ ณ วันที่ {dayjs(data.date).format("DD MMMM BBBB")}
        </p>
        <div className="flex flex-row gap-5">
          {mockOverviewStatus.map(({ total, status }) => (
            <OverviewStatusCard key={status} total={total} status={status} />
          ))}
        </div>
      </div>
    </div>
  );
}
