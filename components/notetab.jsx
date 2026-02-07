import { Pressable, StyleSheet, View } from "react-native";
const tabs = [
  { title: "Notes", id: 1, on: true },
  { title: "Stories", id: 2, on: false },
  { title: "Journals", id: 3, on: false },
];
function notetab() {
  return (
    <View name="tabContainer" style={styles.tabContainer}>
      {tabs.map((item) => (
        <Pressable
          onPress={() => {
            item.on = true;
          }}
          key={item.id}
          style={styles.tab}
        />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  notetabContainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "30",
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    height: "30",
    width: "50",
  },
});
export default notetab;
