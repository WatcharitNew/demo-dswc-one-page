"use client";

import { useState, useCallback, useMemo } from "react";
import { Button, Input, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { MOCK_REPORT } from "@/constants";

import { ReportScaleUpModal, TemplateModal } from "@/components";
import { AddIcon, Search } from "@/icons";
import { useListTemplates } from "../services";
import { useAuthContext } from "@/lib/providers/auth";

const translateDisaster = (disaster) => {
  switch (disaster) {
    case "flood":
      return "อุทกภัย";
    case "drought":
      return "ภัยแล้ง";
    case "storm":
      return "วาตภัย";
    case "mudslide":
      return "ดินโคลนถล่ม";
    case "earthquake-tsunami":
      return "แผ่นดินไหว";
    case "pm25":
      return "pm2.5";
    case "forest-fire":
      return "ไฟป่า";
  }
};

export const ReportListContainer = ({ disaster }) => {
  const [selectedReport, setSelectedReport] = useState({
    imageSrc: "",
    templateName: "",
  });
  const [opened, { open, close }] = useDisclosure(false);
  const [createModal, { open: openCreateModal, close: closeCreateModal }] =
    useDisclosure(false);
  const { data: authData } = useAuthContext();
  const { data } = useListTemplates(authData["province"]);

  const filteredData = useMemo(() => {
    return (
      data?.filter((datum) =>
        datum.tags.includes(translateDisaster(disaster))
      ) || []
    );
  }, [data, disaster]);

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
        <Button
          className="w-40 h-11"
          variant="primary"
          leftSection={<AddIcon />}
          onClick={openCreateModal}
        >
          สร้างใหม่
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-xl">
          รูปแบบรายงานส่วนกลาง ({filteredData?.length || 0})
        </p>
        <div className="grid grid-cols-5 items-center gap-6">
          {filteredData?.map((report, idx) => (
            <div
              key={report.template_name + idx}
              className="report-card-container"
              onClick={() =>
                handleOnClickReport({
                  imageSrc: report.img_url,
                  templateName: report.template_name,
                })
              }
            >
              <div className="report-card-inner-container">
                <Image className="h-full" src={report.img_url} />

                <p className="text-lg font-medium overflow-hidden truncate">
                  {report.template_name}
                </p>
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
                <Image className="h-full" src={report.src} />

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
      <TemplateModal opened={createModal} close={closeCreateModal} />
    </div>
  );
};
