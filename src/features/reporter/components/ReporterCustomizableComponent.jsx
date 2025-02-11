"use client";

import clsx from "clsx";
import { TEMPLATE_HEIGHT, TEMPLATE_WIDTH } from "@/constants";
import { Button, Image } from "@mantine/core";
import { PencilIcon } from "@/icons";

export const ReporterCustomizableComponent = ({ box, onClick, imgUrl }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "absolute flex items-center justify-center hover:outline hover:outline-blue-500 cursor-pointer hover:bg-white",
        imgUrl ? "box-parent-edit" : "box-parent-add"
      )}
      style={{
        height: `calc(${box.bottom - box.top}*${TEMPLATE_HEIGHT}px)`,
        width: `calc(${box.right - box.left}*${TEMPLATE_WIDTH}px)`,
        top: `calc(${box.top}*${TEMPLATE_HEIGHT}px)`,
        left: `calc(${box.left}*${TEMPLATE_WIDTH}px)`,
      }}
    >
      {imgUrl && (
        <Image className="w-full h-full" src={imgUrl} fit="contain" />
      )}
      <Button className="box-button-add button-in-layout" variant="outline">
        + เพิ่ม
      </Button>
      <Button
        className="box-button-edit button-in-layout top-1 right-1"
        leftSection={<PencilIcon size={14} color="#1473e6" />}
        variant="outline"
      >
        แก้ไข
      </Button>
    </div>
  );
};
