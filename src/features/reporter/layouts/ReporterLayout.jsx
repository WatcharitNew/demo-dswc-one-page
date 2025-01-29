"use client";

import { clsx } from "clsx";

import { REPORTER_MENUS } from "../constants";

export const ReporterLayout = ({ children, step }) => {
  return (
    <div className="h-[calc(100dvh-5rem)] flex">
      <div className="w-20 px-2 py-8 border-r border-gray2-300 bg-white col gap-8">
        {REPORTER_MENUS.map((menu) => {
          const isActive = step === menu.value;

          return (
            <div
              key={menu.label}
              className={clsx("col gap-1 items-center text-center", {
                "text-gray-500": !isActive,
                "text-blue-400": isActive,
              })}
            >
              <div
                className={clsx("p-2 rounded-lg", {
                  "bg-blue-100 border-2 border-blue-200": isActive,
                })}
              >
                <menu.icon />
              </div>
              <p className="text-xs font-medium">{menu.label}</p>
            </div>
          );
        })}
      </div>
      <div className="grow">{children}</div>
    </div>
  );
};
