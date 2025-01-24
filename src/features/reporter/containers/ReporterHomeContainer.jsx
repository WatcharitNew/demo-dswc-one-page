"use client";

import { useDisclosure } from "@mantine/hooks";
import { Button, Center, Input, UnstyledButton } from "@mantine/core";

import { CreateReportModal, ReportTable } from "../components";
import { AddIcon, Filter, Search, Sort } from "@/icons";

export const ReporterHomeContainer = () => {
  const [
    createReportOpened,
    { open: openCreateReport, close: closeCreateReport },
  ] = useDisclosure(false);

  return (
    <div className="max-w-[78.875rem] mx-auto">
      <div className="col gap-8">
        <Center className="h-52 rounded-lg bg-gray-300">
          Put Status Component Here
        </Center>
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
                ประวัติการจัดทำรายงานสาธารณภัยประจำวัน จังหวัดสุพรรณบุรี
              </p>
              <UnstyledButton className="row items-center text-sm gap-2 text-gray-900">
                <Sort className="size-6 text-gray-600" />
                จัดเรียงตาม
              </UnstyledButton>
            </div>

            <ReportTable />
          </div>
        </div>
      </div>

      <CreateReportModal
        opened={createReportOpened}
        onClose={closeCreateReport}
      />
    </div>
  );
};
