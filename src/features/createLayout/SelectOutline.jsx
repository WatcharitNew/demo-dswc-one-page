"use client";
import { useContext } from "react";
import clsx from "clsx";
import { Flex, Button, Image } from "@mantine/core";
import { useRouter } from "next/navigation";

import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";
import Menu from "./components/Menu";
import { BackIcon, NextIcon } from "@/icons";

const SelectOutline = () => {
  const { selectedLayout, setSelectedLayout } = useContext(CreateLayoutContext);
  const router = useRouter();

  const handleBackButton = () => {
    if (selectedLayout) {
      setSelectedLayout(undefined);
    } else {
      router.push("/templater");
    }
  };

  return (
    <Flex className="w-full">
      <Menu />
      <div className="m-auto">
        <Flex className="justify-between gap-2 mb-2 items-center">
          <div>
            {selectedLayout ? (
              <p className="text-gray-400">{`V0${selectedLayout.layout_id}`}</p>
            ) : null}
          </div>
          <Flex className="justify-end gap-2 mb-2">
            <BackIcon />
            <NextIcon />
          </Flex>
        </Flex>
        <Flex
          className={clsx(
            "md:w-[25rem] 2xl:w-[32rem] 2xl:h-[46rem] md:h-[36.5rem] shadow-sm  relative",
            {
              "bg-white": selectedLayout === undefined,
            }
          )}
        >
          {selectedLayout ? (
            <Image src={selectedLayout.img} fit="contain" />
          ) : (
            <p className="text-gray-400 m-auto">กรุณาเลือกรูปแบบ</p>
          )}
        </Flex>
        <Flex className="md:w-[25rem] 2xl:w-[32rem] h-fit row gap-2 absolute bottom-3 items-end z-10 justify-end">
          <Button
            variant="outline"
            className="h-10 min-w-40"
            onClick={handleBackButton}
          >
            {selectedLayout ? "ย้อนกลับ" : "ยกเลิก"}
          </Button>
          <Button
            disabled={!selectedLayout}
            variant="primary"
            className="h-10 min-w-40"
            onClick={() =>
              router.push(`/create-layout/outline/${selectedLayout?.layout_id}`)
            }
          >
            ดำเนินการต่อ
          </Button>
        </Flex>
      </div>
    </Flex>
  );
};

export default SelectOutline;
