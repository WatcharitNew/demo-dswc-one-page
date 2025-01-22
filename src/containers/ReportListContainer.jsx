"use client";

import { Input } from "@mantine/core";
import { Search } from "@/icons";

export const ReportListContainer = () => {
  return (
    <div className="flex flex-col mt-6 gap-6">
      <div className="flex flex-row items-center justify-between">
        <Input
          leftSection={<Search />}
          placeholder="ค้นหาด้วย ชื่อ Template"
          miw={435}
          styles={{
            section: { paddingInlineStart: "1rem" },
            input: { paddingInlineStart: "2.8rem" },
          }}
        />
      </div>
    </div>
  );
};
