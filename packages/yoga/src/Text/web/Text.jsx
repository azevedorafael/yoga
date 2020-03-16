import React from 'react';
import styled from 'styled-components';
import { oneOf, bool } from 'prop-types';
import textStyle from '../textStyle';

const styledText = (type, element = false) => (element
  ? styled[type]
  : styled.p)`
  ${textStyle(type)}
`;

const H1 = styledText('h1', true);
H1.displayName = 'Text.H1';

const H2 = styledText('h2', true);
H2.displayName = 'Text.H2';

const H3 = styledText('h3', true);
H3.displayName = 'Text.H3';

const H4 = styledText('h4', true);
H4.displayName = 'Text.H4';

const Small = styledText('small');
Small.displayName = 'Text.Small';

const Tiny = styledText('tiny');
Tiny.displayName = 'Text.Tiny';

const Paragraph = styledText('p');
const Text = props => <Paragraph {...props} />;
Text.displayName = 'Text';

Text.propTypes = {
  inverted: bool,
  /** style the text following the theme (primary, secondary, tertiary) */
  variant: oneOf(['primary', 'secondary']),
};

Text.defaultProps = {
  inverted: false,
  variant: undefined,
};

export { Text, H1, H2, H3, H4, Small, Tiny };
