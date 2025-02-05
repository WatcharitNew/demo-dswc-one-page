import { Button } from "@mantine/core";
import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconStrikethrough,
  IconSubscript,
  IconSuperscript,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
  IconAlignJustified,
  IconIndentIncrease,
  IconIndentDecrease,
  IconList,
  IconListNumbers,
} from "@tabler/icons-react";

export const TextEditorBar = ({ size = "md" }) => {
  const EditorIcons = {
    editor: [
      <IconBold />,
      <IconItalic />,
      <IconUnderline />,
      <IconStrikethrough />,
      <IconSubscript />,
      <IconSuperscript />,
    ],
    align: [
      <IconAlignLeft />,
      <IconAlignCenter />,
      <IconAlignRight />,
      <IconAlignJustified />,
    ],
    indent: [<IconIndentIncrease />, <IconIndentDecrease />],
    list: [<IconList />, <IconListNumbers />],
  };

  return (
    <div className="row justify-between mb-4">
      {Object.keys(EditorIcons).map((key) => (
        <Button.Group key={key}>
          {EditorIcons[key].map((icon, idx) => (
            <Button
              key={idx}
              className="!rounded-none px-3 w-14 h-10"
              variant="default"
            >
              {icon}
            </Button>
          ))}
        </Button.Group>
      ))}
    </div>
  );
};
