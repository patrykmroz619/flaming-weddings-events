export const breakpoints = {
  xs: 360,
  s: 410,
  m: 600,
  l: 800,
  xl: 1024,
  xxl: 1200,
} as const;

export const minWidth = (breakpoint: number) =>
  `@media (min-width: calc(${breakpoint}px - 1px))`;
