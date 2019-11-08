import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.View(
  ({
    theme: {
      components: { slider },
    },
  }) => `
    background-color: ${slider.tooltip.ribbon.backgroundColor};
    bottom: 38px;
    border-radius: ${slider.tooltip.radius}px;
    box-shadow: ${slider.tooltip.shadow};
    elevation: 8;
    position: absolute;
    width: 95px;
  `,
);

const Tip = styled.View(
  ({
    theme: {
      components: { slider },
    },
  }) => `  
    background-color: ${slider.tooltip.backgroundColor};
    border-radius: ${slider.tooltip.radius}px;
    padding: ${slider.tooltip.padding.top}px ${slider.tooltip.padding.right}px ${slider.tooltip.padding.bottom}px ${slider.tooltip.padding.left}px;
    justify-content: center;
    width: 95px;
  `,
);

const Title = styled.Text(
  ({
    theme: {
      components: { slider },
    },
  }) => `
    color: ${slider.tooltip.font.color};
    font-size: ${slider.tooltip.font.title.size};
    font-weight: ${slider.tooltip.font.title.weight};
    margin-bottom: 5px;
    text-align: center;
  `,
);

const Description = styled.Text(
  ({
    theme: {
      components: { slider },
    },
  }) => `
    color: ${slider.tooltip.font.color};
    font-size: ${slider.tooltip.font.description.size}px;
    font-weight: ${slider.tooltip.font.description.weight};
    text-align: center;
  `,
);

const Arrow = styled.View(
  ({
    theme: {
      components: { slider },
    },
  }) => `
    align-self: center;
    background-color: ${slider.tooltip.backgroundColor};
    border-radius: 3px;
    bottom: 10px;
    box-shadow: ${slider.tooltip.shadow};
    height: 16px;
    margin-bottom: -17px;
    position: relative;
    transform: rotate(45deg);
    width: 16px;
    z-index: -1;
  `,
);

const RibbonWrapper = styled.View(
  ({
    theme: {
      components: { slider },
    },
  }) => `
    align-items: center;
    background-color: ${slider.tooltip.ribbon.backgroundColor};
    border-top-left-radius: ${slider.tooltip.ribbon.radius}px;
    border-top-right-radius: ${slider.tooltip.ribbon.radius}px;
    justify-content: center;
    padding: ${slider.tooltip.ribbon.padding.top}px ${slider.tooltip.ribbon.padding.right}px ${slider.tooltip.ribbon.padding.bottom}px ${slider.tooltip.ribbon.padding.left}px;
    position: relative;
  `,
);

const RibbonText = styled.Text(
  ({
    theme: {
      components: { slider },
    },
  }) => `
    color: ${slider.tooltip.ribbon.font.color};
    font-size: ${slider.tooltip.ribbon.font.size}px;
    font-weight: ${slider.tooltip.ribbon.font.weight};
    text-align: center;
  `,
);

const Ribbon = ({ children, ...props }) => (
  <RibbonWrapper {...props}>
    <RibbonText>{children}</RibbonText>
  </RibbonWrapper>
);

Ribbon.propTypes = {
  children: node.isRequired,
};

const Tooltip = ({ title, description, ribbon, ...props }) => (
  <Wrapper>
    {ribbon && <Ribbon>{ribbon}</Ribbon>}
    {(title || description) && (
      <Tip {...props}>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
      </Tip>
    )}
    <Arrow />
  </Wrapper>
);

Tooltip.propTypes = {
  title: string,
  description: string,
  ribbon: string,
};

Tooltip.defaultProps = {
  title: undefined,
  description: undefined,
  ribbon: undefined,
};

export default Tooltip;
