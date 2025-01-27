"use client";

import { DISASTERS_WITH_OTHER } from "@/constants";
import { DisasterTypeBox } from ".";
import { Back2Icon, Next2Icon } from "@/icons";

export const DisasterTypeBoxList = ({
  disaster,
  sliderRef,
  disasterRefs,
  onClickDisaster,
  onClickNext,
  onClickBack,
}) => {
  return (
    <div className="flex flex-row gap-2">
      <div onClick={() => onClickBack()} className="my-auto cursor-pointer">
        <Back2Icon />
      </div>

      <div ref={sliderRef} className="flex flex-row gap-2 overflow-x-auto">
        {DISASTERS_WITH_OTHER.map(({ filterText, value }, idx) => (
          <DisasterTypeBox
            key={value}
            text={filterText}
            value={value}
            idx={idx}
            ref={(el) => (disasterRefs[idx] = el)}
            isSelected={disaster === value}
            onSelect={onClickDisaster}
          />
        ))}
      </div>

      <div onClick={() => onClickNext()} className="my-auto cursor-pointer">
        <Next2Icon />
      </div>
    </div>
  );
};
