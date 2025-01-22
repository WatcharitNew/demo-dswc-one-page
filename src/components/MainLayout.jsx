"use client";

import { AppLayout } from "@/components";
import { useAuthContext } from "@/lib/providers/auth";
import { useRouter } from "next/navigation";

export default function MainLayout({ children }) {
  const { isAuth, isLoading } = useAuthContext();
  const router = useRouter();

  if (!isAuth && !isLoading) {
    router.push("/login");
  }

  return <AppLayout>{children}</AppLayout>;
}
