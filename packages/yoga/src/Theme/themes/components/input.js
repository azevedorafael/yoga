const input = ({
  colors,
  fontSizes,
  fontWeights,
  borders,
  radii,
  spacing,
}) => ({
  width: 320,
  height: 52,
  font: {
    color: {
      default: colors.gray[5],
      focus: colors.gray[7],
    },
    size: fontSizes.small,
    weight: fontWeights.regular,
  },
  border: {
    width: borders.small,
    radius: radii.medium,
    color: {
      default: colors.gray[2],
      typed: colors.gray[7],
    },
  },
  padding: {
    top: spacing.medium,
    right: spacing.medium,
    bottom: spacing.medium,
    left: spacing.medium,
  },
  label: {
    color: {
      default: colors.gray[5],
      focus: colors.gray[7],
    },
    padding: {
      right: spacing.xxsmall,
      left: spacing.xxsmall,
    },
    font: {
      size: {
        default: fontSizes.small,
        typed: fontSizes.xsmall,
      },
      weight: {
        default: fontWeights.regular,
        typed: fontWeights.bold,
      },
    },
  },
  helper: {
    color: colors.gray[5],
    margin: {
      top: spacing.xxsmall,
    },
    font: {
      size: fontSizes.xsmall,
    },
  },
});

export default input;
