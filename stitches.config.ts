import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import { gold, gray, purple, red, yellow } from './theme/colors';
import { fontSizes, radii, sizes, space } from './theme/sizes';
import { media } from './theme/media';
import { utils } from './theme/utils';
export type { VariantProps } from '@stitches/react';


export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    colors: {
      ...gray,
      ...red,
      ...purple,
      ...yellow,
      ...gold,
      primary: '#d6b161',
    },
    fonts: {
      untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    space: {
      ...space
    },
    sizes: {
      ...sizes
    },
    fontSizes: {
      ...fontSizes
    },
    radii: {
      ...radii
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: {
    ...media
  },
  utils: {
    ...utils
  },
});

export type CSS = Stitches.CSS<typeof config>;
