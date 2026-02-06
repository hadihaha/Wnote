import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import Pad from './components/pad';
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from 'react';
import Ntab from './components/notetab';
export default function App() {
  const [notes, setNotes] = useState([
    { title: "Notes", nId: 1, text: 'dddddddd', on: true },
    { title: "Stories", nId: 2, text: 'ddddd2dd', on: false },
    { title: "Journals", nId: 3, text: 'dddd21ddd', on: false },
  ])
  const activeTab = notes.find((tab) => tab.on);
  return (
    <SafeAreaView style={styles.container}>
      <Ntab notes={notes} setNotes={setNotes} />
      <Pad notes={notes} setNotes={setNotes} />

      <View style={styles.container}>

        <Text>chatbot</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f073e4e',
    width: '100%',
    height: 'auto'
  },
});
