"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
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

import { useAuthContext } from "@/lib/providers/auth";
import { useListReports } from "../services";
import { downloadJpg, downloadPng } from "@/lib/helpers/downloadImage";
import { getBadgeStatus, getStatusText } from "../components";

import { History, Pdf, Jpg, Png, Sent } from "@/icons";

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
  const { id } = useParams();
  const { data } = useAuthContext();
  const { data: reports } = useListReports(data?.province);

  const report = useMemo(() => {
    return reports?.report_table?.find((_, idx) => idx + 1 === Number(id));
  }, [reports, id]);

  return (
    <div className="col gap-6 p-6">
      <Breadcrumbs>{items}</Breadcrumbs>
      <div className="grow row gap-6">
        <div className="w-[53rem] rounded-lg bg-white shadow-report p-6 col gap-6">
          <div className="col gap-2">
            <p className="text-2xl font-medium">
              ข้อมูลรายงานสาธารณภัยประจำวัน
            </p>
            <div className="grid grid-cols-[10.5rem_1fr_7rem_1fr] gap-2 max-w-[35rem] [&>:nth-child(odd)]:text-gray-300 [&>:nth-child(even)]:text-gray-500 [&>:nth-child(even)]:font-medium">
              <p>วันที่รายงานเหตุ</p>
              <p>{report?.date}</p>
              <p>Template</p>
              <p>{report?.template_name}</p>
              <p>ครั้งที่และเวลาประมวลผล</p>
              <p>
                {report?.order}, {report?.time}
              </p>
              <p>สถานะ</p>
              <div className="text-current">
                <Badge
                  variant="light"
                  color={getBadgeStatus(report?.status)}
                  size="lg"
                  style={{ fontWeight: 400 }}
                >
                  {getStatusText(report?.status)}
                </Badge>
              </div>
            </div>
          </div>
          <Flex className="h-full justify-center">
            <Image className="w-1/2" src={report?.img_url} fit="contain" />
          </Flex>
        </div>

        <div className="w-[23rem] rounded-lg bg-white shadow-report col gap-6">
          <div className="p-6 col gap-6">
            <p className="text-2xl font-medium">ดำเนินการ</p>
            <div className="col gap-4">
              <p>Download</p>
              <div className="row gap-6">
                <UnstyledButton
                  disabled={report?.status === "pending"}
                  className={clsx({
                    "opacity-30": report?.status === "pending",
                  })}
                >
                  <Pdf />
                </UnstyledButton>
                <UnstyledButton
                  disabled={report?.status === "pending"}
                  className={clsx({
                    "opacity-30": report?.status === "pending",
                  })}
                  onClick={async () => {
                    await downloadJpg(report?.img_url);
                  }}
                >
                  <Jpg />
                </UnstyledButton>
                <UnstyledButton
                  disabled={report?.status === "pending"}
                  className={clsx({
                    "opacity-30": report?.status === "pending",
                  })}
                  onClick={() => downloadPng(report?.img_url)}
                >
                  <Png />
                </UnstyledButton>
              </div>
            </div>
            {report?.status === "approved" ? null : (
              <div className="col gap-4">
                <p>ส่งออก</p>
                <div className="row w-full gap-6">
                  <Button
                    disabled={report?.status === "pending"}
                    className="w-full gap-4"
                    variant="default"
                    leftSection={<Sent />}
                  >
                    ส่งอีเมล
                  </Button>
                </div>
              </div>
            )}

            {/* Approve Reporter */}
            {/* <div className="col gap-4">
              <p>พิจารณา</p>
              <div className="row w-full gap-6">
                <Button className="w-full" variant="default">
                  ไม่อนุมัติ
                </Button>
                <Button className="w-full" variant="primary">
                  อนุมัติ
                </Button>
              </div>
            </div> */}
          </div>

          <hr />

          {/* Mock */}
          <div className="p-6 pt-0 col gap-6">
            <div className="row items-center gap-2">
              <History className="size-6 text-gray-500" />
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
