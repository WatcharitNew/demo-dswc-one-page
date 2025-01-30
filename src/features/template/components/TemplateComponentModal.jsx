"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, Flex, Loader } from "@mantine/core";
import { DISASTERS_WITH_OTHER } from "@/constants";
import { Modal } from "@/components";
import { useGetListComponents } from "@/services";
import {
  ComponentCustom,
  ComponentPreview,
  DisasterComponentList,
  DisasterComponentOptions,
  DisasterTypeBoxList,
} from ".";

export const TemplateComponentModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [step, setStep] = useState(1);
  const { data: componentList, isLoading } = useGetListComponents();
  const [selectedComponent, setSelectedComponent] = useState();
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

  const resetSelected = () => {
    setOption(undefined);
    setSelectedComponent(undefined);
  };

  const selectedDisaster = useMemo(() => {
    resetSelected();
    if (disasterIdx || disasterIdx === 0)
      return DISASTERS_WITH_OTHER[disasterIdx].value;
  }, [disasterIdx]);

  const components = useMemo(
    () => (option ? componentList?.[selectedDisaster]?.[option.value] : []),
    [option, componentList]
  );

  const onCancel = () => {
    if (step === 2) setStep(1);
  };

  const onProceed = () => {
    if (step === 2) {
      /// save selectedComponent to createLayoutContext
      close();
      return;
    }
    setStep((prev) => prev + 1);
  };

  const resetAll = () => {
    setStep(1);
    setDisasterIdx(0);
    setSelectedComponent(undefined);
    setOption(undefined);
  };

  useEffect(() => {
    if (!opened) {
      resetAll();
    }
  }, [opened]);

  return (
    <>
      <Modal
        opened={opened}
        close={close}
        title="ส่วนประกอบข้อมูล"
        proceedText={step === 1 ? "ดำเนินการต่อ" : "นำไปใช้"}
        cancelText={step === 2 ? "เลือกชุดข้อมูลใหม่" : undefined}
        cancelAction={onCancel}
        proceedAction={onProceed}
        isProceedDisabled={!selectedComponent}
      >
        <div className="w-full min-w-[78.3125rem] h-[70vh] row gap-6">
          {isLoading ? (
            <Flex className="justify-center items-center w-full">
              <Loader />
            </Flex>
          ) : (
            <>
              {step === 1 ? (
                <>
                  <div className="flex flex-col max-w-[20rem]">
                    <div className="flex flex-col gap-1">
                      <p>ประเภทภัย</p>
                      <DisasterTypeBoxList
                        disaster={selectedDisaster}
                        sliderRef={sliderRef}
                        disasterRefs={disasterRefs}
                        onClickDisaster={setDisasterIdx}
                        onClickNext={handleNext}
                        onClickBack={handleBack}
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="font-medium text-black">
                          รูปแบบส่วนประกอบข้อมูล
                        </p>
                        <p className="text-sm text-gray-300">
                          เลือกส่วนประกอบข้อมูล ที่ต้องการ
                        </p>
                      </div>
                      <hr className="text-gray-300" />
                      <DisasterComponentOptions
                        disasterType={selectedDisaster}
                        option={option}
                        onClickOption={setOption}
                      />
                    </div>
                  </div>
                  <DisasterComponentList
                    text={option?.name}
                    components={components}
                    selectedComponent={selectedComponent}
                    setSelectedComponent={setSelectedComponent}
                  />
                </>
              ) : null}
              {step === 2 && option && selectedComponent ? (
                <div className="w-full min-w-[78.3125rem] h-[70vh] flex flex-row gap-20">
                  <div className="w-[54rem]">
                    <ComponentPreview
                      text={`ตัวอย่างข้อมูล${option?.name}`}
                      image={selectedComponent?.data?.mock_img_url}
                    />
                  </div>
                  <ComponentCustom />
                </div>
              ) : null}
            </>
          )}
        </div>
      </Modal>
      <Button variant="default" onClick={open}>
        Component Modal
      </Button>
    </>
  );
};
