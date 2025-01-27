import CreateLayoutContextProvider from "@/contexts/CreateLayoutContext";
import CreateLayout from "@/features/createLayout/layout";

const Layout = ({ children }) => {
  return (
    <CreateLayoutContextProvider>
      <CreateLayout>{children}</CreateLayout>
    </CreateLayoutContextProvider>
  );
};

export default Layout;
