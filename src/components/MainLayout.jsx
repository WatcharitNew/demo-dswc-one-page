"use client";

import { AppLayout } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useAuthContext } from "@/lib/providers/auth";

export default function MainLayout({ children }) {
  const { isAuth, isLoading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!isAuth && !isLoading) {
      router.push("/login");
    }
  }, [isAuth, isLoading, router]);

  return <AppLayout>{children}</AppLayout>;
}
