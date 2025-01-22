"use client";
import { Modal, Button, Flex, Divider } from "@mantine/core";
import { useState } from "react";
import colors from "@/style/colors";
import clsx from "clsx";
import { CREAT_REPORT_OPTIONS } from "@/constants";

export const TemplateModal = ({ opened, close }) => {
  const [selectedType, setSelectedType] = useState();

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
        <Flex className="col mt-[50px] mb-[40px]">
          <h3 className="text-center font-medium text-2xl">
            เลือกรูปแบบรายงาน
          </h3>
          <Flex className="row items-center my-[30px] gap-[30px] justify-center">
            {CREAT_REPORT_OPTIONS.map((item) => {
              const isActive = selectedType === item.value;
              return (
                <Flex
                  key={item.value}
                  className={clsx(
                    "col w-[200px] h-[200px] items-center justify-center gap-4 text-center rounded-lg border-[6px] transition duration-150 ease-in-out",
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

          <Flex className="gap-[20px] justify-center">
            <Button
              variant="outline"
              className="w-[128px]"
              onClick={() => close()}
            >
              ปิด
            </Button>
            <Button
              variant="primary"
              className="w-[128px]"
              disabled={!selectedType}
            >
              เลือก
            </Button>
          </Flex>
        </Flex>
      </Modal.Content>
    </Modal.Root>
  );
};
