"use client";

import { TEMPLATE_HEIGHT, TEMPLATE_WIDTH } from "@/constants";
import { Image } from "@mantine/core";

export const ReporterCustomizableComponent = ({ box, onClick, imgUrl }) => {
  return imgUrl ? (
    <Image
      src={imgUrl}
      className="absolute"
      style={{
        height: `calc(${box.bottom - box.top}*${TEMPLATE_HEIGHT}px)`,
        width: `calc(${box.right - box.left}*${TEMPLATE_WIDTH}px)`,
        top: `calc(${box.top}*${TEMPLATE_HEIGHT}px)`,
        left: `calc(${box.left}*${TEMPLATE_WIDTH}px)`,
      }}
    />
  ) : (
    <div
      onClick={onClick}
      className="absolute flex items-center justify-center hover:outline hover:outline-blue-500 cursor-pointer bg-gray-200"
      style={{
        height: `calc(${box.bottom - box.top}*${TEMPLATE_HEIGHT}px)`,
        width: `calc(${box.right - box.left}*${TEMPLATE_WIDTH}px)`,
        top: `calc(${box.top}*${TEMPLATE_HEIGHT}px)`,
        left: `calc(${box.left}*${TEMPLATE_WIDTH}px)`,
      }}
    >
      +
    </div>
  );
};
