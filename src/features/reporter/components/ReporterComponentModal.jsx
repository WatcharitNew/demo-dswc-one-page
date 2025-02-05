import { UploadFile } from "@/components";
import { Button, Image, Modal, Textarea } from "@mantine/core";

export const ReporterComponentModal = ({
  type,
  opened,
  onClose,
  onProcess,
  content,
  setContent,
}) => {
  return (
    <Modal
      opened={opened}
      onClose={() => {
        onClose();
        setContent(undefined);
      }}
      title={type === "text" ? "ข้อความ" : "รูปภาพ"}
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
      <div className="w-full h-[40.625rem] p-6 bg-gray-100">
        {type === "text" ? (
          <div className="w-full">
            <Image
              src="/text-editor.svg"
              width="auto"
              h={40}
              className="mb-4 max-w-[46rem]"
            />
            <Textarea
              className="border-0 rounded-none"
              autosize
              minRows={7}
              maxRows={7}
              onChange={(e) => setContent(e.target?.value)}
            />
          </div>
        ) : (
          <UploadFile onChange={(file) => setContent(file)} file={content} />
        )}
      </div>
      <div className="min-w-[78.3125rem] h-[5.5rem] bg-white sticky flex z-50 bottom-0 shadow-xl">
        <div className="flex flex-row gap-4 ml-auto my-auto mr-6">
          <Button
            variant="filled"
            className="h-10 w-40"
            onClick={() => onProcess()}
          >
            ดำเนินการต่อ
          </Button>
        </div>
      </div>
    </Modal>
  );
};
