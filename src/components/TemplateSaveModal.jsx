"use client";

import { DISASTERS } from "@/constants";
import { Button, Modal, MultiSelect, TextInput } from "@mantine/core";

export function TemplateSaveModal({
    isRequestApproval,
    isOpen,
    setTemplateName,
    setIsOpenSaveModal,
    setIsOpenSaveCompleteModal
  }) {
  const disasterMultiSelectData = DISASTERS.map((disaster) => ({
    value: disaster.value,
    label: disaster.text
  }));

  const handleComplete = () => {
    // TODO: call API
    setIsOpenSaveModal(false);
    setIsOpenSaveCompleteModal(true);
  }

  return (
    <Modal
      opened={isOpen}
      centered
      title={<span className="text-gray-900 font-medium text-xl">ตั้งชื่อรูปแบบรายงาน</span>}
      withCloseButton={false}
      onClose={() => setIsOpenSaveModal(false)}
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
          onClick={() => setIsOpenSaveModal(false)}
        >
          ยกเลิก
        </Button>
        <Button
          radius="md"
          className="font-medium min-w-[8rem]"
          onClick={handleComplete}
        >
          {isRequestApproval ? 'บันทึก และทำการส่ง' : 'บันทึก' }
        </Button>
      </div>
    </Modal>
  );
}
