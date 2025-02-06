"use client";

import { useContext } from "react";
import { clsx } from "clsx";
import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";

import { useCreateTemplate, useListLayouts } from "../services";
import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";

import { Button, Flex } from "@mantine/core";
import { BackIcon, NextIcon } from "@/icons";
import Layout from "../components/Layout";
import { TemplateComponentModal } from "@/features/template/components";
import { SaveModal } from "@/components/SaveModal";
import { SaveCompleteModal } from "@/components/SaveCompleteModal";

export const CreateLayoutByIdContainer = () => {
  const { id } = useParams();
  const { data } = useListLayouts();
  const {
    selectedLayout,
    createLayoutData,
    openSaveModal,
    openedSaveModal,
    closeSaveModal,
    openSaveCompleteModal,
    openedSaveCompleteModal,
    closeSaveCompleteModal,
    templateName,
    setTemplateName,
    tags,
    setTags,
    setCreateLayoutData,
  } = useContext(CreateLayoutContext);
  const { mutate: createTemplate, isPending } = useCreateTemplate();
  const router = useRouter();

  const layout = useMemo(() => {
    return data?.find((item) => item.layout_id === Number(id));
  }, [data, id]);

  const handleSaveComplete = () => {
    createTemplate(
      {
        ...createLayoutData,
        layout_id: selectedLayout?.layout_id,
        name: templateName,
        status: "submitted",
        tags,
      },
      {
        onSettled() {
          close();
        },
        onSuccess() {
          openSaveCompleteModal(true);
        },
      }
    );
  }

  const handleCloseSaveCompleteModal = () => {
    closeSaveCompleteModal();
    router.push("/templater");
  }

  const handleBackButton = () => {
    setCreateLayoutData({ ...createLayoutData, component: [] })
    router.push("/create-layout/outline");
  };

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
          <Button
            variant="outline"
            className="h-10 min-w-20 mr-auto"
            onClick={handleBackButton}
          >
            ย้อนกลับ
          </Button>
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
      <SaveModal
        opened={openedSaveModal}
        close={closeSaveModal}
        setTemplateName={setTemplateName}
        setTags={setTags}
        isPending={isPending}
        handleComplete={handleSaveComplete}
      />
      <SaveCompleteModal
        opened={openedSaveCompleteModal}
        close={handleCloseSaveCompleteModal}
        templateName={templateName}
      />
    </Flex>
  );
};
