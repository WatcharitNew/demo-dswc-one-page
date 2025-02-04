"use client";

import { useMemo, useCallback, useContext } from "react";
import { clsx } from "clsx";
import { Button, Image } from "@mantine/core";

import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";

import { PencilIcon } from "@/icons";

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
      className={clsx(
        "absolute flex items-center justify-center hover:outline hover:outline-blue-500 cursor-pointer hover:bg-white",
        darkGrayIndex === idx ? "bg-gray2-400" : "bg-gray-200",
        imgSrc ? "box-parent-edit" : "box-parent-add"
      )}
    >
      {imgSrc ? (
        <Image className="w-full h-full" src={imgSrc} fit="contain" />
      ) : (
        "+"
      )}
      <Button
        className="box-button-add button-in-layout"
        variant="outline"
      >
        + เพิ่ม
      </Button>
      <Button
        className="box-button-edit button-in-layout top-1 right-1"
        leftSection={<PencilIcon size={14} color="#1473e6"/>}
        variant="outline"
      >
        แก้ไข
      </Button>
    </div>
  );
};

export default LayoutComponent;
