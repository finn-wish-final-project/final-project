import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Quiz2 = () => {
  return (
    <NavigationContainer>
        <View style={styles.container}>
            <Text>다음 화면</Text>
        </View>
    </NavigationContainer>
  );
};

export default Quiz2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

