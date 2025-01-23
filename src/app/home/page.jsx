"use client";
import { Button, Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DisasterFilter, TemplateModal } from "@/components";
import { DISASTERS } from "@/constants";
import { AddIcon, SearchIcon } from "@/icons";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="px-24">
      <DisasterFilter disasters={DISASTERS} />
      <div className="row justify-between my-6">
        <Input
          leftSection={<SearchIcon size={16} />}
          placeholder="ค้นหาด้วย ชื่อ Template"
          className="w-[435px]"
          size="md"
        />
        <Button
          className="w-40 h-11"
          variant="primary"
          leftSection={<AddIcon />}
          onClick={open}
        >
          สร้างใหม่
        </Button>
      </div>
      <TemplateModal opened={opened} close={close} />
    </div>
  );
}
