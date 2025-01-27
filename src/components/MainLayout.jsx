"use client";

import { AppLayout } from "@/components";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { useAuthContext } from "@/lib/providers/auth";

export default function MainLayout({ children }) {
  const { isAuth, isLoading, data } = useAuthContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuth) {
        router.push("/");
      }

      if (data.role === "ผู้รับผิดชอบรูปแบบรายงาน" && !pathname.includes("/templater")) {
        router.push("/templater");
      }

      if (data.role === "ผู้สร้างรายงาน" && !pathname.includes("/reporter")) {
        router.push("/reporter");
      }
    }
  }, [isAuth, isLoading, router]);

  return <AppLayout>{children}</AppLayout>;
}
