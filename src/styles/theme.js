
'use client'

import { createTheme, Button, Input } from "@mantine/core";
import buttonClass from "./Button.module.css";

export default createTheme({
  fontFamily: 'Kanit',
  components: {
    Button: Button.extend({
      classNames: buttonClass,
    }),
    Input: Input.extend({
      styles: {
        input: {
          fontSize: '1rem',
          borderRadius: "0.5rem",
          height: "2.75rem",
        }
      }
    }),
  },
});