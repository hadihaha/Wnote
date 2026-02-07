import { Pressable, StyleSheet, View, Text } from "react-native";

export default function Ntab({ notes, setNotes }) {
  const activeTab = notes.find((tab) => tab.on);
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
  const saveNote = async () => {
    const { data, error } = await supabase
      .from("notes")
      .upsert({
        note_id:
          activeTab.nId === undefined || activeTab.nId === null
            ? null
            : activeTab.nId, // If this is null, a new note is made. If it has a value, it updates.
        note: text, // Put your text into the 'content' column
      })
      .select() // Ask Supabase to send the saved data back
      .single(); // We only expect one row back

    if (error) {
      console.error("Save failed:", error.message);
    } else if (data) {
      // FIX: Update only the active tab in the array, don't replace the whole array!
      setNotes((prevTabs) =>
        prevTabs.map((tab) =>
          tab.on ? { ...tab, nId: data.id, text: data.note } : tab,
        ),
      );
      console.log("Note saved and stored in object:", data.id);
    }
  };
  return (
    <View style={styles.controls}>
      {" "}
      <View style={styles.tabContainer}>
        {notes.map((item) => (
          <Pressable
            onPress={() => switchTab(item.nId)}
            key={item.nId}
            style={styles.tab}
          >
            <Text style={styles.tabText}>{item.title}</Text>
          </Pressable>
        ))}
      </View>
      <Pressable onPress={saveNote} style={styles.saveButton}>
        <Text style={{ color: "#fff", fontSize: 16 }}>Save</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  saveButton: {
    padding: 5,
    backgroundColor: "#007bff",
    borderRadius: 5,
    height: 38,
    width: 75,
    marginRight: 5,
    paddingHorizontal: 10,

    justifyContent: "center",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 38,
    marginTop: 15,
  },
  tabContainer: {
    backgroundColor: "#fff",
    width: "auto",
    height: "100%",
    flexDirection: "row",
  },
  tab: {
    backgroundColor: "#ff0000",
    height: 38,
    minWidth: "auto",
    padding: 5,
    borderBlockColor: "#000",
    borderWidth: 1,
    borderColor: "#000",
  },
});
