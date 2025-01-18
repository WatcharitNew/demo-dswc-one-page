import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

import { QueryProvider } from "@/lib/providers";

import Image from "next/image";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Demo One Page",
  description: "Demo One Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${kanit.className} min-w-[90rem] font-normal text-base bg-gray-100`}
      >
        <div className="w-full h-20 bg-white  flex items-center px-4 pr-8 relative z-50">
          <div className="flex-grow">
            <div className="flex flex-row items-center gap-2">
              <Image
                src="/termtem-logo.svg"
                alt="termtem logo"
                width={56}
                height={56}
                priority
              />
              <div className="flex flex-col">
                <p className="font-medium text-gray-600 text-lg">
                  ระบบข้อมูลแผนที่สำหรับการบริหารจัดการภัยพิบัติ
                  เพื่อสนับสนุนการใช้ข้อมูลห้องศูนย์บัญชาการเหตุการณ์ (EOC)
                </p>
                <p className="text-gray-400 text-sm">
                  Department of Disaster Prevention and Mitigation. Ministry of
                  Interior. Thailand
                </p>
              </div>
            </div>
          </div>

          <div className="flex-none">
            <div className="flex flex-row gap-4">
              <Image src="/bell.svg" alt="bell" width={29} height={30} />
              <Image src="/profile.svg" alt="profile" width={56} height={56} />
              <div className="flex flex-col text-black">
                <p>Admin</p>
                <p>ผู้ว่าราชการจังหวัด</p>
              </div>
            </div>
          </div>
        </div>
        <QueryProvider>
          <MantineProvider>{children}</MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
