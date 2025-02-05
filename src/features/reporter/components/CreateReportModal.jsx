"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";

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
  switch(value) {
    case "flood": return "อุทกภัย"
    case "drought": return "ภัยแล้ง"
    case "storm": return "วาตภัย"
    case "mudslide": return "ดินโคลนถล่ม"
    case "earthquake-tsunami": return "แผ่นดินไหว"
    case "pm25": return "pm2.5"
    case "forest-fire": return "ไฟป่า"
  }
}

export const CreateReportModal = ({ templates = [], opened, onClose }) => {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(null);
  const [rootRef, setRootRef] = useState(null);
  const [value, setValue] = useState("all");
  const [controlsRefs, setControlsRefs] = useState({});
  const setControlRef = (val) => (node) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  useEffect(() => {
    if (!opened) {
      setSelectedImage(null)
      setValue("all")
    }
  }, [opened])

  const filteredTemplate = useMemo(() => {
    return templates.filter((template) => value === 'all' || template?.tags?.includes(transformValue(value)))
  }, [templates, value])

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
              {disaster.icon}
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
          className="w-full px-4 py-1 overflow-y-auto"
          cols={3}
          spacing="xl"
        >
          {filteredTemplate.map((template, idx) => {
            const isSelected = selectedImage?.template_id === template.template_id;

            return (
              <div
                key={idx}
                className={clsx("h-64 cursor-pointer", {
                  "outline outline-offset-2 outline-2 outline-blue-400":
                    isSelected,
                })}
                onClick={() => setSelectedImage(template)}
              >
                <Image alt="report-image" className="h-full" src={template.img_url} />
              </div>
            );
          })}
        </SimpleGrid>
      </Tabs>

      <Button
        className="block h-11 mt-8 ml-auto"
        disabled={!selectedImage}
        variant="primary"
        onClick={() => router.push(`/reporter/create/${selectedImage?.template_id}`)}
      >
        ดำเนินการต่อ
      </Button>
    </Modal>
  );
};
