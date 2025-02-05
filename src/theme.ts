import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  globalCss: {
    html: {
      transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out",
    },
    body: {
      colorPalette: "cyan",
    },
  },
  theme: {
    tokens: {
      fonts: {
        body: { value: "Pretendard" },
        heading: { value: "Pretendard" },
      },
    },
  },
});
