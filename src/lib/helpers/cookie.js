import { setCookie, getCookie, deleteCookie } from "cookies-next";

export const COOKIE_USER = "_USER_";

export const setUserData = (token) => {
  return setCookie(COOKIE_USER, token, {
    expires: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000),
    path: "/",
  });
};

export const getUserData = () => {
  return getCookie(COOKIE_USER);
};

export const deleteUserData = () => {
  return deleteCookie(COOKIE_USER, { path: "/" });
};
