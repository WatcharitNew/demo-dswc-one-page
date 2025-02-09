"use client";

import { VisualizeComponentPreview } from "./VisualizeComponentPreview";
import { VisualizeComponentCustom } from "./VisualizeComponentCustom";
import { Modal } from "@/components";
import { DISASTERS_WITH_OTHER } from "@/constants";

export const CustomVisualizeComponentModal = ({
  disaster = "flood",
  imgUrl,
  opened,
  close,
}) => {
  const disasterText = DISASTERS_WITH_OTHER.find((d) => d.value === disaster)?.text;

  return (
    <>
      <Modal
        opened={opened}
        close={close}
        title={`ส่วนประกอบข้อมูลกลุ่ม${disasterText}`}
        cancelText="ยกเลิก"
        cancelAction={close}
        proceedText="นำไปใช้"
        proceedAction={close}
      >
        <div className="w-full min-w-[78.3125rem] h-[70vh] flex flex-row gap-20">
          <VisualizeComponentPreview
            text={disasterText}
            image={imgUrl}
          />
          <VisualizeComponentCustom />
        </div>
      </Modal>
    </>
  );
};
