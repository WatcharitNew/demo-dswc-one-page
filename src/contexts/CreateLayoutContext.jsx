"use client";
import { createContext, useState } from "react";

export const CreateLayoutContext = createContext(null);

const CreateLayoutContextProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState();

  const contextValue = {
    selectedTemplate,
    setSelectedTemplate,
  };
  return (
    <CreateLayoutContext.Provider value={contextValue}>
      {children}
    </CreateLayoutContext.Provider>
  );
};

export default CreateLayoutContextProvider;
