import React from 'react';
import { View } from 'react-native';
import { Strike } from '@gympass/yoga';
import styled from 'styled-components';

const StyledText = styled.Text`
  margin-top: 10px;

  font-size: 18px;
  text-align: center;
`;

const StrikePage = () => (
  <View>
    <StyledText>Primary</StyledText>
    <Strike
      value={135}
      description="check-ins completed"
      style={{ width: 150, margin: 16 }}
    />
    <StyledText>Secondary</StyledText>
    <Strike
      value={5}
      description="check-ins this week"
      variant="secondary"
      style={{ width: 150, margin: 16 }}
    />
    <StyledText>Tertiary</StyledText>
    <Strike
      value={22}
      description="check-ins this month"
      variant="tertiary"
      style={{ width: 150, margin: 16 }}
    />
  </View>
);

export default StrikePage;
