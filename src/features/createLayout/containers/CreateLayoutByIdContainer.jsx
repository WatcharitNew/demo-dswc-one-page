"use client";

import { useContext } from "react";
import { clsx } from "clsx";
import { useMemo } from "react";
import { useParams } from "next/navigation";

import { useListLayouts } from "../services";
import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";

import { Button, Flex } from "@mantine/core";
import { BackIcon, NextIcon } from "@/icons";
import Layout from "../components/Layout";
import SaveModal from "../components/SaveModal";
import SaveCompleteModal from "../components/SaveCompleteModal";
import { TemplateComponentModal } from "@/features/template/components";

export const CreateLayoutByIdContainer = () => {
  const { id } = useParams();
  const { data } = useListLayouts();
  const { openSaveModal, createLayoutData } = useContext(CreateLayoutContext);

  const layout = useMemo(() => {
    return data?.find((item) => item.layout_id === Number(id));
  }, [data, id]);

  return (
    <Flex className="w-full h-full">
      <div className="m-auto">
        <Flex className="justify-between gap-2 mb-2 items-center">
          <div>
            {layout ? (
              <p className="text-gray-400">{`V0${layout.layout_id}`}</p>
            ) : null}
          </div>
          <Flex className="justify-end gap-2 mb-2">
            <BackIcon />
            <NextIcon />
          </Flex>
        </Flex>
        <Flex
          className={clsx(
            "md:w-[25rem] 2xl:w-[32rem] 2xl:h-[46rem] md:h-[36.5rem] shadow-sm  relative",
            {
              "bg-white": layout === undefined,
            }
          )}
        >
          {layout ? (
            <Layout data={layout.bbox} />
          ) : (
            <p className="text-gray-400 m-auto">กรุณาเลือกรูปแบบ</p>
          )}
        </Flex>
        <Flex className="md:w-[25rem] 2xl:w-[32rem] h-fit row gap-2 absolute bottom-3 items-end z-10 justify-end">
          <Button variant="outline" className="h-10 min-w-40">
            บันทึกฉบับร่าง
          </Button>
          <Button
            disabled={
              layout?.bbox?.length !== createLayoutData?.component?.length
            }
            variant="primary"
            className="h-10"
            onClick={openSaveModal}
          >
            บันทึกและส่งเพื่อขออนุมัติ
          </Button>
        </Flex>
      </div>
      <TemplateComponentModal />
      <SaveModal />
      <SaveCompleteModal />
    </Flex>
  );
};
