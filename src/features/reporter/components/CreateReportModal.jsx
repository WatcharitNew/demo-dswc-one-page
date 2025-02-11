"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import { IconZoom } from "@tabler/icons-react";

import { DISASTERS_REPORT_SELECT } from "../constants";

import {
  Button,
  CloseButton,
  Flex,
  FloatingIndicator,
  Modal,
  Tabs,
  SimpleGrid,
  Image,
} from "@mantine/core";

import classes from "./tab.module.css";

const transformValue = (value) => {
  switch (value) {
    case "flood":
      return "อุทกภัย";
    case "drought":
      return "ภัยแล้ง";
    case "storm":
      return "วาตภัย";
    case "mudslide":
      return "ดินโคลนถล่ม";
    case "earthquake-tsunami":
      return "แผ่นดินไหว";
    case "pm25":
      return "pm2.5";
    case "forest-fire":
      return "ไฟป่า";
  }
};

export const CreateReportModal = ({ templates = [], stack }) => {
  const router = useRouter();
  const reportSelectStack = stack.register("report_select");
  const [selectedImage, setSelectedImage] = useState(null);
  const [rootRef, setRootRef] = useState(null);
  const [value, setValue] = useState(["all"]);
  const [previewImg, setPreviewImg] = useState("");
  const [controlsRefs, setControlsRefs] = useState({});
  const setControlRef = (val) => (node) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  useEffect(() => {
    if (!reportSelectStack.opened) {
      setSelectedImage(null);
      setPreviewImg("");
      setValue(["all"]);
    }
  }, [reportSelectStack.opened]);

  const filteredTemplate = useMemo(() => {
    return templates.filter(
      (template) =>
        value[0] === "all" ||
        template?.tags?.sort()?.toString() ===
          value
            .map((val) => transformValue(val))
            .sort()
            .toString()
    );
  }, [templates, value]);

  const handleFilterValue = (val) => {
    if (val === "all") {
      setValue(["all"]);
    } else {
      const idxAll = value.indexOf("all");
      let newValue =
        idxAll > -1
          ? [...value.slice(0, idxAll), ...value.slice(idxAll + 1)]
          : value;

      const idxValue = newValue.indexOf(val);
      if (idxValue > -1) {
        newValue = [
          ...newValue.slice(0, idxValue),
          ...newValue.slice(idxValue + 1),
        ];
      } else {
        newValue = [...newValue, val];
      }

      setValue(newValue.length === 0 ? ["all"] : newValue);
    }
  };

  return (
    <Modal.Stack>
      <Modal
        {...reportSelectStack}
        withCloseButton={false}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 1,
        }}
        radius="md"
        styles={{
          content: {
            maxWidth: "64rem",
          },
          body: {
            padding: "2rem",
          },
        }}
        size="70%"
        centered
      >
        <Flex className="items-center justify-between">
          <p className="text-2xl font-medium">รูปแบบรายงานสาธารณภัย</p>
          <CloseButton onClick={() => stack.close("report_select")} />
        </Flex>

        <Tabs
          variant="none"
          orientation="vertical"
          className="mt-6 max-h-[22rem]"
          value={value}
          onChange={handleFilterValue}
        >
          <Tabs.List ref={setRootRef} className={classes.list}>
            {DISASTERS_REPORT_SELECT.map((disaster) => (
              <Tabs.Tab
                key={disaster.value}
                value={disaster.value}
                ref={setControlRef(disaster.value)}
                className={classes.tab}
                styles={{
                  tabLabel: {
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  },
                }}
              >
                {disaster.icon}
                {disaster.text}
              </Tabs.Tab>
            ))}

            {value.map((val) => (
              <FloatingIndicator
                key={val}
                target={val ? controlsRefs[val] : null}
                parent={rootRef}
                className={classes.indicator}
              />
            ))}
          </Tabs.List>

          <SimpleGrid
            className="w-full px-4 py-2 overflow-y-auto"
            cols={3}
            spacing="xl"
          >
            {filteredTemplate.map((template, idx) => {
              const isSelected =
                selectedImage?.template_id === template.template_id;

              return (
                <div
                  key={idx}
                  className={clsx(
                    "zoom-parent relative h-64 cursor-pointer hover:outline hover:outline-offset-2 hover:outline-4 hover:outline-blue-300",
                    {
                      "outline outline-offset-2 outline-4 outline-blue-400 hover:!outline-blue-400":
                        isSelected,
                    }
                  )}
                  onClick={() => setSelectedImage(template)}
                >
                  <Button
                    className="zoom-button absolute top-1 right-1 !size-10 !p-0 !border-blue-400 bg-white !text-blue-400 hover:!bg-blue-100"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPreviewImg(template?.img_url);
                      stack.open("preview_template");
                    }}
                  >
                    <IconZoom />
                  </Button>
                  <Image
                    alt="report-image"
                    className="h-full"
                    src={template.img_url}
                  />
                </div>
              );
            })}
          </SimpleGrid>
        </Tabs>

        <Button
          className="block h-11 mt-8 ml-auto"
          disabled={!selectedImage}
          variant="primary"
          onClick={() =>
            router.push(`/reporter/create/${selectedImage?.template_id}`)
          }
        >
          ดำเนินการต่อ
        </Button>
      </Modal>

      <Modal
        {...stack.register("preview_template")}
        withCloseButton={false}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 1,
        }}
        radius="md"
        styles={{
          body: {
            padding: "2rem",
          },
        }}
        size="lg"
        centered
      >
        <div className="col items-center justify-center w-full h-[70vh] bg-gray-100">
          <Image
            className="w-[24rem]"
            alt="report-preview-image"
            src={previewImg}
          />
        </div>
      </Modal>
    </Modal.Stack>
  );
};
