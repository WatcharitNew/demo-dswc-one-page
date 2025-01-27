"use client";
import { useContext } from "react";
import clsx from "clsx";
import { Flex, Image, Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import { BackIcon, NextIcon } from "@/icons";
import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";
import Menu from "./components/Menu";
import { TemplateSaveModal, TemplateSaveCompleteModal } from "@/components";

const SelectOutline = () => {
  const {
    selectedTemplate,
    setSelectedTemplate,
    templateName,
    setTemplateName,
    openedSaveModal,
    openSaveModal,
    closeSaveModal,
    openedSaveCompleteModal,
    openSaveCompleteModal,
    closeSaveCompleteModal
  } = useContext(CreateLayoutContext);
  const router = useRouter();

  return (
    <Flex className="w-full">
      <Menu />
      <div className="m-auto">
        <Flex className="justify-between gap-2 mb-2 items-center">
          <div>
            {selectedTemplate ? (
              <p className="text-gray-400">{`V0${selectedTemplate}`}</p>
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
              "bg-white": selectedTemplate === undefined,
            }
          )}
        >
          {selectedTemplate ? (
            <Image src={`/template_0${selectedTemplate}.svg`} fit="contain" />
          ) : (
            <p className="text-gray-400 m-auto">กรุณาเลือกรูปแบบ</p>
          )}
        </Flex>
        <Flex className="md:w-[25rem] 2xl:w-[32rem] h-fit row gap-2 absolute bottom-[10px] items-end z-10 justify-end">
          <Button
            variant="outline"
            className="w-[8.6rem]"
            onClick={() => router.push("/templater")}
          >
            ยกเลิก
          </Button>
          <Button
            disabled={!selectedTemplate}
            variant="primary"
            className="w-[8.6rem]"
            onClick={openSaveModal}
          >
            ดำเนินการต่อ
          </Button>
        </Flex>
      </div>
      <TemplateSaveModal
        opened={openedSaveModal}
        setTemplateName={setTemplateName}
        close={closeSaveModal}
        openSaveCompleteModal={openSaveCompleteModal}
      />
      <TemplateSaveCompleteModal
        templateName={templateName}
        opened={openedSaveCompleteModal}
        close={closeSaveCompleteModal}
      />
    </Flex>
  );
};

export default SelectOutline;
