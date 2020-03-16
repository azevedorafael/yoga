import BaseTheme from './BaseTheme';

const EndUser = tokens => {
  const colors = {
    primary: [
      tokens.colors.madrid.i10,
      tokens.colors.madrid.i30,
      tokens.colors.madrid.i50,
    ],
    secondary: [
      tokens.colors.paris.i10,
      tokens.colors.paris.i50,
      tokens.colors.paris.i70,
    ],
  };

  return {
    colors,
    ...BaseTheme(colors),
  };
};

export default EndUser;
