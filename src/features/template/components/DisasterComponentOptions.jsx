"use client";

import { useMemo } from "react";
import clsx from "clsx";
import { DISASTER_COMPONENTS } from "@/constants";
import colors from "@/styles/colors";
import { Collapse } from "@mantine/core";

export const DisasterComponentOptions = ({
  disasterType = "flood",
  option,
  onClickOption,
  list,
}) => {
  const customOptions = useMemo(() => {
    if (disasterType === "other") {
      const result = new Set(list?.["อื่น ๆ"]?.map((item) => item.type));
      return Array.from(result);
    }
  }, [list, disasterType]);

  const componentLists = useMemo(
    () => DISASTER_COMPONENTS[disasterType] || [],
    [disasterType]
  );

  return (
    <div className="w-full col">
      {componentLists.map((component) => {
        const isSelected = component.value === option?.value;
        return (
          <div key={component.name}>
            <div
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
              <p
                className={clsx("", {
                  "text-blue-400": isSelected,
                  "text-gray-500 ": !isSelected,
                })}
              >
                {component.name}
              </p>
            </div>
            <Collapse in={customOptions?.length > 0 && isSelected}>
              <ul className="w-full ">
                {customOptions?.map((item) => {
                  const isCustomSelected = option?.custom === item;
                  return (
                    <li
                      key={item}
                      className={clsx(
                        "w-full h-11 flex pl-14 items-center cursor-pointer hover:!bg-gray-100",
                        {
                          "!border-blue-400 text-blue-400": isCustomSelected,
                          "text-gray-500 ": !isCustomSelected,
                        }
                      )}
                      onClick={
                        () => onClickOption({ ...component, custom: item }) //for text and image
                      }
                    >
                      {item?.replaceAll("_", " ")}
                    </li>
                  );
                })}
              </ul>
            </Collapse>
          </div>
        );
      })}
    </div>
  );
};
