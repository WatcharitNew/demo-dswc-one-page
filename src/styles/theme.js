
'use client'

import { createTheme, Input } from "@mantine/core";

export default createTheme({
  fontFamily: 'Kanit',
  components: {
    Input: Input.extend({
      styles: {
        input: {
          borderRadius: "0.5rem",
          height: "2.75rem",
        }
      }
    }),
  },
});