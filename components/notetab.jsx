import { Pressable, StyleSheet, View } from "react-native";
import { supabase } from "../lib/supabase";

export default function Ntab({ notes, setNotes, activeTab }) {
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
        Nid:
          activeTab.nId === undefined || activeTab.nId === null
            ? null
            : activeTab.nId,
        note_title: activeTab.title,
        note_text: activeTab.text,
      })
      .select()
      .single();

    if (error) {
      console.error("Save failed:", error.message);
    } else if (data) {
      setNotes((prevTabs) =>
        prevTabs.map((tab) =>
          tab.on ? { ...tab, nId: data.id, text: data.note } : tab,
        ),
      );
      console.log("Note saved and stored in object:", data.id);
    }
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
