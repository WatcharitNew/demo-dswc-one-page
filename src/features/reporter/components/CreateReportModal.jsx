"use client";

import { useState, useEffect } from "react";
import { clsx } from "clsx";
import { DISASTERS_REPORT_SELECT, SAMPLE_REPORT } from "../constants";

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

export const CreateReportModal = ({ opened, onClose }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [rootRef, setRootRef] = useState(null);
  const [value, setValue] = useState("all");
  const [controlsRefs, setControlsRefs] = useState({});
  const setControlRef = (val) => (node) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  useEffect(() => {
    if (!opened) {
      setSelectedImage("")
      setValue("all")
    }
  }, [opened])

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 1,
      }}
      radius="md"
      styles={{
        content: {
          maxWidth: "64rem"
        },
        body: {
          padding: "2rem",
        },
      }}
      size="70%"
      centered
    >
      <Flex className="items-center justify-between">
        <p className="text-2xl font-medium">รูปแบบรายงานสาธารณะภัย</p>
        <CloseButton onClick={onClose} />
      </Flex>

      <Tabs
        variant="none"
        orientation="vertical"
        className="mt-6 max-h-[22rem]"
        value={value}
        onChange={setValue}
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
              <disaster.icon />
              {disaster.text}
            </Tabs.Tab>
          ))}

          <FloatingIndicator
            target={value ? controlsRefs[value] : null}
            parent={rootRef}
            className={classes.indicator}
          />
        </Tabs.List>

        <SimpleGrid
          className="w-full px-4 pt-1 overflow-y-auto"
          cols={3}
          spacing="xl"
        >
          {SAMPLE_REPORT.map((image, idx) => {
            const isSelected = selectedImage === image;

            return (
              <div
                key={idx}
                className={clsx("h-60 cursor-pointer", {
                  "outline outline-offset-2 outline-2 outline-blue-400":
                    isSelected,
                })}
                onClick={() => setSelectedImage(image)}
              >
                <Image alt="report-image" className="h-full" src={image} />
              </div>
            );
          })}
        </SimpleGrid>
      </Tabs>

      <Button
        className="block h-11 mt-8 ml-auto"
        disabled={!selectedImage}
        variant="primary"
      >
        ดำเนินการต่อ
      </Button>
    </Modal>
  );
};
