"use client";

import { Button, Modal } from "@mantine/core";

export function TemplateSaveCompleteModal({ templateName, isRequestApproval, isOpen, onClose }) {
  const descriptionText = isRequestApproval ? `${templateName} : อยู่ระหว่างตรวจสอบ` : `บันทึกรูปแบบรายงาน : ${templateName}`

  return (
    <Modal
      opened={isOpen}
      centered
      title={<span className="text-gray-900 font-medium text-xl">{isRequestApproval ? 'บันทึกและดำเนินการส่งเรียบร้อย' : 'ดำเนินการสำเร็จ'}</span>}
      withCloseButton={false}
      onClose={onClose}
      className="bg-white rounded-2xl text-center"
      classNames={{
        header: 'px-8 pt-24 pb-2',
        title: 'w-full',
        body: 'px-8',
        content: 'rounded-2xl'
      }}
    >
      <span className="text-gray-600">{descriptionText}</span>
      <div>
        <Button
          radius="md"
          variant="default"
          className="font-medium mt-6 mb-4 min-w-[8rem]"
          onClick={onClose}
        >
          ปิด
        </Button>
      </div>
    </Modal>
  );
}
