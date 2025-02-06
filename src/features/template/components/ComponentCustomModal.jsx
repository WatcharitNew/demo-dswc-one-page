"use client";

import { ComponentPreview } from "./ComponentPreview";
import { ComponentCustom } from "./ComponentCustom";
import { Modal } from "@/components";
import { DISASTERS_WITH_OTHER } from "@/constants";

export const ComponentCustomModal = ({
  disaster = "flood",
  isTable,
  componentData,
  opened,
  close,
  proceedAction
}) => {
  const disasterText = DISASTERS_WITH_OTHER.find((d) => d.value === disaster)?.text;

  return (
    <>
      <Modal
        opened={opened}
        close={close}
        title={`ส่วนประกอบข้อมูลกลุ่ม${disasterText}`}
        cancelText="เลือกชุดข้อมูลใหม่"
        cancelAction={close}
        proceedText="นำไปใช้"
        proceedAction={proceedAction}
      >
        <div className="w-full min-w-[78.3125rem] h-[70vh] flex flex-row gap-20">
          <ComponentPreview
            text={disasterText}
            image={
              componentData?.mock_img_url ||
              componentData?.empty_img_url
            }
          />
          {isTable && <ComponentCustom />}
        </div>
      </Modal>
    </>
  );
};
