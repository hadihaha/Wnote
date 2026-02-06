import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, } from 'react-native';
import Pad from './components/pad';
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from 'react';
import Ntab from './components/notetab';
export default function App() {
  const [notes, setNotes] = useState([
    { title: "Notes", id: 1, on: true },
    { title: "Stories", id: 2, on: false },
    { title: "Journals", id: 3, on: false },
  ])

  return (
    <SafeAreaView style={styles.container}>
      <Pad notes={notes} setNotes={setNotes} />
      <Ntab />
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
