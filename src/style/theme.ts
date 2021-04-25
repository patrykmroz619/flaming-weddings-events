export const theme = {
  colors: {
    primary: `#c21500`,
    secondary: `#ffc500`,
    font: `#111`,
    light: `#fafafa`,
    dark: `#111111`,
  },
  spacing: {
    xs: `5px`,
    s: `10px`,
    m: `20px`,
    l: `50px`,
    xl: `100px`,
  },

  gradient: `linear-gradient(to right, #c21500 0%, #ffc500  51%, #c21500  100%)`,

  contentWidth: `1200px`,
} as const;

export type ThemeType = typeof theme;
