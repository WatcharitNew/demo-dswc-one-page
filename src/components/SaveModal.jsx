"use client";

import { DISASTERS } from "@/constants";
import { Button, Modal, MultiSelect, TextInput } from "@mantine/core";

const transformToTag = (value) => {
  switch (value) {
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
    default:
      return value;
  }
};

export const SaveModal = ({
    setTemplateName,
    opened,
    close,
    setTags,
    isPending,
    handleComplete
  }) => {

  const disasterMultiSelectData = DISASTERS.map((disaster) => ({
    value: disaster.value,
    label: disaster.text,
  }));

  return (
    <Modal
      opened={opened}
      centered
      title={
        <span className="text-gray-900 font-medium text-xl">
          ตั้งชื่อรูปแบบรายงาน
        </span>
      }
      withCloseButton={false}
      onClose={close}
      className="bg-white rounded-2xl text-center"
      classNames={{
        header: "px-8 pt-8 pb-2",
        title: "w-full",
        body: "px-8",
        content: "rounded-2xl",
      }}
    >
      <div>
        <span className="text-gray-600">
          กรุณาตั้งชื่อรูปแบบรายงาน เพื่อทำการส่ง
        </span>
      </div>
      <TextInput
        size="md"
        placeholder="ชื่อรูปแบบรายงาน"
        className="mt-4"
        onChange={(e) => setTemplateName(e.target.value)}
        required
      />
      {setTags && <MultiSelect
        placeholder="ประเภทภัย"
        size="md"
        data={disasterMultiSelectData}
        onChange={(value) => setTags(value.map(transformToTag))}
        className="mt-4"
        classNames={{
          option: "text-gray-900",
        }}
      />}
      <div className='mt-8'>
        <Button
          radius="md"
          variant="default"
          className="font-medium mr-4 min-w-[8rem]"
          onClick={close}
        >
          ยกเลิก
        </Button>
        <Button
          loading={isPending}
          disabled={isPending}
          radius="md"
          className="font-medium min-w-[8rem]"
          onClick={handleComplete}
        >
          บันทึก และทำการส่ง
        </Button>
      </div>
    </Modal>
  );
}
