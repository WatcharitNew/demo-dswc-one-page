"use client";

import { useState } from "react";

import { DisasterFilter } from "@/components/DisasterFilter";

const disasters = [
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

export default function Home() {
  const [selectedDisaster, setSelectedDisaster] = useState("flood");

  return (
    <DisasterFilter
      disasters={disasters}
      selectedDisaster={selectedDisaster}
      setSelectedDisaster={setSelectedDisaster}
    />
  );
}
