"use client";

import { useAuthContext } from "@/lib/providers/auth";

import { Image, Menu } from "@mantine/core";
import { IconChevronDown, IconSettings, IconLogout } from "@tabler/icons-react";

export function AppLayout({ children }) {
  const { signOut } = useAuthContext()

  return (
    <div>
      <div className="w-full h-20 bg-white  flex items-center px-4 pr-8 z-50 sticky top-0 border-b border-gray-200">
        <div className="flex-grow">
          <div className="flex flex-row items-center gap-2">
            <Image
              alt="termtem logo"
              className="size-14"
              src="/termtem-logo.svg"
            />
            <div className="flex flex-col">
              <p className="font-medium text-gray-600 text-2xl tracking-[0.01rem]">
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
            <Image alt="bell" className="size-7" src="/bell.svg" />
            <Menu shadow="md" trigger="click-hover" width={200}>
              <Menu.Target>
                <div className="row items-center gap-4 hover:cursor-pointer">
                  <Image alt="profile" className="size-10" src="/profile.svg" />
                  <div className="flex flex-col text-black">
                    <p className="text-sm">เจ้าหน้าที่ส่วนกลาง</p>
                    <p className="text-xs font-light">เจ้าหน้าที่ส่วนกลาง</p>
                  </div>
                  <IconChevronDown size={16} />
                </div>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item leftSection={<IconSettings size={14} />}>
                  ตั้งค่า
                </Menu.Item>
                <Menu.Item color="red" leftSection={<IconLogout size={14}/>} onClick={signOut}>
                  ออกจากระบบ
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
