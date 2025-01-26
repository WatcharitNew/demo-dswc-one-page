"use client"

import { useState } from "react";
import { TemplateSaveModal } from "@/components";
import { DisasterFilter } from "@/components/DisasterFilter";
import { TemplateSaveCompleteModal } from "@/components/TemplateSaveComepleteModal";
import { DISASTERS } from "@/constants";

export default function Home() {
  const [templateName, setTemplateName] = useState("");
  const [isOpenSaveModal, setIsOpenSaveModal] = useState(true);
  const [isOpenSaveCompleteModal, setIsOpenSaveCompleteModal] = useState(false);

  return (
    <>
      <DisasterFilter disasters={DISASTERS} />
      <TemplateSaveModal
        isRequestApproval
        isOpen={isOpenSaveModal}
        setTemplateName={setTemplateName}
        setIsOpenSaveModal={setIsOpenSaveModal}
        setIsOpenSaveCompleteModal={setIsOpenSaveCompleteModal}
      />
      <TemplateSaveCompleteModal
        templateName={templateName}
        isRequestApproval
        isOpen={isOpenSaveCompleteModal}
        onClose={() => setIsOpenSaveCompleteModal(false)}
      />
    </>
  );

}
