import { styled } from '../../stitches.config';

export const Container = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  ml: 'auto',
  mr: 'auto',
  px: '$5',
  width: '100%',

  variants: {
    size: {
      '1': {
        maxWidth: '430px',
      },
      '2': {
        maxWidth: '715px',
      },
      '3': {
        maxWidth: '1170px',
      },
      '4': {
        maxWidth: 'none',
      },
    },
  },
  defaultVariants: {
    size: '4',
  },
});