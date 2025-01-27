"use client";

import { COMPONENT_CUSTOM_CHECKBOXES } from "@/constants";
import { PencilIcon } from "@/icons";
import { Checkbox, Input } from "@mantine/core";

export const ComponentCustom = () => {
  return (
    <div className="w-full bg-white flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-gray-500 font-medium">ชื่อส่วนประกอบข้อมูล</p>
        <Input
          readOnly
          value="ระดับน้ำท่า"
          rightSectionPointerEvents="none"
          rightSection={<PencilIcon />}
          className="h-11"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <p className="text-gray-500 font-medium">Function</p>
          <p className="text-sm text-gray-400">
            เลือกส่วนประกอบข้อมูล ที่ต้องการ
          </p>
        </div>
        <p className="text-gray-500 font-medium">
          เลือก Column ที่ต้องการแสดงข้อมูล
        </p>

        <div className="flex flex-col">
          {COMPONENT_CUSTOM_CHECKBOXES.map((checkbox) => (
            <Checkbox
              key={checkbox}
              defaultChecked
              label={checkbox}
              styles={{
                root: {
                  height: "2.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "left",
                },
                inner: {
                  scale: 1.2,
                  marginLeft: "1.5rem",
                },
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-gray-500 font-medium">แหล่งที่มา</p>
        <Input
          readOnly
          value="กรมชลประทาน"
          rightSectionPointerEvents="none"
          rightSection={<PencilIcon />}
          className="h-11"
        />
      </div>
    </div>
  );
};
