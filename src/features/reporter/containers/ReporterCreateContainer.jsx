"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";

import { useReloadReport } from "../services";
import { SAMPLE_REPORT } from "../constants";

import { RefreshReportModal } from "../components";
import { Button, Image } from "@mantine/core";
import { Refresh, Multiplier1, Multiplier15, Multiplier2 } from "@/icons";
import { useListTemplates } from "@/features/templater/services";
import { useAuthContext } from "@/lib/providers/auth";

export const ReporterCreateContainer = () => {
  const { id } = useParams();
  const { data } = useAuthContext()
  const { data: templates } = useListTemplates(data?.province)
  const [opened, { open, close }] = useDisclosure(false);
  const { mutate: reload } = useReloadReport();

  const imageSrc = useMemo(() => {
    return templates.find((item) => item.template_id === Number(id))?.img_url
  }, [id])

  return (
    <div className="col h-full">
      <div className="grow row justify-center pt-2 pb-8 overflow-auto">
        <div className="w-full h-fit max-w-[34rem] col gap-2">
          <div className="row items-end justify-between">
            <p className="font-medium text-gray-300">ตัวอย่างรายงานสาธารณภัย</p>
            <Button.Group>
              <Button
                className="h-10 px-3 !border-0 !rounded-r-none"
                variant="default"
                onClick={() => {
                  open();
                  reload(null, {
                    onSettled() {
                      close();
                    },
                  });
                }}
              >
                <Refresh />
              </Button>
              <Button
                className="h-10 px-3 !border-0 !rounded-none"
                variant="default"
              >
                <Multiplier1 />
              </Button>
              <Button
                className="h-10 px-3 !border-0 !rounded-none"
                variant="default"
              >
                <Multiplier15 />
              </Button>
              <Button
                className="h-10 px-3 !border-0 !rounded-l-none"
                variant="default"
              >
                <Multiplier2 />
              </Button>
            </Button.Group>
          </div>
          <Image
            alt="report-by-id-image"
            src={imageSrc}
            className="w-full"
            fit="contain"
          />
        </div>
      </div>
      <div className="bg-white h-16 p-3 row items-center justify-center">
        <div className="row items-center justify-end gap-4 w-full max-w-[34rem]">
          <Button className="h-10 min-w-40" variant="outline">
            แก้ไข
          </Button>
          <Button className="h-10 min-w-40" variant="primary">
            ส่งอนุมัติ
          </Button>
        </div>
      </div>

      <RefreshReportModal opened={opened} />
    </div>
  );
};
