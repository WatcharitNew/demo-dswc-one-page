"use client";

import { DISASTERS } from "@/constants";

import { DisasterFilter } from "@/components/DisasterFilter";
import { ReportListContainer } from "@/features/templater/containers";
import { useState } from "react";

export default function TemplaterPage() {
  const [disaster, setDisaster] = useState("flood");

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="max-w-[78.875rem]">
        <DisasterFilter disaster={disaster} setDisaster={setDisaster} />

        <ReportListContainer disaster={disaster} />
      </div>
    </div>
  );
}
