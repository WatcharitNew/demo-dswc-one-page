"use client";

import { Image } from "@mantine/core";

function LoginLayout({ children }) {
  return (
    <div className="w-full h-full">
      <Image
        src="/login-bg.jpeg"
        alt="login bg"
        className="h-full w-full min-w-[90rem] absolute z-[-1] object-cover"
      />
      {children}
    </div>
  );
}

export default LoginLayout;
