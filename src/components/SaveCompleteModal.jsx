"use client";

import { Button, Modal } from "@mantine/core";

export const SaveCompleteModal = (
  {
    templateName,
    opened,
    close
  }
) => {
  return (
    <Modal
      opened={opened}
      centered
      title={<span className="text-gray-900 font-medium text-xl">บันทึกและดำเนินการส่งเรียบร้อย</span>}
      withCloseButton={false}
      onClose={close}
      className="bg-white rounded-2xl text-center"
      classNames={{
        header: 'px-8 pt-24 pb-2',
        title: 'w-full',
        body: 'px-8',
        content: 'rounded-2xl'
      }}
    >
      <span className="text-gray-600">{templateName} : อยู่ระหว่างตรวจสอบ</span>
      <div>
        <Button
          radius="md"
          variant="default"
          className="font-medium mt-6 mb-4 min-w-[8rem]"
          onClick={close}
        >
          ปิด
        </Button>
      </div>
    </Modal>
  );
}
