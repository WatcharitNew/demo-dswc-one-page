"use client";

import { useMemo } from "react";
import clsx from "clsx";
import { DISASTER_COMPONENTS } from "@/constants";
import colors from "@/styles/colors";

export const DisasterComponentOptions = ({
  disasterType = "flood",
  option,
  onClickOption,
}) => {
  const componentLists = useMemo(
    () => DISASTER_COMPONENTS[disasterType] || [],
    [disasterType]
  );

  return (
    <div className="w-full col">
      {componentLists.map((component) => {
        const isSelected = component.value === option?.value;
        return (
          <div
            key={component.name}
            onClick={() => onClickOption(component)}
            className={clsx(
              "w-full h-11 row gap-2 bg-white items-center pl-5 cursor-pointer border-l-4 border-white hover:!bg-gray-100",
              {
                "!bg-gray-100 !border-blue-400 text-blue-400": isSelected,
                "text-gray-500 ": !isSelected,
              }
            )}
          >
            {component.icon({
              color: isSelected ? colors.blue[400] : colors.gray[500],
            })}
            <p>{component.name}</p>
          </div>
        );
      })}
    </div>
  );
};
