"use client";

import { Image } from "@mantine/core";

import { DisasterLabel } from ".";
import { DISASTERS } from "@/constants";

export function DisasterFilter({ disaster, setDisaster }) {
  return (
    <div className="max-w-full relative">
      <Image
        src="/disaster-bg.svg"
        alt="disaster background"
        width={1262}
        height={276}
      />
      <div className="absolute top-8 left-56">
        <p className="text-white text-2xl font-medium">
          รูปแบบรายงานสาธารณภัยที่แนะนำ
        </p>
        <div className="flex flex-row flex-shrink mt-4 h-[10.489rem] items-center">
          {DISASTERS.map((dis) => (
            <DisasterLabel
              key={dis.srcName}
              {...dis}
              isSelected={disaster === dis.value}
              onClick={setDisaster}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
