import { supabase } from "../lib/supabase";
import React from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";
import { useState, useEffect } from "react";
export default function Pad({ notes, setNotes }) {
  const [text, setText] = useState("");

  const activeTab = notes.find((tab) => tab.on);
  useEffect(() => {
    setText(activeTab.text || "");
  }, [activeTab]);
  function updateActiveTabText(newText) {
    setNotes((prevTabs) =>
      prevTabs.map((tab) => (tab.on ? { ...tab, text: newText } : tab)),
    );
  }
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
    <View style={Styles.container}>
      <Pressable
        onPress={saveNote}
        style={{
          padding: 10,
          backgroundColor: "#007bff",
          borderRadius: 5,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Save</Text>
      </Pressable>
      <TextInput
        style={Styles.input}
        placeholder="Start typing your story..."
        multiline={true}
        textAlignVertical="top"
        value={text}
        onChangeText={updateActiveTabText}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    fontSize: 16,
    width: "100%",
    height: "auto",
    lineHeight: 24,
  },
});
