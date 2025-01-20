"use client";

import clsx from "clsx";
import { Image } from "@mantine/core";

export function DisasterLabel({
  srcName,
  text,
  subtext,
  value,
  isSelected = false,
  onClick,
}) {
  return (
    <div
      onClick={() => onClick(value)}
      className={clsx("relative cursor-pointer transition-margin-transform duration-300 ease-in-out",
        {
          "w-32 scale-1 border-2 border-white": isSelected,
          "hover:ml-[0.32rem] hover:mr-[0.32rem] hover:scale-[1.085] hover:border-2 hover:border-white": !isSelected
        }
      )}
      // style={{
      //   transition: "margin 0.3s ease-in-out, transform 0.3s ease-in-out",
      // }}
    >
      <Image src={`/${srcName}.svg`} alt={srcName} className="w-full h-full" />
      <div
        className="w-full h-full absolute top-0 left-0 bg-custom-gradient"
        // style={{
        //   top: 0,
        //   left: 0,
        //   background:
        //     "linear-gradient(180deg, rgba(0, 0, 0, 0) 33.23%, rgba(0, 0, 0, 0.72) 100%)",
        // }}
      ></div>
      <div
        className="absolute text-white font-medium text-lg bottom-1 left-2"
        // style={{ bottom: "0.25rem", left: "0.5rem" }}
      >
        <p>{text}</p>
        <p>{subtext}</p>
      </div>
    </div>
  );
}
