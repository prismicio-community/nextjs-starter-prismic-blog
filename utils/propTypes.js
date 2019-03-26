import {
  shape,
  string,
} from 'prop-types';

export const imagePropType = shape({
  url: string.isRequired,
  alt: string
});