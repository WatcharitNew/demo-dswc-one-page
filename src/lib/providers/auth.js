"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { createCtx } from "../helpers/createCtx";
import { getUserData, setUserData } from "../helpers/cookie";

const authContext = createCtx();
const [, Provider] = authContext;
export const [useAuthContext] = authContext;

export const AuthProvider = ({ children }) => {
  const pathname = usePathname();

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const signIn = useCallback((token) => setUserData(token), []);

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
  };

  return <Provider value={authContextValue}>{children}</Provider>;
};
