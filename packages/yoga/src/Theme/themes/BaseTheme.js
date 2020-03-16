import tokens from '@gympass/yoga-tokens';

import {
  autocomplete,
  textarea,
  input,
  progress,
  stepper,
  slider,
  list,
  button,
  checkboxswitch,
  radiogroup,
  card,
  checkbox,
  grid,
  text,
  rating,
  tag,
  dropdown,
} from './components';

const {
  breakpoints,
  spacing,
  radii,
  fontSizes,
  fontWeights,
  transition,
  elevations,
  colors: tokenColors,
  borders,
  fonts,
  lineHeights,
} = tokens;

const BaseTheme = ({ primary, secondary, tertiary }) => {
  const baseFont = {
    family: fonts.openSans,
    weight: fontWeights,
  };

  const baseFontSize = fontSizes.medium;
  const colors = {
    primary,
    secondary,
    tertiary,
    gray: tokenColors.vilaOlimpia,
    white: tokenColors.white,
    dark: tokenColors.dark,
    positive: tokenColors.positive,
    negative: tokenColors.negative,
    informative: tokenColors.informative,
    warning: tokenColors.warning,
    disabled: {
      content: tokenColors.vilaOlimpia[7],
    },
  };

  [
    colors.gray.surface,
    colors.gray.background,
    ,
    ,
    ,
    ,
    ,
    colors.gray.medium,
    colors.gray.dark,
    colors.gray.darker,
  ] = colors.gray;

  const components = {
    stepper: stepper({ colors, spacing, fontWeights, radii }),
    slider: slider({ colors, radii, elevations, spacing, fontWeights }),
    list: list({ spacing, borders, colors }),
    button: button({ spacing, fontSizes, borders, radii, colors, fontWeights }),
    checkboxswitch: checkboxswitch({
      colors,
      radii,
      transition,
      spacing,
      elevations,
    }),
    radioGroup: radiogroup({
      radii,
      colors,
      fontWeights,
      spacing,
      borders,
      fontSizes,
    }),
    card: card({ colors, spacing, radii, elevations, borders, fontWeights }),
    checkbox: checkbox({ spacing, colors, borders, radii, fontSizes }),
    grid: grid(),
    text: text({ fontSizes, lineHeights, fontWeights }),
    rating: rating({ spacing, tokenColors }),
    tag: tag({ spacing, fontSizes, fontWeights, radii }),
    progress: progress({ spacing, colors, radii, fontSizes }),
    input: input({
      borders,
      spacing,
      colors,
      radii,
      fontSizes,
      fontWeights,
    }),
    textarea: textarea({
      borders,
      spacing,
      colors,
      radii,
      fontSizes,
      fontWeights,
    }),
    autocomplete: autocomplete({
      borders,
      spacing,
      colors,
      radii,
      fontSizes,
      fontWeights,
      lineHeights,
    }),
    dropdown: dropdown({
      colors,
      fontSizes,
      fontWeights,
      lineHeights,
      radii,
      spacing,
      borders,
    }),
  };

  return {
    components,
    baseFont,
    baseFontSize,
    fontWeights,
    colors,
    spacing,
    fonts,
    breakpoints,
    transition,
    radii,
  };
};

export default BaseTheme;
