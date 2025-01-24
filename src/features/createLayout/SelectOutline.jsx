"use client";
import { Flex, Image } from "@mantine/core";
import { BackIcon, NextIcon } from "@/icons";
import Menu from "./components/Menu";
import { useContext } from "react";
import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";
import clsx from "clsx";

const SelectOutline = () => {
  const { selectedTemplate, setSelectedTemplate } =
    useContext(CreateLayoutContext);

  return (
    <Flex className="w-full">
      <Menu />
      <div className="m-auto">
        <Flex className="justify-end gap-2 mb-2">
          <BackIcon />
          <NextIcon />
        </Flex>
        <Flex
          className={clsx(
            "md:w-[25rem] 2xl:w-[32rem] 2xl:h-[46rem] md:h-[36.5rem] shadow-sm",
            {
              "bg-white": selectedTemplate === undefined,
            }
          )}
        >
          {selectedTemplate ? (
            <Image src={`/template_0${selectedTemplate}.svg`} fit="contain" />
          ) : (
            <p className="text-gray-400 m-auto">กรุณาเลือกรูปแบบ</p>
          )}
        </Flex>
      </div>
    </Flex>
  );
};

export default SelectOutline;
