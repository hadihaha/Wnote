import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

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
