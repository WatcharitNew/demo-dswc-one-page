import {
  TextBoldIcon,
  TextItaticIcon,
  TextUnderlineIcon,
  TextStrikeIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextAlignCenterIcon,
  TextJustifyIcon,
  TextListIcon,
  TextListNumberIcon,
  TextRightIcon,
  TextLeftIcon,
} from "@/icons";
import { Flex } from "@mantine/core";
import { useMemo } from "react";

export const TextEditorBar = ({ size = "md" }) => {
  const Tool1 = [
    { icon: TextBoldIcon },
    { icon: TextItaticIcon },
    { icon: TextUnderlineIcon },
    { icon: TextStrikeIcon },
    { text: "x²" },
    { text: "x₂" },
  ];

  const Tool2 = [
    { icon: TextAlignLeftIcon },
    { icon: TextJustifyIcon },
    { icon: TextAlignRightIcon },
    { icon: TextAlignCenterIcon },
  ];

  const Tool3 = [{ icon: TextRightIcon }, { icon: TextLeftIcon }];

  const Tool4 = [{ icon: TextListIcon }, { icon: TextListNumberIcon }];

  const toolBarSize = useMemo(() => {
    switch (size) {
      case "xl":
        return "w-[4.5rem] h-14";
      default:
        return "w-14 h-12";
    }
  });
  const commonStyle = `${toolBarSize} border-2 border-gray-200 justify-center items-center bg-white hover:bg-gray-50 cursor-pointer border-r-0 last:border-r-2`;

  return (
    <Flex className="justify-between mb-2 border-collapse w-full">
      <Flex>
        {Tool1.map((item, index) => (
          <Flex className={commonStyle} key={`tool1_${index}`}>
            {item.icon ? (
              <item.icon size={20} />
            ) : (
              <p className="text-lg">{item.text}</p>
            )}
          </Flex>
        ))}
      </Flex>

      <Flex className="ml-2">
        {Tool2.map((Item, index) => (
          <Flex className={commonStyle} key={`tool2_${index}`}>
            <Item.icon size={24} />
          </Flex>
        ))}
      </Flex>

      <Flex className="ml-2">
        {Tool3.map((Item, index) => (
          <Flex className={commonStyle} key={`tool3_${index}`}>
            <Item.icon size={index === 0 ? 18 : 22} />
          </Flex>
        ))}
      </Flex>
      <Flex className="ml-2">
        {Tool4.map((Item, index) => (
          <Flex className={commonStyle} key={`tool4_${index}`}>
            <Item.icon size={24} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
