"use client";
import { useContext } from "react";
import clsx from "clsx";
import { Flex, Image, Textarea } from "@mantine/core";
import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";
import { UploadFile } from "@/components";
import { SPECIAL_TYPE } from "@/constants";

export const DisasterComponentList = ({ option, components }) => {
  const text = option?.value;
  const { selectedTempComponent, setSelectedTempComponent } =
    useContext(CreateLayoutContext);

  return (
    <div className="w-full bg-gray-100 flex flex-col gap-2 p-6 overflow-auto">
      {text && (
        <>
          {option?.custom === "text" ? (
            <>
              <p className="text-sm text-gray-400">ข้อความ</p>
              <div className="w-full">
                <Image
                  src="/text-editor.svg"
                  width="auto"
                  h={40}
                  className="mb-2"
                />
                <Textarea
                  className="border-0 rounded-none"
                  autosize
                  minRows={7}
                  maxRows={7}
                  onChange={(e) =>
                    setSelectedTempComponent({
                      ...selectedTempComponent,
                      data: {
                        ...selectedTempComponent.data,
                        content: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </>
          ) : null}
          {option?.custom === "image" ? (
            <>
              <p className="text-sm text-gray-400">รูปภาพ</p>
              <UploadFile
                onChange={(file) =>
                  setSelectedTempComponent((prev) => ({
                    ...prev,
                    data: { ...prev?.data, file: file },
                  }))
                }
                file={selectedTempComponent?.data?.file}
              />
            </>
          ) : null}
          {SPECIAL_TYPE.includes(option?.custom) ? null : (
            <>
              <p className="text-sm text-gray-400">{text}</p>
              <Flex className="row flex-wrap gap-2">
                {components?.map((item) => (
                  <div
                    key={item.component_id}
                    className={clsx(
                      "w-[24rem] bg-white p-6 rounded-xl flex flex-row items-center justify-center border-2 cursor-pointer hover:border-blue-400",
                      {
                        "border-blue-400":
                          item.component_id ===
                          selectedTempComponent?.data.component_id,
                      }
                    )}
                    onClick={() =>
                      setSelectedTempComponent((prev) => ({
                        ...prev,
                        type: "visualization",
                        data: item,
                      }))
                    }
                  >
                    <Image
                      src={item.empty_data_img_url}
                      alt={item.name}
                      width="auto"
                    />
                  </div>
                ))}
              </Flex>
            </>
          )}
        </>
      )}
    </div>
  );
};
