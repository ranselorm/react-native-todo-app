import { useState } from "react";
import { TextInput, StyleSheet, Pressable, View, Text } from "react-native";

export default function AddTodo({ addItem }) {
  const [text, setText] = useState("");

  function changeHandler(val) {
    setText(val);
  }

  function submit() {
    addItem(text);
    // setText("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={text}
      />

      {/* <Button title="Add" onPress={submit} color={"coral"} /> */}
      <Pressable style={styles.button} onPress={submit}>
        <Text style={styles.text}>Add Item</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 16,
    marginTop: 10,
    paddingHorizontal: 8,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "coral",
    padding: 8,
    marginTop: 16,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
