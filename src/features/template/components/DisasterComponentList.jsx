"use client";
import clsx from "clsx";
import { Flex, Image } from "@mantine/core";

export const DisasterComponentList = ({
  text,
  components,
  setSelectedComponent,
  selectedComponent,
}) => {
  return (
    <div className="w-full bg-gray-100 flex flex-col gap-2 p-6 overflow-auto">
      {text && (
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
                      selectedComponent?.data.component_id,
                  }
                )}
                onClick={() =>
                  setSelectedComponent((prev) => ({ ...prev, data: item }))
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
    </div>
  );
};
