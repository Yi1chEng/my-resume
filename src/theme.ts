import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        navy: {
          50: { value: "#e8eef7" },
          100: { value: "#c5d3ea" },
          200: { value: "#9fb6db" },
          300: { value: "#7898cb" },
          400: { value: "#5a81bf" },
          500: { value: "#3c6ab3" },
          600: { value: "#2d5494" },
          700: { value: "#1e3d75" },
          800: { value: "#1a365d" },
          900: { value: "#0f2040" },
          950: { value: "#071224" },
        },
      },
    },
    semanticTokens: {
      colors: {
        navy: {
          solid: { value: "{colors.navy.800}" },
          contrast: { value: "{colors.navy.100}" },
          fg: { value: "{colors.navy.700}" },
          muted: { value: "{colors.navy.100}" },
          subtle: { value: "{colors.navy.200}" },
          emphasized: { value: "{colors.navy.300}" },
          focusRing: { value: "{colors.navy.500}" },
        },
      },
    },
  },
  globalCss: {
    "html, body": {
      scrollBehavior: "smooth",
    },
    "*": {
      boxSizing: "border-box",
    },
  },
})

export const system = createSystem(defaultConfig, config)
