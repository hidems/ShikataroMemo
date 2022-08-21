// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import React from 'react'; // No need it current version of React Native

// import Hello from './src/components/Hello';
import AppBar from './src/components/AppBar';
import MemoList from './src/components/MemoList';
import CircleButton from './src/components/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
