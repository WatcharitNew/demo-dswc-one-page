"use client";

import { Modal } from "@mantine/core";

export const CreateReportModal = ({opened, onClose}) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 1,
      }}
      radius="md"
      styles={{
        body: {
          padding: "2rem",
        },
      }}
      size="70%"
      centered
    >
      test
    </Modal>
  );
};
