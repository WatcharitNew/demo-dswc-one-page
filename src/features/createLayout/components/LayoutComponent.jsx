"use client";

import { useMemo, useCallback, useContext } from "react";
import { Image } from "@mantine/core";

import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";

const LayoutComponent = ({ idx, style }) => {
  const { openTemplateComponentModal, setCurrentBoxId, createLayoutData } =
    useContext(CreateLayoutContext);

  const imgSrc = useMemo(() => {
    return createLayoutData?.component?.find((item) => item.box_id === idx)
      ?.img_url;
  }, [JSON.stringify(createLayoutData), idx]);

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
      {imgSrc ? <Image className="w-full h-full" src={imgSrc} fit="contain"/> : "+"}
    </div>
  );
};

export default LayoutComponent;
