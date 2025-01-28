"use client";

import { useEffect, useRef, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button } from "@mantine/core";

import {
  DisasterComponentList,
  DisasterComponentOptions,
  DisasterTypeBoxList,
} from ".";
import { DISASTERS_WITH_OTHER } from "@/constants";
import { Modal } from "@/components";

export const TemplateComponentModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [disasterIdx, setDisasterIdx] = useState(0);
  const [option, setOption] = useState();
  const sliderRef = useRef(null);
  const disasterRefs = useRef([]);

  const handleNext = () => {
    const nextIdx = disasterIdx + 1;
    const formatIdx =
      nextIdx >= DISASTERS_WITH_OTHER.length
        ? DISASTERS_WITH_OTHER.length - 1
        : nextIdx;
    setDisasterIdx(formatIdx);
    sliderRef.current?.scrollTo({
      top: 0,
      left: disasterRefs[formatIdx]?.offsetLeft - 60,
      behavior: "smooth",
    });
  };

  const handleBack = () => {
    const backIdx = disasterIdx - 1;
    const formatIdx = backIdx <= 0 ? 0 : backIdx;
    setDisasterIdx(formatIdx);
    sliderRef.current?.scrollTo({
      top: 0,
      left: disasterRefs[formatIdx]?.offsetLeft - 60,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    disasterRefs.current = disasterRefs.current.slice(
      0,
      DISASTERS_WITH_OTHER.length
    );
  }, []);

  return (
    <>
      <Modal
        opened={opened}
        close={close}
        title="ส่วนประกอบข้อมูล"
        proceedText="ดำเนินการต่อ"
      >
        <div className="w-full min-w-[78.3125rem] h-[70vh] flex flex-row gap-6">
          <div className="flex flex-col max-w-[24.625rem]">
            <div className="flex flex-col gap-1">
              <p>ประเภทภัย</p>
              <DisasterTypeBoxList
                disaster={DISASTERS_WITH_OTHER[disasterIdx].value}
                sliderRef={sliderRef}
                disasterRefs={disasterRefs}
                onClickDisaster={setDisasterIdx}
                onClickNext={handleNext}
                onClickBack={handleBack}
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-medium text-black">รูปแบบส่วนประกอบข้อมูล</p>
                <p className="text-sm text-gray-300">
                  เลือกส่วนประกอบข้อมูล ที่ต้องการ
                </p>
              </div>

              <hr className="text-gray-300" />

              <DisasterComponentOptions
                disasterType={DISASTERS_WITH_OTHER[disasterIdx].value}
                option={option}
                onClickOption={setOption}
              />
            </div>
          </div>

          <DisasterComponentList text={option} />
        </div>
      </Modal>

      <Button variant="default" onClick={open}>
        Component Modal
      </Button>
    </>
  );
};
