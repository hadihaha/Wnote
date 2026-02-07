import { supabase } from "@/lib/supabase";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
function NotePad() {
  const [isUploading, setIsUploading] = useState(false);
  const [text, setText] = useState("");
  async function saveNoteToSupabase() {
    if (!text) return; // Don't upload empty text

    setIsUploading(true);
    const { error } = await supabase.from("notes").insert({
      note: text,
    });
    setIsUploading(false);
    if (error) {
      console.error(error);
      Alert.alert("Upload Failed", error.message);
    } else {
      Alert.alert("Success!", "Data uploaded to cloud.");
      setText("");
    }
  }
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <Pressable
          onPress={saveNoteToSupabase}
          disabled={isUploading}
          style={styles.button}
        >
          <Text>{isUploading ? "Uploading..." : "Save to Database"}</Text>
        </Pressable>
        <TextInput
          style={styles.input}
          placeholder="Start typing your story..."
          placeholderTextColor="#aaa"
          multiline={true}
          textAlignVertical="top"
          autoFocus={true}
          value={text}
          onChangeText={setText}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  keyboardContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
    padding: 20,
    fontSize: 18,
    color: "#333",
    lineHeight: 28,
  },
  button: {
    backgroundColor: "#007AFF",
    color: "#fff",
    paddingVertical: 12,
  },
});
