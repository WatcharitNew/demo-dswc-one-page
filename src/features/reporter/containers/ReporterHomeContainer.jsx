"use client";

import { Center, Input, UnstyledButton } from "@mantine/core";
import { Filter, Search, Sort } from "@/icons";

export const ReporterHomeContainer = () => {
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
            <Center className="bg-gray-300" h={320}>
              Table Here
            </Center>
          </div>
        </div>
      </div>
    </div>
  );
};
