"use client";

import { createTheme, Button, Input, Table, Textarea } from "@mantine/core";
import buttonClass from "./Button.module.css";
import colors from "./colors";

export default createTheme({
  fontFamily: "Kanit",
  components: {
    Button: Button.extend({
      classNames: buttonClass,
    }),
    Input: Input.extend({
      styles: {
        input: {
          fontSize: "1rem",
          borderRadius: "0.5rem",
          height: "2.75rem",
        },
      },
    }),
    Table: Table.extend({
      styles: {
        table: {
          color: colors.gray[600],
        },
        thead: {
          backgroundColor: colors.gray2[200],
          color: colors.gray[900],
        },
        th: {
          fontWeight: 500,
          textAlign: "center",
        },
        tr: {
          height: "4rem",
        },
        td: {
          textAlign: "center",
        },
      },
    }),
    Textarea: Textarea.extend({
      styles: {
        input: {
          borderRadius: 0,
          border: "none",
        },
      },
    }),
  },
});
