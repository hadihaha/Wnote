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

  return (
    <View style={Styles.container}>
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
