"use client";

import { useState } from "react";
import { DISASTERS_REPORT_SELECT } from "../constants";

import {
  CloseButton,
  Flex,
  FloatingIndicator,
  Modal,
  Tabs,
} from "@mantine/core";

import classes from "./tab.module.css";

export const CreateReportModal = ({ opened, onClose }) => {
  const [rootRef, setRootRef] = useState(null);
  const [value, setValue] = useState("all");
  const [controlsRefs, setControlsRefs] = useState({});
  const setControlRef = (val) => (node) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

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
        className="mt-6"
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
              styles={{ tabLabel: { display: "flex", alignItems: 'center', gap: '1rem' } }}
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

        <div className="w-full">test</div>
      </Tabs>
    </Modal>
  );
};
