import React, { useState } from 'react';
import { View, Picker, Platform, StyleSheet } from 'react-native';
import { ThemeProvider } from '@gympass/design-system';

const CenteredView = props => {
  const [themed, setThemed] = useState('endUser');
  return (
    <ThemeProvider theme={themed}>
      <View
        style={{
          height: Platform.OS === 'ios' ? 200 : 50,
          backgroundColor: '#f0f0f0',
        }}
      >
        <Picker
          selectedValue={themed}
          style={{ width: '100%' }}
          onValueChange={theme => setThemed(theme)}
        >
          <Picker.Item label="End User" value="endUser" />
          <Picker.Item label="Corp" value="corp" />
          <Picker.Item label="Gyms" value="gyms" />
        </Picker>
      </View>
      <View style={styles.MainContainer} {...props} />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    flex: 1,
    justifyContent: 'center',
  },
});

export default CenteredView;
