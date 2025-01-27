"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Modal, Button, Flex, Divider } from "@mantine/core";
import colors from "@/styles/colors";
import { CREAT_REPORT_OPTIONS } from "@/constants";

export const TemplateModal = ({ opened, close }) => {
  const [selectedType, setSelectedType] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!opened) {
      setSelectedType(undefined);
    }
  }, [opened]);

  return (
    <Modal.Root opened={opened} onClose={close} size="lg" centered>
      <Modal.Overlay />
      <Modal.Content>
        <div className="m-[20px]">
          <Modal.Title className="font-medium text-[#707070]">
            สร้างรูปแบบรายงานใหม่
          </Modal.Title>
          <Divider my="sm" color="black" />
        </div>
        <Flex className="col mt-12 mb-10">
          <h3 className="text-center font-medium text-2xl">
            เลือกรูปแบบรายงาน
          </h3>
          <Flex className="row items-center my-8 gap-8 justify-center">
            {CREAT_REPORT_OPTIONS.map((item) => {
              const isActive = selectedType === item.value;
              return (
                <Flex
                  key={item.value}
                  className={clsx(
                    "col w-60 h-60 items-center justify-center gap-4 text-center rounded-lg border-[6px] transition duration-150 ease-in-out",
                    {
                      "border-blue-400 text-blue-400": isActive,
                      "border-none text-gray-400": !isActive,
                      "cursor-pointer": !item.disable,
                    }
                  )}
                  onClick={() => !item.disable && setSelectedType(item.value)}
                >
                  <item.icon
                    fill={
                      selectedType === item.value
                        ? colors.blue[400]
                        : colors.gray[400]
                    }
                  />
                  {item.label}
                </Flex>
              );
            })}
          </Flex>
          <Flex className="gap-5 justify-center">
            <Button variant="outline" className="w-32" onClick={() => close()}>
              ปิด
            </Button>
            <Button
              variant="primary"
              className="w-32"
              disabled={!selectedType}
              onClick={() => router.push("/create-layout/outline")}
            >
              เลือก
            </Button>
          </Flex>
        </Flex>
      </Modal.Content>
    </Modal.Root>
  );
};
