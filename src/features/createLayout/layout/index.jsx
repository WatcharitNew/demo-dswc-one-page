"use client";
import { useMemo } from "react";
import clsx from "clsx";
import { Flex } from "@mantine/core";
import { usePathname } from "next/navigation";
import { CREATE_LAYOUT_MENU } from "@/constants";
import colors from "@/styles/colors";

const CreateLayout = ({ children }) => {
  const pathname = usePathname();

  const currentStep = useMemo(() => {
    if (pathname.includes("/outline")) {
      return 2;
    }
  }, [pathname]);
  return (
    <div className="row">
      <div className="col relative flex h-[calc(100vh-4.5rem)] w-[5rem] bg-white border-r border-gray-200">
        <nav className="col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          {CREATE_LAYOUT_MENU.map((item) => {
            const isActive = currentStep === item.value;
            return (
              <Flex
                key={item.value}
                className="col items-center text-center p-2"
              >
                <Flex
                  role="button"
                  className={clsx(
                    "w-[48px] h-[48px] rounded-lg items-center justify-center mb-1",
                    {
                      "bg-blue-100 border-2 border-blue-200": isActive,
                      "bg-transparent border-none": !isActive,
                    }
                  )}
                >
                  {item.value !== 3 ? (
                    <item.icon
                      stroke={isActive ? colors.blue[400] : colors.gray[500]}
                    />
                  ) : (
                    <item.icon
                      fill={isActive ? colors.blue[400] : colors.gray[500]}
                    />
                  )}
                </Flex>
                <p
                  className={clsx("text-xs font-medium", {
                    "text-gray-500": !isActive,
                    "text-blue-400": isActive,
                  })}
                >
                  {item.label}
                </p>
              </Flex>
            );
          })}
        </nav>
      </div>
      <div className="w-[calc(100%-80px)] max-h-[calc(100vh-4.5rem)] overflow-hidden re">
        <div className="h-[calc(100vh-8.5rem)] bg-gray-100 overflow-auto">
          {children}
        </div>
        <footer className="row bg-white h-[4rem] relative my-auto"></footer>
      </div>
    </div>
  );
};

export default CreateLayout;
