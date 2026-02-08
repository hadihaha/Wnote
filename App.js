import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import 'react-native-url-polyfill/auto';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigation/mainNavigator';
import Pad from './components/pad';
import Ntab from './components/notetab';

export default function App() {
  const [notes, setNotes] = useState([
    { title: "Notes", nId: 1, on: true, text: '' },
    { title: "Stories", nId: 2, on: false, text: '' },
    { title: "Journals", nId: 3, on: false, text: '' },
  ])
  const activeTab = notes.find((tab) => tab.on);
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
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
