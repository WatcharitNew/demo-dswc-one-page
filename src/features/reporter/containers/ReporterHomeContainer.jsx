"use client";

import { useDisclosure } from "@mantine/hooks";
import { Button, Input, UnstyledButton } from "@mantine/core";

import dayjs from '@/lib/helpers/dayjs'
import { useAuthContext } from '@/lib/providers/auth';
import { INITIAL_OVERVIEW_DATA, OVERVIEW_STATUS } from "../constants";

import { OverviewStatusCard } from '@/components';
import { CreateReportModal, ReportTable } from "../components";
import { AddIcon, Filter, Search, Sort } from "@/icons";
import { useListReports } from "../services";
import { useMemo } from "react";
import { useListTemplates } from "@/features/templater/services";

export const ReporterHomeContainer = () => {
  const { data } = useAuthContext()
  const { data: reports } = useListReports(data?.province)
  const { data: templates } = useListTemplates(data?.province)
  const [
    createReportOpened,
    { open: openCreateReport, close: closeCreateReport },
  ] = useDisclosure(false);

  const formattedReports = useMemo(() => {
    return reports || INITIAL_OVERVIEW_DATA
  }, [reports])

  return (
    <div className="max-w-[78.875rem] mx-auto">
      <div className="col gap-8">
        <div className="col gap-6">
          <p className="text-black text-left font-medium text-xl">
            งานที่ต้องดำเนินการ ณ วันที่&nbsp;
            {dayjs(data.date).format("DD MMMM BBBB")}
          </p>
          <div className="flex flex-row gap-5 mx-auto">
            {OVERVIEW_STATUS.map((status) => (
              <OverviewStatusCard key={status} total={formattedReports?.summary_numbers?.[status]} status={status} />
            ))}
          </div>
        </div>
        <div className="col gap-6 shadow-report bg-white rounded-lg p-6">
          <div className="row gap-4">
            <Input
              leftSection={<Search />}
              placeholder="ค้นหาด้วย ชื่อ Template"
              miw={435}
              styles={{
                section: { paddingInlineStart: "1rem" },
                input: { paddingInlineStart: "2.8rem" },
              }}
            />
            <UnstyledButton className="row items-center text-sm gap-2 text-gray-900">
              <Filter className="size-6 text-gray-600" />
              ค้นหาแบบละเอียด
            </UnstyledButton>
            <Button
              className="h-11 ml-auto"
              variant="primary"
              leftSection={<AddIcon />}
              onClick={openCreateReport}
            >
              สร้างรายงานประจำวัน
            </Button>
          </div>
          <div className="col gap-4">
            <div className="row items-center justify-between">
              <p className="text-xl font-medium">
                ประวัติการจัดทำรายงานสาธารณภัยประจำวัน จังหวัด{data?.province?.name_th}
              </p>
              <UnstyledButton className="row items-center text-sm gap-2 text-gray-900">
                <Sort className="size-6 text-gray-600" />
                จัดเรียงตาม
              </UnstyledButton>
            </div>

            <ReportTable data={formattedReports?.report_table} />
          </div>
        </div>
      </div>

      <CreateReportModal
        templates={templates || []}
        opened={createReportOpened}
        onClose={closeCreateReport}
      />
    </div>
  );
};
