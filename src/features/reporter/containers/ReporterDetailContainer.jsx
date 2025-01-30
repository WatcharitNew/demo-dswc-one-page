"use client";

import Link from "next/link";
import { clsx } from "clsx";
import {
  Anchor,
  Badge,
  Breadcrumbs,
  Button,
  Flex,
  Image,
  UnstyledButton,
} from "@mantine/core";

import { useReportDetail } from "../services";
import { getBadgeStatus } from "../components";

import { Pdf, Jpg, Png, History } from "@/icons";

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
  const { data: report } = useReportDetail();

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
              <p>{report?.date}</p>
              <p>Template</p>
              <p>{report?.name}</p>
              <p>ครั้งที่และเวลาประมวลผล</p>
              <p>
                {report?.count}, {report?.times}
              </p>
              <p>สถานะ</p>
              <div className="text-current">
                <Badge
                  variant="light"
                  color={getBadgeStatus(report?.status)}
                  size="lg"
                  style={{ fontWeight: 400 }}
                >
                  {report?.status}
                </Badge>
              </div>
            </div>
          </div>
          <Flex className="h-full justify-center">
            <Image src={report?.img} fit="contain" />
          </Flex>
        </div>

        <div className="min-w-[23rem] rounded-lg bg-white shadow-report col gap-6">
          <div className="p-6 col gap-6">
            <p className="text-2xl font-medium">ดำเนินการ</p>
            <div className="col gap-4">
              <p>Download</p>
              <div className="row gap-6">
                <UnstyledButton>
                  <Pdf />
                </UnstyledButton>
                <UnstyledButton>
                  <Jpg />
                </UnstyledButton>
                <UnstyledButton>
                  <Png />
                </UnstyledButton>
              </div>
            </div>

            <div className="col gap-4">
              <p>พิจารณา</p>
              <div className="row w-full gap-6">
                <Button className="w-full" variant="default">
                  ไม่อนุมัติ
                </Button>
                <Button className="w-full" variant="primary">
                  อนุมัติ
                </Button>
              </div>
            </div>
          </div>

          <hr />

          <div className="p-6 pt-0 col gap-6">
            <div className="row items-center gap-2">
              <History className="size-6 text-gray-500"/>
              <p className="font-medium">
                ประวัติการจัดทำรายงานสาธารณภัยประจำวัน
              </p>
            </div>

            <div className="col text-sm pb-6 border-b border-gra2-300">
              <p className="text-gray-300">20/11/2567 ,07:15 น.</p>
              <div className="grid grid-cols-[5.25rem_1fr] [&>:nth-child(odd)]:text-gray-300 [&>:nth-child(odd)]:text-right gap-x-2">
                <p>การดำเนินการ: </p>
                <p>
                  ส่ง <span className="text-blue-400">SUP_OP_P003</span>
                </p>
                <p>โดย:</p>
                <p>สมชาย นามสมมติ</p>
                <p>รายละเอียด:</p>
                <p>ส่งรายงานประจำวันเพื่ออนุมัติ</p>
              </div>
            </div>
          </div>
        </div>
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
