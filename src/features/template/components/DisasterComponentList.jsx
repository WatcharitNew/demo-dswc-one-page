"use client";

import { MOCK_COMPONENTS } from "@/constants";
import { Image } from "@mantine/core";

export const DisasterComponentList = ({ text }) => {
  return (
    <div className="w-full bg-gray-100 flex flex-col gap-2 p-6">
      {text && (
        <>
          <p className="text-sm text-gray-400">{text}</p>
          <div className="grid grid-cols-2 gap-2">
            {MOCK_COMPONENTS.map((component) => (
              <div
                key={component}
                className="w-[24rem] bg-white p-6 rounded-xl flex flex-row items-center justify-center"
              >
                <Image
                  src={component}
                  alt={component}
                  className="h-[17.25rem] object-contain"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
