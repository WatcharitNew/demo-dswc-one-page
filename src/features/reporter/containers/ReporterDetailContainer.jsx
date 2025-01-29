"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { Breadcrumbs, Button, Anchor } from "@mantine/core";

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
    <div className="h-full col gap-6 p-6">
      <Breadcrumbs>{items}</Breadcrumbs>
      <div className="grow"></div>
      <Button
        component={Link}
        href="/reporter"
        className="h-10 max-w-36 font-medium ml-auto"
        variant="default"
      >
        กลับหน้าหลัก
      </Button>
    </div>
  );
};
