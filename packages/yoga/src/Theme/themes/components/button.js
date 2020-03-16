import { hexToRgb } from '@gympass/yoga-common';

const button = ({
  spacing,
  fontSizes,
  borders,
  radii,
  colors,
  fontWeights,
}) => ({
  padding: {
    right: spacing.xlarge,
    left: spacing.xlarge,
  },
  height: {
    default: 48,
    small: 32,
  },
  font: {
    size: fontSizes.small,
    weight: fontWeights.bold,
  },
  border: {
    small: {
      width: borders.small,
    },
    default: {
      width: borders.medium,
    },
    radius: radii.xxlarge,
  },
  types: {
    contained: {
      backgroundColor: {
        disabled: colors.gray[2],
        default: colors.primary[4],
        pressed: colors.primary[3],
      },
      font: {
        default: {
          color: colors.white,
        },
        disabled: {
          color: colors.gray[5],
        },
        pressed: {
          color: colors.white,
        },
      },
    },
    outline: {
      backgroundColor: {
        disabled: 'transparent',
        default: 'transparent',
        pressed: 'transparent',
        hover: hexToRgb(colors.primary[4], 0.3),
      },
      font: {
        default: {
          color: colors.primary[4],
        },
        disabled: {
          color: colors.gray[5],
        },
        pressed: {
          color: colors.primary[3],
        },
      },
    },
    text: {
      backgroundColor: {
        disabled: 'transparent',
        default: 'transparent',
        pressed: 'transparent',
        hover: hexToRgb(colors.primary[4], 0.3),
      },
      font: {
        default: {
          color: colors.primary[4],
        },
        disabled: {
          color: colors.gray[5],
        },
        pressed: {
          color: colors.primary[3],
        },
      },
    },
    link: {
      font: {
        disabled: {
          color: colors.gray[5],
        },
      },
      margin: {
        top: spacing.medium,
        bottom: spacing.xsmall,
      },
    },
  },
});

export default button;
