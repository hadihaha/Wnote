import { supabase } from "../lib/supabase";
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
function Pad({ notes, setNotes }) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(notes[0].text || "");
  }, [notes[0].text]);
  const saveNote = async () => {
    const { data, error } = await supabase
      .from("notes")
      .upsert({
        note_id: notes[0].nId === "" ? null : notes[0].nId, // If this is null, a new note is made. If it has a value, it updates.
        note: text, // Put your text into the 'content' column
      })
      .select() // Ask Supabase to send the saved data back
      .single(); // We only expect one row back

    if (error) {
      console.error("Save failed:", error.message);
    } else if (data) {
      // This stores the whole row {id, content, user_id, created_at} in your state
      setNotes(data);
      console.log("Note saved and stored in object:", data.id);
    }
  };
  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.input}
        placeholder="Start typing your story..."
        multiline={true}
        textAlignVertical="top"
        value={text}
        onChangeText={setText}
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
    widtht: "100%",
    height: "auto",
    lineHeight: 24,
  },
});
export default Pad;
