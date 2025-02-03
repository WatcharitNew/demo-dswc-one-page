"use client";
import { getUserData } from "@/lib/helpers/cookie";
import { useDisclosure } from "@mantine/hooks";
import { createContext, useEffect, useState } from "react";

export const CreateLayoutContext = createContext(null);

const CreateLayoutContextProvider = ({ children }) => {
  const [selectedLayout, setSelectedLayout] = useState();
  const [templateName, setTemplateName] = useState("");
  const [
    openedTemplateComponentModal,
    { open: openTemplateComponentModal, close: closeTemplateComponentModal }
  ] = useDisclosure(false);
  const [createLayoutData, setCreateLayoutData] = useState(); // รวม data ที่จะส่งไปสำหรับ create layout
  const [selectedTempComponent, setSelectedTempComponent] = useState(); // selecte data in templated component before save in createLayoutData
  const [openedSaveModal, { open: openSaveModal, close: closeSaveModal }] =
    useDisclosure(false);
  const [
    openedSaveCompleteModal,
    { open: openSaveCompleteModal, close: closeSaveCompleteModal },
  ] = useDisclosure(false);

  useEffect(() => {
    const userData = JSON.parse(getUserData());
    if (userData) {
      setCreateLayoutData((prev) => ({
        ...prev,
        province_id: userData?.province.id,
      }));
    }
  }, []);

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
    closeSaveCompleteModal,
    createLayoutData,
    setCreateLayoutData,
    selectedTempComponent,
    setSelectedTempComponent,
  };
  return (
    <CreateLayoutContext.Provider value={contextValue}>
      {children}
    </CreateLayoutContext.Provider>
  );
};

export default CreateLayoutContextProvider;
