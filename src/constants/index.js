import {
  CentralizedReportIcon,
  HomeIcon,
  LayoutIcon,
  NewReportIcon,
  TemplateIcon,
} from "../icons";

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

export const CREATE_LAYOUT_MENU = [
  {
    label: "หน้าหลัก",
    icon: HomeIcon,
    value: 1,
  },
  {
    label: "เค้าโครงรายงาน",
    icon: LayoutIcon,
    value: 2,
  },
  {
    label: "รูปแบบรายงาน",
    icon: TemplateIcon,
    value: 3,
  },
];

export const MOCK_REPORT = [
  {
    title: "รอตรวจสอบ (1)",
    src: "https://placehold.co/200x400?text=Placeholder003",
    name: "TEM_DDPM_003",
  },
  {
    title: "ฉบับร่าง (1)",
    src: "https://placehold.co/200x400?text=PlaceholderDraft",
    name: "V01_Draft",
  },
];

export const MOCK_REPORT_CENTER = [
  {
    src: "https://placehold.co/200x400?text=Placeholder002",
    name: "TEM_DDPM_002",
  },
  {
    src: "https://placehold.co/200x400?text=Placeholder001",
    name: "TEM_DDPM_001",
  },
];
