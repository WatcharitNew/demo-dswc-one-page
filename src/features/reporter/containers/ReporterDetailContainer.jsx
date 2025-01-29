"use client";

import { clsx } from "clsx";
import { Breadcrumbs, Anchor } from "@mantine/core";

const items = [
  { title: "รายงานสาธารณภัยประจำวัน", href: "/reporter" },
  { title: "ข้อมูลรายงาน", href: "" },
].map((item, index) => (
  <Anchor
    className={clsx("text-black", {
      "pointer-events-none text-gray-300": index === 1,
    })}
    href={item.href}
    key={index}
  >
    {item.title}
  </Anchor>
));

export const ReporterDetailContainer = () => {
  return (
    <div className="p-6">
      <Breadcrumbs>{items}</Breadcrumbs>
    </div>
  );
};
