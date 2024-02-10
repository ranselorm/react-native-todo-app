import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import Sandbox from "./components/Sandbox";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "read a book", key: "3" },
    { text: "watch a show", key: "4" },
  ]);

  function pressHandler(key) {
    return setTodos(todos.filter((todo) => todo.key !== key));
  }
  function addItem(todo) {
    if (todo.length > 3) {
      setTodos([
        { text: todo, key: Math.floor(Math.random() * 100).toString() },
        ...todos,
      ]);
    } else {
      Alert.alert("Oops", "Your todo must be more than 3 characters", [
        {
          text: "Understood",
          onPress: () => console.log("alert closed"),
        },
      ]);
    }
  }

  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addItem={addItem} />
          {todos.length >= 1 ? (
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          ) : (
            <View>
              <Text>No todos yet? Click here to add one</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
