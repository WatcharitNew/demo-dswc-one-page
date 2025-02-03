import { Button, Modal as MantineModal } from "@mantine/core";

export const Modal = ({
  opened,
  close,
  title,
  children,
  cancelText,
  proceedText,
  cancelAction,
  proceedAction,
  isProceedDisabled,
}) => {
  return (
    <>
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
            padding: "0",
            position: "relative",
          },
        }}
      >
        <div className="w-full px-6">{children}</div>
        <div className="min-w-[78.3125rem] h-[5.5rem] bg-white sticky flex z-50 bottom-0 shadow-xl">
          <div className="flex flex-row gap-4 ml-auto my-auto mr-6">
            {cancelText && (
              <Button
                variant="default"
                className="h-10 w-40"
                onClick={(e) => cancelAction?.(e)}
              >
                {cancelText}
              </Button>
            )}
            {proceedText && (
              <Button
                variant="filled"
                className="h-10 w-40"
                onClick={(e) => proceedAction?.(e)}
                disabled={isProceedDisabled}
              >
                {proceedText}
              </Button>
            )}
          </div>
        </div>
      </MantineModal>
    </>
  );
};
