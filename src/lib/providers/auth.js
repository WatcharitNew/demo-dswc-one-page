"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { createCtx } from "../helpers/createCtx";
import { getUserData, setUserData, deleteUserData } from "../helpers/cookie";

const authContext = createCtx();
const [, Provider] = authContext;
export const [useAuthContext] = authContext;

export const AuthProvider = ({ children }) => {
  const pathname = usePathname();

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // Example Data -> { province: "กรุงเทพมหานคร", date: new Date(), role: "ผู้รับผิดชอบรูปแบบรายงาน" }
  const [data, setData] = useState({});
  const signIn = useCallback((token) => setUserData(token), []);
  const signOut = useCallback(() => {
    deleteUserData()
    setIsAuth(false)
    setData({})
  }, [])

  useEffect(() => {
    const userData = getUserData();

    try {
      const parsedData = JSON.parse(userData);
      setIsAuth(true);
      setData(parsedData);
      setIsLoading(false);
    } catch (_) {
      setIsAuth(false);
      setIsLoading(false);
    }
  }, [pathname]);

  const authContextValue = {
    isAuth,
    isLoading,
    data,
    signIn,
    signOut
  };

  return <Provider value={authContextValue}>{children}</Provider>;
};
