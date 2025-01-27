"use client";

import { DISASTERS } from "@/constants";
import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";
import { Button, Modal, MultiSelect, TextInput } from "@mantine/core";
import { useContext } from "react";

const SaveModal = () => {
  const {
    setTemplateName,
    openedSaveModal: opened,
    closeSaveModal: close,
    openSaveCompleteModal
  } = useContext(CreateLayoutContext);

  const disasterMultiSelectData = DISASTERS.map((disaster) => ({
    value: disaster.value,
    label: disaster.text
  }));

  const handleComplete = () => {
    // TODO: call API
    close();
    openSaveCompleteModal(true);
  }

  return (
    <Modal
      opened={opened}
      centered
      title={<span className="text-gray-900 font-medium text-xl">ตั้งชื่อรูปแบบรายงาน</span>}
      withCloseButton={false}
      onClose={close}
      className="bg-white rounded-2xl text-center"
      classNames={{
        header: 'px-8 pt-8 pb-2',
        title: 'w-full',
        body: 'px-8',
        content: 'rounded-2xl'
      }}
    >
      <div>
        <span className="text-gray-600">กรุณาตั้งชื่อรูปแบบรายงาน เพื่อทำการส่ง</span>
      </div>
      <TextInput
        size="md"
        placeholder="ชื่อรูปแบบรายงาน"
        className="mt-4"
        onChange={(e) => setTemplateName(e.target.value)}
        required
      />
      <MultiSelect
        placeholder="ประเภทภัย"
        size="md"
        data={disasterMultiSelectData}
        className="mt-4 mb-8"
        classNames={{
          option: 'text-gray-900'
        }}
      />
      <div>
        <Button
          radius="md"
          variant="default"
          className="font-medium mr-4 min-w-[8rem]"
          onClick={close}
        >
          ยกเลิก
        </Button>
        <Button
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

export default SaveModal;
