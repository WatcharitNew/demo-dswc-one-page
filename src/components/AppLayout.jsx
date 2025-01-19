"use client";

import { Image } from "@mantine/core";

export function AppLayout() {
  return (
    <>
      <div className="w-full h-20 bg-white  flex items-center px-4 pr-8 relative z-50">
        <div className="flex-grow">
          <div className="flex flex-row items-center gap-2">
            <Image
              alt="termtem logo"
              className="size-14"
              src="/termtem-logo.svg"
            />
            <div className="flex flex-col">
              <p className="font-medium text-gray-600 text-lg">
                กรมป้องกันและบรรเทาสาธารณภัย กระทรวงมหาดไทย
              </p>
              <p className="text-gray-400 text-sm">
                Department of Disaster Prevention and Mitigation. Ministry of
                Interior. Thailand
              </p>
            </div>
          </div>
        </div>

        <div className="flex-none">
          <div className="flex flex-row gap-4 items-center">
            <Image alt="bell" className="size-8" src="/bell.svg" />
            <Image alt="profile" className="size-14" src="/profile.svg" />
            <div className="flex flex-col text-black">
              <p>Admin</p>
              <p>ผู้ว่าราชการจังหวัด</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
