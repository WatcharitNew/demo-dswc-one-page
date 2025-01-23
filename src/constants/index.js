import { CentralizedReportIcon, NewReportIcon } from "../icons";

export const DISASTERS = [
  {
    srcName: "disaster-flood",
    text: "อุทกภัย",
    value: "flood",
  },
  {
    srcName: "disaster-drought",
    text: "ภัยแล้ง",
    value: "drought",
  },
  {
    srcName: "disaster-storm",
    text: "วาตภัย/พายุ",
    value: "storm",
  },
  {
    srcName: "disaster-mudslide",
    text: "ดินโคลนถล่ม",
    value: "mudslide",
  },
  {
    srcName: "disaster-earthquake-tsunami",
    text: "แผ่นดินไหว",
    subtext: "สึนามิ",
    value: "earthquake-tsunami",
  },
  {
    srcName: "disaster-pm25",
    text: "หมอกควัน",
    subtext: "PM2.5",
    value: "pm25",
  },
  {
    srcName: "disaster-forest-fire",
    text: "ไฟป่า",
    value: "forest-fire",
  },
];

export const CREAT_REPORT_OPTIONS = [
  {
    icon: CentralizedReportIcon,
    label: (
      <p className="font-medium">
        สร้างรูปแบบรายงาน <br /> จากส่วนกลาง
      </p>
    ),
    value: "centralized",
    disable: true,
  },
  {
    icon: NewReportIcon,
    label: <p className="font-medium">สร้างใหม่</p>,
    value: "new",
  },
];
