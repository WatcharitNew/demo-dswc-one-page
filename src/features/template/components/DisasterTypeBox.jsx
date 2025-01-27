"use client";

import clsx from "clsx";

import {
  DisasterDefaultIcon,
  EarthquakeTsunamiIcon,
  FloodIcon,
  Pm25Icon,
  StormIcon,
} from "@/icons";

const DisasterIcon = ({ value, color }) => {
  switch (value) {
    case "flood":
      return <FloodIcon color={color} />;
    case "storm":
      return <StormIcon color={color} />;
    case "earthquake-tsunami":
      return <EarthquakeTsunamiIcon color={color} />;
    case "pm25":
      return <Pm25Icon color={color} />;
    default:
      return <DisasterDefaultIcon color={color} />;
  }
};

export const DisasterTypeBox = ({
  text,
  value,
  idx,
  isSelected = false,
  onSelect,
  ref,
}) => {
  return (
    <div
      ref={(el) => ref(el)}
      onClick={() => onSelect(idx)}
      className={clsx(
        "min-w-max h-11 bg-white rounded px-6 flex flex-row gap-2 border border-gray-200 items-center text-gray-900 cursor-pointer",
        {
          "!border-blue-800 !text-blue-800": isSelected,
        }
      )}
    >
      <DisasterIcon value={value} color={isSelected ? "#1473E6" : "#999DA6"} />
      <p className="text-[1rem]/[1rem]">{text}</p>
    </div>
  );
};
