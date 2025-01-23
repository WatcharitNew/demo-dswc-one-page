import "@mantine/core/styles.css";
import { Kanit } from "next/font/google";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { QueryProvider } from "@/lib/providers";
import { AppLayout } from "@/components";
import theme from "@/style/theme";
import "./globals.css";

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
        className={`${kanit.className} min-w-[90rem] font-normal text-base bg-gray-100`}
      >
        <QueryProvider>
          <MantineProvider theme={theme}>
            <AppLayout>{children}</AppLayout>
          </MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
