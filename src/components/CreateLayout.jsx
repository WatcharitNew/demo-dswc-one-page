import { CREATE_LAYOUT_MENU } from "@/constants";
import { HomeIcon, LayoutIcon, TemplateIcon } from "@/icons";
import colors from "@/style/colors";
import { Button, Flex } from "@mantine/core";
import clsx from "clsx";

const CreateLayout = ({ children }) => {
  const currentStep = 1;
  return (
    <div className="row">
      <div className="col relative flex h-[calc(100vh-80px)] w-[80px] bg-white bg-clip-border text-gray-700 shadow-xl shadow-blue-gray-900/5">
        <nav className="col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          {CREATE_LAYOUT_MENU.map((item) => {
            const isActive = currentStep === item.value;

            console.log("this", item.value, isActive && item.value === 3);
            return (
              <Flex
                role="button"
                key={item.value}
                className="col items-center text-center p-2 leading-tight transition-all rounded-lg outline-none  hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
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
                      fill="white"
                      stroke={isActive ? colors.blue[400] : colors.blue[400]}
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

      {<TemplateIcon fill={colors.gray[500]} />}
    </div>
  );
};

export default CreateLayout;
