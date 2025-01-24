"use client";
import { useContext } from "react";
import clsx from "clsx";
import { Flex, Image, Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import { BackIcon, NextIcon } from "@/icons";
import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";
import Menu from "./components/Menu";

const SelectOutline = () => {
  const { selectedTemplate, setSelectedTemplate } =
    useContext(CreateLayoutContext);
  const router = useRouter();

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
        <Flex className="md:w-[25rem] 2xl:w-[32rem] row gap-2 top-2 m-auto absolute bottom-[10px] items-end z-10 justify-end">
          <Button
            variant="outline"
            className="w-[8.6rem]"
            onClick={() => router.push("/templater")}
          >
            ยกเลิก
          </Button>
          <Button
            disabled={!selectedTemplate}
            variant="primary"
            className="w-[8.6rem]"
          >
            ดำเนินการต่อ
          </Button>
        </Flex>
      </div>
    </Flex>
  );
};

export default SelectOutline;
