import input from './input';

const autocomplete = tokens => ({
  ...input(tokens),
  list: {
    padding: {
      top: tokens.spacing.medium,
      right: tokens.spacing.medium,
      bottom: tokens.spacing.medium,
      left: tokens.spacing.medium,
    },
    font: {
      size: tokens.fontSizes.small,
      weight: {
        default: tokens.fontWeights.regular,
        matched: tokens.fontWeights.bold,
      },
      lineHeight: tokens.lineHeights.small,
    },
    backgroundColor: {
      default: tokens.colors.white,
      hover: tokens.colors.gray.i10,
    },
  },
});

export default autocomplete;
