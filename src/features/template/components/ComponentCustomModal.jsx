"use client";

import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { ComponentPreview } from "./ComponentPreview";
import { ComponentCustom } from "./ComponentCustom";

export const CustomComponentModal = ({
  disaster = "อุทกภัย",
  type = "table",
}) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={`ส่วนประกอบข้อมูลกลุ่ม${disaster}`}
        size="auto"
        centered
        styles={{
          header: {
            width: "78.3125rem",
            paddingTop: "1.5rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          },
          title: {
            color: "#707070",
            fontSize: "1.5rem",
            fontWeight: "500",
          },
          body: {
            paddingLeft: "1.5rem",
            paddingRight: "3rem",
          },
        }}
      >
        <div className="w-full min-w-[78.3125rem] h-[70vh] flex flex-row gap-20">
          <ComponentPreview text={"test"} image="mock-component-1.svg" />
          {type === "table" && <ComponentCustom />}
        </div>
      </Modal>

      <Button variant="default" onClick={open}>
        Component Modal
      </Button>
    </>
  );
};
