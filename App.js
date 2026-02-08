import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-url-polyfill/auto';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigation/mainNavigator';

export default function App() {
<<<<<<< HEAD
  return (
    <View style={styles.container}>
      <Text>chatbot</Text>
      <StatusBar style="auto" />
    </View>
=======
  const [notes, setNotes] = useState([
    { title: "Notes", nId: 1, on: true },
    { title: "Stories", nId: 2, on: false },
    { title: "Journals", nId: 3, on: false },
  ])
  const activeTab = notes.find((tab) => tab.on);
  return (
    <SafeAreaView style={styles.container}>
      <Pad notes={notes} setNotes={setNotes} />
      <Ntab notes={notes} setNotes={setNotes} />
      <View style={styles.container}>

        <Text>chatbot</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
>>>>>>> parent of 5d80e1d (Add Save button and note text handling)
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
