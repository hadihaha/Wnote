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
<<<<<<< HEAD
    <SafeAreaView style={styles.container}>
      <Pad notes={notes} setNotes={setNotes} />
      <Ntab />
    </SafeAreaView>
=======
    <View style={styles.container}>
      <Text>chatbot</Text>
      <StatusBar style="auto" />
    </View>
>>>>>>> 56898d47ea40c56d6faeb3aff87a834d0b51430c
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
