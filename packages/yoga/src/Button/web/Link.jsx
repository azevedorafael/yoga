import React from 'react';
import { oneOf, bool } from 'prop-types';
import styled from 'styled-components';

import StyledButton from './StyledButton';

const Link = styled(StyledButton)`
  ${({
    inverted,
    variant,
    full,
    theme: {
      yoga: {
        colors: { white, gray, [variant]: color },
        components: { button },
      },
    },
  }) => `
  height: unset;
  padding: 0;
  margin-top: ${button.types.link.margin.top}px;
  margin-bottom: ${button.types.link.margin.bottom}px;
  background-color: unset;
  border: none;
  border-radius: 0;
  color: ${color[3]};

  &:not([disabled]):hover, &:not([disabled]):focus {
    box-shadow: unset;
    color: ${color[2]};
  }

  &:not([disabled]):active {
    background-color: unset;
    color: ${color[2]};
  }

  &:disabled {
    background-color: unset;
    color: ${button.types.link.font.disabled.color};
  }

  ${
    inverted
      ? `
        color: ${white};

        &:not([disabled]):hover, &:not([disabled]):focus {
          box-shadow: unset;
          color: ${gray[3]};
        }
      `
      : ''
  }

  ${full ? 'width: 100%' : ''}
`}
`;

const ButtonLink = props => <Link {...props} />;

ButtonLink.propTypes = {
  /** style the link following the theme (primary, secondary, tertiary) */
  variant: oneOf(['primary', 'secondary']),
  inverted: bool,
  disabled: bool,
};

ButtonLink.defaultProps = {
  variant: 'primary',
  inverted: false,
  disabled: false,
};

ButtonLink.displayName = 'Button.Link';

export default ButtonLink;
