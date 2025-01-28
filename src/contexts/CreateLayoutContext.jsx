"use client";
import { useDisclosure } from "@mantine/hooks";
import { createContext, useState } from "react";

export const CreateLayoutContext = createContext(null);

const CreateLayoutContextProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState();
  const [templateName, setTemplateName] = useState("");
  const [
    openedSaveModal,
    { open: openSaveModal, close: closeSaveModal }
  ] = useDisclosure(false);
  const [
    openedSaveCompleteModal,
    { open: openSaveCompleteModal, close: closeSaveCompleteModal }
  ] = useDisclosure(false);

  const contextValue = {
    selectedTemplate,
    setSelectedTemplate,
    templateName,
    setTemplateName,
    openedSaveModal,
    openSaveModal,
    closeSaveModal,
    openedSaveCompleteModal,
    openSaveCompleteModal,
    closeSaveCompleteModal
  };
  return (
    <CreateLayoutContext.Provider value={contextValue}>
      {children}
    </CreateLayoutContext.Provider>
  );
};

export default CreateLayoutContextProvider;
