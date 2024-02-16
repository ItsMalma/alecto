"use client";

import { Carousel } from "@mantine/carousel";
import { createTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    Carousel: Carousel.extend({
      defaultProps: {
        loop: true,
      },
      styles: {
        indicator: {
          backgroundColor: "var(--mantine-color-black)",
          outline: "none",
        },
        control: {
          backgroundColor: "var(--mantine-color-black)",
          color: "var(--mantine-color-white)",
        },
      },
    }),
  },
});
