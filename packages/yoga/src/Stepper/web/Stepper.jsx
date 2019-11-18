import React from 'react';
import { node, number, checkPropTypes } from 'prop-types';
import styled from 'styled-components';

import Content from './Content';
import Dots from './Dots';
import Line from './Line';

const Wrapper = styled.div(
  ({ theme: { spacing } }) => `
  width: 100%;
  padding: 0 ${spacing.xxlarge}px;
`,
);

const Stepper = ({ children, activeStep, ...rest }) => (
  <div {...rest}>
    <Wrapper>
      <Line
        activeStep={activeStep}
        totalSteps={React.Children.count(children)}
      />
      <Dots
        activeStep={activeStep}
        labels={React.Children.map(children, child => child.props.label)}
      />
    </Wrapper>
    <Content activeStep={activeStep}>{children}</Content>
  </div>
);

Stepper.displayName = 'Stepper';

Stepper.propTypes = {
  children: node.isRequired,
  activeStep: (props, propName, componentName) => {
    const { children, [propName]: activeStep } = props;

    checkPropTypes({ [propName]: number }, props, 'prop', componentName);

    if (activeStep > children.length - 1) {
      return new Error(
        `Invalid prop "${propName}" supplied to "${componentName}". "${propName}" must be smaller or equal the number of children.`,
      );
    }

    return null;
  },
};

Stepper.defaultProps = {
  activeStep: 0,
};

export default Stepper;
