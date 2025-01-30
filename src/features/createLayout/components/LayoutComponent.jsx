"use client";

import { CreateLayoutContext } from "@/contexts/CreateLayoutContext";
import { useContext } from "react";

const LayoutComponent = ({ className }) => {
  const {
    openTemplateComponentModal
  } = useContext(CreateLayoutContext);

  return (
    <div
      onClick={openTemplateComponentModal}
      className={`bg-gray-200 flex items-center justify-center hover:outline hover:outline-blue-500 cursor-pointer ${className}`}
    >
      +
    </div>
  );
}

export default LayoutComponent;
