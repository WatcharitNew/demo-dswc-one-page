"use client";

import { useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";

import { useReloadReport } from "../services";

import { RefreshReportModal } from "../components";
import { Button, Image } from "@mantine/core";
import { Refresh, Multiplier1, Multiplier15, Multiplier2 } from "@/icons";
import { useAuthContext } from "@/lib/providers/auth";
import { PROVINCES, TEMPLATE_HEIGHT, TEMPLATE_WIDTH } from "@/constants";

const getProvinceId = (province) => {
  return PROVINCES.findIndex((p) => p === province)
}

const getInitialReloadParams = (id, data) => {
  return {
    template_id: id,
    province_id: getProvinceId(data?.province),
    date: data?.date,
    customizable_component: []
  }
}

export const ReporterCreateContainer = () => {
  const { id } = useParams();
  const { data } = useAuthContext()
  const [opened, { open, close }] = useDisclosure(false);
  const { mutate: reload, data: reloadedReport } = useReloadReport()

  const imageSrc = useMemo(() => {
    return reloadedReport?.data?.img_url
  }, [reloadedReport?.data])

  const reloadReport = () => {
    open()
    reload(getInitialReloadParams(id, data), {
      onSettled() {
        close();
      },
    });
  }

  const customizableComponents = useMemo(() => {
    return reloadedReport?.data?.customizable_component || []
  }, [reloadedReport?.data])

  useEffect(() => {
    reloadReport()
  }, [id, data])

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
                  reloadReport()
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
          <div className="relative">
            <Image
              alt="report-by-id-image"
              src={imageSrc}
              className="w-full"
              fit="contain"
            />
            {customizableComponents.map(({ box, component_id }, idx) => (
              <div
                key={`${component_id}-${idx}`}
                onClick={() => console.log('click box')}
                className={`
                  bg-black absolute cursor-pointer
                  h-[calc((${box.bottom}-${box.top})*${TEMPLATE_HEIGHT}px)]
                  w-[calc((${box.right}-${box.left})*${TEMPLATE_WIDTH}px)]
                  top-[calc(${box.top}*${TEMPLATE_HEIGHT}px)]
                  left-[calc(${box.left}*${TEMPLATE_WIDTH}px)]
                `}
              ></div>
            ))}
          </div>
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
