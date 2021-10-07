export const theme = {
  colors: {
    brandPrimary: "#4F46BB",
    brandPrimaryLight: "#8E85FF",
    textPrimary: "#302E45",
    textSecondary: "#6D6C7B",
    white: "#FFFFFF",
    lightGray: "#F6F7FB",
    grayDark: "#BBB8D9",
    gray: " #F8F7FC",
  },
  rounded: {
    full: "9999px",
    lg: "0.5rem",
  },
  duration: {
    fast: "0.2s",
  },
  shadow: {
    default: "0px 2px 4px rgba(48, 46, 69, 0.06)",
  },
} as const;

export type Theme = typeof theme;
