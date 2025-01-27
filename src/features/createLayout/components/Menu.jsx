"use client";
import { useContext } from "react";
import clsx from "clsx";
import { Flex, Image } from "@mantine/core";
import { HorizontalIcon, VerticalIcon } from "@/icons";
import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";

const Menu = () => {
  const { selectedTemplate, setSelectedTemplate } =
    useContext(CreateLayoutContext);

  return (
    <div className="col relative flex h-[calc(100vh-8rem)] overflow-y-auto w-[20rem] bg-white bg-clip-border py-6 p-8">
      <Flex className="row justify-between mb-2">
        <p className="font-medium">เลือกรูปแบบ</p>
        <p className="font-medium text-gray-400">0/25</p>
      </Flex>
      <Flex className="row gap-4">
        <Flex className="col justify-between items-center gap-2">
          <VerticalIcon className="cursor-pointer" size={28} />
          <p className="text-xs text-gray-500">แนวตั้ง (20)</p>
        </Flex>
        <Flex className="col justify-between items-center gap-2">
          <HorizontalIcon className="cursor-pointer" size={24} />
          <p className="text-xs text-gray-400">แนวนอน (5)</p>
        </Flex>
      </Flex>
      <div className="grid grid-cols-2 gap-4 mt-7">
        {new Array(8).fill("").map((_item, index) => {
          return (
            <div
              role="button"
              key={index}
              className={clsx("", {
                "cursor-pointer": index <= 2,
              })}
              onClick={() => index <= 2 && setSelectedTemplate(index + 1)}
            >
              <div
                className={clsx("box", {
                  "border-4 border-blue-400": selectedTemplate === index + 1,
                })}
              >
                <Image src={`/template_0${index + 1}.svg`} width={107} />
              </div>

              <p className="text-gray-400 text-[0.875rem] mt-1">{`V0${
                index + 1
              }`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;