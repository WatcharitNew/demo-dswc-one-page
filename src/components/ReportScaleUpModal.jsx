"use client";

import { Modal, Image, Stack } from "@mantine/core";

export const ReportScaleUpModal = ({ selectedReport, opened, onClose }) => {
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
      size="lg"
      centered
    >
      <Stack className="gap-4 items-center">
        <div className="col items-center justify-center w-full h-[70vh] bg-gray-100">
          <Image
            className="w-[24rem]"
            alt="report-modal-image"
            src={selectedReport.imageSrc}
            fallbackSrc="https://placehold.co/200x400?text=Placeholder"
          />
        </div>
        <h1 className="text-xl font-bold">
          {selectedReport.templateName || "TEM_DDPM_00"}
        </h1>
      </Stack>
    </Modal>
  );
};
