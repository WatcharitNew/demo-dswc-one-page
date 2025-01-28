"use client";

import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { ComponentPreview } from "./ComponentPreview";
import { ComponentCustom } from "./ComponentCustom";
import { Modal } from "@/components";

export const CustomComponentModal = ({
  disaster = "อุทกภัย",
  type = "table",
}) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} close={close} title={`ส่วนประกอบข้อมูลกลุ่ม${disaster}`}>
        <div className="w-full min-w-[78.3125rem] h-[70vh] flex flex-row gap-20">
          <ComponentPreview text={disaster} image="mock-component-1.svg" />
          {type === "table" && <ComponentCustom />}
        </div>
      </Modal>

      <Button variant="default" onClick={open}>
        Component Modal
      </Button>
    </>
  );
};
