"use client";

import { useContext, useEffect, useMemo, useRef } from "react";
import { Flex, Loader } from "@mantine/core";
import { DISASTERS_WITH_OTHER, SPECIAL_TYPE } from "@/constants";
import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";
import { Modal } from "@/components";
import { useGetListComponents } from "@/services";
import { useSelectTemplateComponent } from "../hook/useSelectTemplateComponent";
import {
  ComponentCustom,
  ComponentPreview,
  DisasterComponentList,
  DisasterComponentOptions,
  DisasterTypeBoxList,
} from ".";

export const TemplateComponentModal = () => {
  const disasterRefs = useRef([]);
  const sliderRef = useRef(null);
  const { data: componentList, isLoading } = useGetListComponents();
  const {
    selectedTempComponent,
    setSelectedTempComponent,
    openedTemplateComponentModal: opened,
    closeTemplateComponentModal: close,
  } =
    useContext(CreateLayoutContext);

  const {
    disasterIdx,
    setDisasterIdx,
    resetSelected,
    onCancel,
    step,
    onProceed,
    resetAll,
    option,
    setOption,
  } = useSelectTemplateComponent();

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

  const selectedDisaster = useMemo(() => {
    if (opened) {
      if (disasterIdx || disasterIdx === 0)
        return DISASTERS_WITH_OTHER[disasterIdx].value;
    }
  }, [disasterIdx, opened]);

  const components = useMemo(() => {
    if (option) {
      if (selectedDisaster === "other") {
        return option
          ? componentList?.[selectedDisaster]?.[option.value]?.filter(
              (item) => item.type === option?.custom
            )
          : [];
      }
      return componentList?.[selectedDisaster]?.[option.value];
    }
  }, [option, componentList]);

  useEffect(() => {
    disasterRefs.current = disasterRefs.current.slice(
      0,
      DISASTERS_WITH_OTHER.length
    );
  }, []);

  // for text and image store data when select the text/image options to get the component_id when call getComponent
  useEffect(() => {
    if (
      selectedDisaster === "other" &&
      SPECIAL_TYPE.includes(components?.[0]?.type)
    ) {
      setSelectedTempComponent({
        type: components?.[0].type,
        data: {
          component_id: components?.[0].component_id,
        },
      });
    }
  }, [components, selectedDisaster]);

  useEffect(() => {
    if (opened) {
      resetSelected();
    } else {
      resetAll();
    }
  }, [opened, resetSelected, resetAll]);

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
        isProceedDisabled={!selectedTempComponent}
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
                        list={componentList?.[selectedDisaster]}
                        onClickOption={setOption}
                      />
                    </div>
                  </div>
                  <DisasterComponentList
                    option={option}
                    components={components}
                  />
                </>
              ) : null}

              {step === 2 && option && selectedTempComponent ? (
                <div className="w-full min-w-[78.3125rem] h-[70vh] flex flex-row gap-20">
                  <div className="w-[54rem]">
                    <ComponentPreview
                      text={`ตัวอย่างข้อมูล${option?.name}`}
                      image={
                        selectedTempComponent?.data?.mock_img_url ||
                        selectedTempComponent?.data?.empty_img_url
                      }
                    />
                  </div>
                  <ComponentCustom />
                </div>
              ) : null}
            </>
          )}
        </div>
      </Modal>
    </>
  );
};
