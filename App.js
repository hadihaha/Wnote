import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [notes, setNotes] = useState([
    { title: "Notes", nId: 1, text: 'dddddddd', on: true },
    { title: "Stories", nId: 2, text: 'ddddd2dd', on: false },
    { title: "Journals", nId: 3, text: 'dddd21ddd', on: false },
  ])
  const activeTab = notes.find((tab) => tab.on);
  return (
    <View style={styles.container}>
      <Text>chatbot</Text>
      <StatusBar style="auto" />
    </View>
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
