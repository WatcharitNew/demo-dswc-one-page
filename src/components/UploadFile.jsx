import { Flex, Image } from "@mantine/core";
import { useDropzone } from "react-dropzone";
import { UploadIcon } from "@/icons";
import colors from "@/styles/colors";

export const UploadFile = ({ onChange, file }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".png"],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      onChange(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  return (
    <Flex className="col gap-4">
      <Flex className="colitems-center justify-center w-full border-2 border-dashed border-gray-400  h-48 overflow-hidden cursor-pointer">
        <Flex
          {...getRootProps({ className: "dropzone" })}
          className="w-full flex-col h-full justify-center items-center"
        >
          <input {...getInputProps()} />
          <UploadIcon fill={colors.gray[500]} />
          <p className="text-gray-500 font-bold mt-4">
            Drag and drop files to upload
          </p>
        </Flex>
      </Flex>
      {file?.[0]?.preview ? (
        <Flex className="flex justify-start">
          <Image src={file?.[0]?.preview} fit="contain" h={250} />
        </Flex>
      ) : null}
    </Flex>
  );
};
