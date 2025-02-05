import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { QueryProvider } from "@/lib/providers";

import { Kanit } from "next/font/google";
import theme from "@/styles/theme";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import { AuthProvider } from "@/lib/providers/auth";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
        className={`${kanit.className} h-screen min-w-[90rem] font-normal text-base bg-gray-100`}
      >
        <QueryProvider>
          <MantineProvider theme={theme}>
            <AuthProvider>{children}</AuthProvider>
            <Notifications />
          </MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
