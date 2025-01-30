"use client";
import { useDisclosure } from "@mantine/hooks";
import { createContext, useState } from "react";

export const CreateLayoutContext = createContext(null);

const CreateLayoutContextProvider = ({ children }) => {
  const [selectedLayout, setSelectedLayout] = useState();
  const [templateName, setTemplateName] = useState("");
  const [
    openedTemplateComponentModal,
    { open: openTemplateComponentModal, close: closeTemplateComponentModal }
  ] = useDisclosure(false);
  const [
    openedSaveModal,
    { open: openSaveModal, close: closeSaveModal }
  ] = useDisclosure(false);
  const [
    openedSaveCompleteModal,
    { open: openSaveCompleteModal, close: closeSaveCompleteModal }
  ] = useDisclosure(false);

  const contextValue = {
    selectedLayout,
    setSelectedLayout,
    templateName,
    setTemplateName,
    openedTemplateComponentModal,
    openTemplateComponentModal,
    closeTemplateComponentModal,
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
