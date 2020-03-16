import React from 'react';
import styled from 'styled-components';
import { string, shape, oneOf, node } from 'prop-types';

import Text from '../../../Text';

const CardStyled = styled.section`
  ${({
    variant,
    variantIntensity,
    theme: {
      yoga: {
        colors: { [variant]: color = {} },
        components: { card },
      },
    },
  }) => `
    padding: 
      ${card.padding.top}px 
      ${card.padding.right}px 
      ${card.padding.bottom}px 
      ${card.padding.left}px;

    border-radius: ${card.radii}px;
    background-color: ${
      variant ? color[variantIntensity] : card.backgroundColor
    };
    box-shadow: ${card.elevation};
  `}
`;

const Ribbon = styled(Text.Tiny)`
  ${({
    variant,
    variantIntensity,
    theme: {
      yoga: {
        components: { card },
        spacing,
        colors: { gray, [variant]: color = {}, white },
      },
    },
  }) => `
    display: inline-block;
    top: ${card.padding.top}px;
    left: 0;

    margin-left: -${card.padding.left}px;
    margin-bottom: ${card.padding.bottom}px;

    padding: 
      ${spacing.xxsmall}px
      ${spacing.small}px
      ${spacing.xxsmall}px
      ${spacing.medium}px;
    
    border-top-right-radius: ${card.ribbon.radius}px;
    border-bottom-right-radius: ${card.ribbon.radius}px;

    background-color: ${
      variant
        ? color[typeof variantIntensity === 'number' ? variantIntensity : 2]
        : gray.i10
    };

    color: ${variant ? white : gray.i80};
  `}
`;

const Card = ({ ribbon, children, ...rest }) => (
  <CardStyled {...rest}>
    {Object.keys(ribbon).length > 0 && (
      <Ribbon
        variant={ribbon.variant}
        variantIntensity={ribbon.variantIntensity}
        as="span"
      >
        {ribbon.text}
      </Ribbon>
    )}
    {children}
  </CardStyled>
);

Card.propTypes = {
  /** text: the content inside the Card Ribbon
   * variant: style the ribbon following the theme (primary, secondary, tertiary)
   * variantIntensity: ribbon variant color intensity (0, 1, 2) */
  ribbon: shape({
    text: string,
    variant: oneOf(['', 'primary', 'secondary']),
    variantIntensity: oneOf([0, 1, 2]),
  }),
  children: node,
  /** style the card following the theme (primary, secondary, tertiary) */
  variant: oneOf(['', 'primary', 'secondary']),
  /** intensity of variant color (0, 1, 2) */
  variantIntensity: oneOf([0, 1, 2]),
};

Card.defaultProps = {
  ribbon: {},
  children: null,
  variant: '',
  variantIntensity: 2,
};

Card.displayName = 'Card';

export default Card;
