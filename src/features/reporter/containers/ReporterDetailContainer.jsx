"use client";

import Link from "next/link";
import { clsx } from "clsx";
import {
  Anchor,
  Breadcrumbs,
  Button,
  Flex,
  Image,
} from "@mantine/core";

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
      <div className="grow row gap-6">
        <div className="min-w-[53rem] rounded-lg bg-white shadow-report p-6 col gap-6">
          <div className="col gap-2">
            <p className="text-2xl font-medium">
              ข้อมูลรายงานสาธารณภัยประจำวัน
            </p>
            <div className="grid grid-cols-[10.5rem_1fr_7rem_1fr] gap-2 max-w-[35rem] [&>:nth-child(odd)]:text-gray-300 [&>:nth-child(even)]:text-gray-500 [&>:nth-child(even)]:font-medium">
              <p>วันที่รายงานเหตุ</p>
              <p>20/11/2567</p>
              <p>Template</p>
              <p>SUP_OP_P003</p>
              <p>ครั้งที่และเวลาประมวลผล</p>
              <p>2, 8:10 น.</p>
              <p>สถานะ</p>
              <p>รอรอรอ</p>
            </div>
          </div>
          <Flex className="h-full justify-center">
            <Image src="/template_01.svg" fit="contain" />
          </Flex>
        </div>
        <div className="min-w-[23rem] rounded-lg bg-white shadow-report p-6"></div>
      </div>
      <div className="max-w-[77.5rem]">
        <Button
          component={Link}
          href="/reporter"
          className="block h-10 max-w-36 font-medium ml-auto"
          variant="default"
        >
          กลับหน้าหลัก
        </Button>
      </div>
    </div>
  );
};
