"use client";
import { Button, createTheme, Select } from "@mantine/core";
import buttonClass from "./Button.module.css";

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: buttonClass,
    }),
  },
});
export default theme;
