const color = {
  main: '#288BE1',
  sub: '#45DFDA',
  error: '#DF454A',

  gray: {
    '400': '#6B6B6B',
    '700': '#B8B8B8',
  },
  white: '#FFFFFF',
  black: '#000000',
} as const

const typo = {
  title_lg: {
    fontSize: '48px',
    lineHeight: '120%',
    fontWeight: '600',
  },
  title_md: {
    fontSize: '36px',
    lineHeight: '120%',
    fontWeight: '600',
  },
  title_sm: {
    fontSize: '24px',
    lineHeight: '130%',
    fontWeight: '600',
  },
  text_lg: {
    fontSize: '18px',
    lineHeight: '140%',
    fontWeight: '600',
  },
  text_md: {
    fontSize: '16px',
    lineHeight: '140%',
    fontWeight: '400',
  },
  text_sm: {
    fontSize: '14px',
    lineHeight: '140%',
    fontWeight: '400',
  },
  caption: {
    fontSize: '12px',
    lineHeight: '140%',
    fontWeight: '400',
  },
} as const

const breakPoint = {
  360: '(max-width: 360px)',
  600: '(max-width: 600px)',
  1024: '(max-width: 1024px)',
  1280: '(max-width: 1280px)',
  1440: '(max-width: 1440px)',
  1728: '(max-width: 1728px)',
  1920: '(max-width: 1920px)',
} as const

export const theme = {
  color,
  typo,
  breakPoint,
} as const
