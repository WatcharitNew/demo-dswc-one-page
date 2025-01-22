"use client";

import { useState, useCallback } from "react";
import { Input, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { MOCK_REPORT, MOCK_REPORT_CENTER } from "@/constants";

import { ReportScaleUpModal } from "@/components";
import { Search } from "@/icons";

export const ReportListContainer = () => {
  const [selectedReport, setSelectedReport] = useState({
    imageSrc: "",
    templateName: "",
  });
  const [opened, { open, close }] = useDisclosure(false);

  const handleOnClickReport = useCallback(
    (selected) => {
      setSelectedReport(selected);
      open();
    },
    [open]
  );

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
        <p className="font-medium text-xl">
          รูปแบบรายงานส่วนกลาง ({MOCK_REPORT_CENTER.length})
        </p>
        <div className="flex items-center gap-6">
          {MOCK_REPORT_CENTER.map((report) => (
            <div
              key={report.name}
              className="report-card-container"
              onClick={() =>
                handleOnClickReport({
                  imageSrc: report.src,
                  tamplateName: report.name,
                })
              }
            >
              <div className="report-card-inner-container">
                <div className="grow">
                  <Image h={240} src={report.src} />
                </div>
                <p className="text-lg font-medium">{report.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mock */}
      {MOCK_REPORT.map((report) => (
        <div key={report.title} className="flex flex-col gap-2">
          <p className="font-medium text-xl">{report.title}</p>
          <div className="flex items-center gap-4">
            <div
              className="report-card-container"
              onClick={() =>
                handleOnClickReport({
                  imageSrc: report.src,
                  templateName: report.name,
                })
              }
            >
              <div className="report-card-inner-container">
                <div className="grow">
                  <Image h={240} src={report.src} />
                </div>
                <p className="text-lg font-medium">{report.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <ReportScaleUpModal
        selectedReport={selectedReport}
        opened={opened}
        onClose={close}
      />
    </div>
  );
};
