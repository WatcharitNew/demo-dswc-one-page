import { Modal as MantineModal } from "@mantine/core";

export const Modal = ({ opened, close, title, children }) => {
  return (
    <MantineModal
      opened={opened}
      onClose={close}
      title={title}
      size="auto"
      centered
      styles={{
        header: {
          width: "78.3125rem",
          paddingTop: "1.5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        },
        title: {
          color: "#707070",
          fontSize: "1.5rem",
          fontWeight: "500",
        },
        body: {
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        },
      }}
    >
      {children}
    </MantineModal>
  );
};
