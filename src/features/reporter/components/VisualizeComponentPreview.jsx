"use client";

import { Image } from "@mantine/core";

export const VisualizeComponentPreview = ({ text, image }) => {
  return (
    <div className="w-full bg-gray-100 flex flex-col gap-2 p-6 h-full max-w-[30rem]">
      <p className="text-sm text-gray-400">{text}</p>
      <div className="h-full bg-white p-6 rounded-xl flex flex-row items-center justify-center">
        <Image src={image} alt={image} className="h-full" fit="contain" />
      </div>
    </div>
  );
};
