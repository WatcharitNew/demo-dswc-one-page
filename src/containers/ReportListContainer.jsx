"use client";

import { Input, Image } from "@mantine/core";
import { Search } from "@/icons";

export const ReportListContainer = () => {
  return (
    <div className="flex flex-col mt-6 gap-6">
      <div className="flex flex-row items-center justify-between">
        <Input
          leftSection={<Search />}
          placeholder="ค้นหาด้วย ชื่อ Template"
          miw={435}
          styles={{
            section: { paddingInlineStart: "1rem" },
            input: { paddingInlineStart: "2.8rem" },
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-xl">รูปแบบรายงานส่วนกลาง (2)</p>
        <div className="flex items-center gap-6">
          <div className="report-card-container">
            <div className="report-card-inner-container">
              <div className="grow">
                <Image
                  h={240}
                  src="https://placehold.co/200x400?text=Placeholder"
                />
              </div>
              <p className="text-lg font-medium">TEM_DDPM_002</p>
            </div>
          </div>
          <div className="report-card-container">
            <div className="report-card-inner-container">
              <div className="grow">
                <Image
                  h={240}
                  src="https://placehold.co/200x400?text=Placeholder"
                />
              </div>
              <p className="text-lg font-medium">TEM_DDPM_001</p>
            </div>
          </div>
        </div>
      </div>
      {/* Mock */}
      <div className="flex flex-col gap-2">
        <p className="font-medium text-xl">รอตรวจสอบ (1)</p>
        <div className="flex items-center gap-4">
          <div className="report-card-container">
            <div className="report-card-inner-container">
              <div className="grow">
                <Image
                  h={240}
                  src="https://placehold.co/200x400?text=Placeholder"
                />
              </div>
              <p className="text-lg font-medium">TEM_DDPM_003</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-xl">ฉบับร่าง (1)</p>
        <div className="flex items-center gap-4">
          <div className="report-card-container">
            <div className="report-card-inner-container">
              <div className="grow">
                <Image
                  h={240}
                  src="https://placehold.co/200x400?text=Placeholder"
                />
              </div>
              <p className="text-lg font-medium">V01_Draft</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
