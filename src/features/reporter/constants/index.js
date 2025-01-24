import { Search } from "@/icons";

export const MOCK_REPORT_LIST = [
  {
    id: '1',
    date: '12/11/2667',
    count: '2',
    times: '8:10น.',
    name: 'SUP_OP_PO03',
    status: 'รอการอนุมัติ',
  },
  {
    id: '2',
    date: '12/11/2667',
    count: '1',
    times: '8:10น.',
    name: 'SUP_OP_PO03',
    status: 'ไม่อนุมัติ',
  },
  {
    id: '3',
    date: '11/11/2667',
    count: '1',
    times: '8:10น.',
    name: 'SUP_OP_PO02',
    status: 'อนุมัติ',
  },
  {
    id: '4',
    date: '10/11/2667',
    count: '1',
    times: '8:10น.',
    name: 'SUP_OP_PO01',
    status: 'อนุมัติ',
  },
]

export const DISASTERS_REPORT_SELECT = [
  {
    text: "ทั้งหมด",
    value: "all",
    icon: Search
  },
  {
    text: "อุทกภัย",
    value: "flood",
    icon: Search
  },
  {
    text: "ภัยแล้ง",
    value: "drought",
    icon: Search
  },
  {
    text: "วาตภัย/พายุ",
    value: "storm",
    icon: Search
  },
  {
    text: "ดินโคลนถล่ม",
    value: "mudslide",
    icon: Search
  },
  {
    text: "แผ่นดินไหว/สึนามิ",
    value: "earthquake-tsunami",
    icon: Search
  },
  {
    text: "หมอกควัน/PM2.5",
    value: "pm25",
    icon: Search
  },
  {
    text: "ไฟป่า",
    value: "forest-fire",
    icon: Search
  },
];