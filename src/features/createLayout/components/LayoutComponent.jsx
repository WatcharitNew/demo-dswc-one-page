"use client";

import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";
import { useContext } from "react";

const LayoutComponent = ({ idx, style }) => {
  const {
    openTemplateComponentModal
  } = useContext(CreateLayoutContext);

  const darkGrayIndex = 1

  return (
    <div
      onClick={openTemplateComponentModal}
      style={style}
      className={`absolute flex items-center justify-center hover:outline hover:outline-blue-500 cursor-pointer
        ${darkGrayIndex == idx ? "bg-gray2-400" : "bg-gray-200"}
      `}
    >
      +
    </div>
  );
}

export default LayoutComponent;
