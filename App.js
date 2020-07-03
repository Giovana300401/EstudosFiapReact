import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Import Components 
import PrimeiroComponente from './src/components/PrimeiroComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Word!</Text>
      <PrimeiroComponente />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
