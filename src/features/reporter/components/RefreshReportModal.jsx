"use client";

import {
  Modal,
  Image,
} from "@mantine/core";

export const RefreshReportModal = ({ opened }) => {
  return (
    <Modal
      opened={opened}
      closeOnClickOutside={false}
      withCloseButton={false}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 1,
      }}
      radius="md"
      className="text-center "
      styles={{
        content: {
          paddingTop: "1rem",
          paddingBottom: "1rem",  
        },
      }}
      centered
    >
      <Image src="/loading.gif" h={200} alt="loading"/>
      <Image src="/loading-bar.gif" h={25} alt="loading-bar"/>
      <p className="text-2xl font-medium">กรุณารอซักครู่</p>
      <p>ระบบกำลังประมวลผลข้อมูล...</p>
    </Modal>
  );
};
