import { ApprovedIcon, PendingIcon, RejectedIcon, TotalIcon } from "@/icons";

const StatusIcon = ({ status }) => {
  switch (status) {
    case "pending":
      return <PendingIcon />;
    case "approved":
      return <ApprovedIcon />;
    case "rejected":
      return <RejectedIcon />;
    case "total":
      return <TotalIcon />;
  }
};

const statusName = (status) => {
  switch (status) {
    case "pending":
      return "รอการตรวจสอบ";
    case "approved":
      return "รายงานที่ได้รับการอนุมัติ";
    case "rejected":
      return "รายงานที่ไม่ผ่านการอนุมัติ";
    case "total":
      return "รายงานประจำวันทั้งหมด";
  }
};

export const OverviewStatusCard = ({ total, status }) => {
  return (
    <div className="w-[17.125rem] h-[6.75rem] bg-white rounded-lg flex flex-row drop-shadow-md p-5 items-center">
      <div className="flex flex-col gap-2">
        <p className="font-bold text-black text-[2.1875rem]/[2.6475rem]">
          {total}
        </p>
        <p className="font-medium text-gray-700 text-sm">
          {statusName(status)}
        </p>
      </div>
      <div className="ml-auto">
        <StatusIcon status={status} />
      </div>
    </div>
  );
};
