<<<<<<< HEAD
import { Pressable, StyleSheet, View } from "react-native";
=======
import { Pressable, StyleSheet, View, Text } from "react-native";
>>>>>>> parent of 5d80e1d (Add Save button and note text handling)
const tabs = [
  { title: "Notes", id: 1, on: true },
  { title: "Stories", id: 2, on: false },
  { title: "Journals", id: 3, on: false },
];
<<<<<<< HEAD
function notetab() {
  return (
    <View name="tabContainer" style={styles.tabContainer}>
      {tabs.map((item) => (
        <Pressable
          onPress={() => {
            item.on = true;
          }}
          key={item.id}
=======

export default function Ntab({ notes, setNotes }) {
  const switchTab = (id) => {
    // Safety check: don't run if id is missing
    if (id === undefined || id === null) return;

    setNotes((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        on: tab.nId === id,
      })),
    );
  };
  return (
    <View style={styles.tabContainer}>
      {notes.map((item) => (
        <Pressable
          onPress={() => switchTab(item.nId)}
          key={item.nId}
>>>>>>> parent of 5d80e1d (Add Save button and note text handling)
          style={styles.tab}
        />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
<<<<<<< HEAD
  notetabContainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "30",
=======
  tabContainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: 30,
>>>>>>> parent of 5d80e1d (Add Save button and note text handling)
    flexDirection: "row",
  },
  tab: {
    flex: 1,
<<<<<<< HEAD
    height: "30",
    width: "50",
=======
    height: 30,
    width: 50,
>>>>>>> parent of 5d80e1d (Add Save button and note text handling)
  },
});
export default notetab;
