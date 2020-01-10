import React from 'react';
import styled from 'styled-components';
import { number, string, oneOf } from 'prop-types';

import Text from '../../Text';

const StrikeStyled = styled.View`
  ${({
    variant,
    theme: {
      yoga: {
        colors: { [variant]: color = {} },
        components: { strike },
      },
    },
  }) => `
    padding: 
      ${strike.padding.top}px 
      ${strike.padding.right}px 
      ${strike.padding.bottom}px 
      ${strike.padding.left}px;

    border-radius: ${strike.radii}px;
    background-color: ${color[0]};
  `}
`;

const Value = styled(Text.H1)`
  ${({
    theme: {
      yoga: {
        components: { strike },
      },
    },
  }) => `
    margin-bottom: ${strike.value.marginBottom};
  `}
`;

const Strike = ({ value, description, variant, ...rest }) => (
  <StrikeStyled variant={variant} {...rest}>
    <Value variant={variant}>{value}</Value>
    <Text.Tiny>{description}</Text.Tiny>
  </StrikeStyled>
);

Strike.propTypes = {
  value: number.isRequired,
  description: string.isRequired,
  /** style the card following the theme (primary, secondary, tertiary) */
  variant: oneOf(['primary', 'secondary', 'tertiary']),
};

Strike.defaultProps = {
  variant: 'primary',
};

Strike.displayName = 'Strike';

export default Strike;
