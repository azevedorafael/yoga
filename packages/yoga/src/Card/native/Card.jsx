import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.View(
  ({
    theme: {
      components: { card },
    },
  }) => `
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    padding:
      ${card.padding.top}px 
      ${card.padding.right}px 
      ${card.padding.bottom}px 
      ${card.padding.left}px;

    border-radius: ${card.radii}px;
    background-color: ${card.background};
    box-shadow: ${card.elevation};
    elevation: 4;
`,
);

const Card = ({ ...rest }) => <CardStyled {...rest} />;

Card.displayName = 'Card';

export default Card;
