"use client";

import { useCallback, useContext } from "react";

import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";

const LayoutComponent = ({ idx, style }) => {
  const { openTemplateComponentModal, setCurrentBoxId } =
    useContext(CreateLayoutContext);

  const onLayoutClick = useCallback(() => {
    openTemplateComponentModal();
    setCurrentBoxId(idx);
  }, [idx]);

  const darkGrayIndex = 1;

  return (
    <div
      onClick={onLayoutClick}
      style={style}
      className={`absolute flex items-center justify-center hover:outline hover:outline-blue-500 cursor-pointer
        ${darkGrayIndex == idx ? "bg-gray2-400" : "bg-gray-200"}
      `}
    >
      +
    </div>
  );
};

export default LayoutComponent;
