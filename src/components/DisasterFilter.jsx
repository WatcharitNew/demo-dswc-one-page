import { Image } from "@mantine/core";

import { DisasterLabel } from ".";

export function DisasterFilter({
  disasters = [],
  selectedDisaster,
  setSelectedDisaster,
}) {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="max-w-[78.875rem] relative mt-7">
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
            {disasters.map((disaster) => (
              <DisasterLabel
                key={disaster.srcName}
                {...disaster}
                isSelected={selectedDisaster === disaster.value}
                onClick={setSelectedDisaster}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
