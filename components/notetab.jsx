import { Pressable, StyleSheet, View, Text } from "react-native";
const tabs = [
  { title: "Notes", id: 1, on: true },
  { title: "Stories", id: 2, on: false },
  { title: "Journals", id: 3, on: false },
];

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
          style={styles.tab}
        />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: 30,
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    height: 30,
    width: 50,
  },
});
