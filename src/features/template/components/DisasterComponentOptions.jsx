"use client";

import { useMemo, useState } from "react";

import { DISASTER_COMPONENTS } from "@/constants";
import clsx from "clsx";
import colors from "@/styles/colors";

export const DisasterComponentOptions = ({
  disasterType = "flood",
  option,
  onClickOption,
}) => {
  const componentLists = useMemo(() => {
    return DISASTER_COMPONENTS[disasterType] || [];
  }, [disasterType]);

  return (
    <div className="w-full flex flex-col">
      {componentLists.map((component) => (
        <div
          key={component.name}
          onClick={() => onClickOption(component.name)}
          className={clsx(
            "w-full h-11 flex flex-row gap-2 bg-white items-center pl-5 cursor-pointer border-l-4 border-white hover:!bg-gray-100",
            {
              "!bg-gray-100 text-blue-400 !border-blue-400":
                component.name === option,
            }
          )}
        >
          {component.icon({
            color:
              component.name === option ? colors.blue[400] : colors.gray[500],
          })}
          <p>{component.name}</p>
        </div>
      ))}
    </div>
  );
};
