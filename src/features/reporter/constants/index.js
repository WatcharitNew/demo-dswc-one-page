import { Search, Home, Template } from "@/icons";

export const MOCK_REPORT_LIST = [
  {
    id: "1",
    date: "12/11/2667",
    count: "2",
    times: "8:10น.",
    name: "SUP_OP_PO03",
    status: "รอการอนุมัติ",
    img: "/template_01.svg"
  },
  {
    id: "2",
    date: "12/11/2667",
    count: "1",
    times: "8:10น.",
    name: "SUP_OP_PO03",
    status: "ไม่อนุมัติ",
    img: "/template_02.svg"
  },
  {
    id: "3",
    date: "11/11/2667",
    count: "1",
    times: "8:10น.",
    name: "SUP_OP_PO02",
    status: "อนุมัติ",
    img: "/template_03.svg"
  },
  {
    id: "4",
    date: "10/11/2667",
    count: "1",
    times: "8:10น.",
    name: "SUP_OP_PO01",
    status: "อนุมัติ",
    img: "/template_04.svg"
  },
];

export const DISASTERS_REPORT_SELECT = [
  {
    text: "ทั้งหมด",
    value: "all",
    icon: Search,
  },
  {
    text: "อุทกภัย",
    value: "flood",
    icon: Search,
  },
  {
    text: "ภัยแล้ง",
    value: "drought",
    icon: Search,
  },
  {
    text: "วาตภัย/พายุ",
    value: "storm",
    icon: Search,
  },
  {
    text: "ดินโคลนถล่ม",
    value: "mudslide",
    icon: Search,
  },
  {
    text: "แผ่นดินไหว/สึนามิ",
    value: "earthquake-tsunami",
    icon: Search,
  },
  {
    text: "หมอกควัน/PM2.5",
    value: "pm25",
    icon: Search,
  },
  {
    text: "ไฟป่า",
    value: "forest-fire",
    icon: Search,
  },
];

export const SAMPLE_REPORT = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 2,
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG",
  },
  {
    id: 3,
    src: "https://media.istockphoto.com/id/1193723594/photo/fujiyoshida-japan-at-chureito-pagoda-and-mt-fuji-in-the-spring-with-cherry-blossoms.jpg?s=612x612&w=0&k=20&c=O5Oy6Bxa7rJs6eqVu4h85OxDd-yBnUVfJ_cAyt5P6iY=",
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2022/10/09/12/07/plant-7508987_640.jpg",
  },
];

export const MOCK_OVERVIEW_STATUS = [
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

export const REPORTER_MENUS = [
  {
    label: "หน้าหลัก",
    icon: Home,
    value: 1,
  },
  {
    label: "รูปแบบรายงาน",
    icon: Template,
    value: 2,
  },
];

export const OVERVIEW_STATUS = [
  "waiting_for_reviewing",
  "approved",
  "rejected",
  "total",
];

export const INITIAL_OVERVIEW_DATA = {
  summary_numbers: {
    waiting_for_reviewing: 0,
    approved: 0,
    rejected: 0,
    total: 0,
  },
  report_table: [],
};
