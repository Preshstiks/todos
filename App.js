import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import TodoItems from "./components/todoitems";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy coffee", key: "1" },
    { text: "Create an app", key: "2" },
    { text: "Play on the switch", key: "3" },
  ]);

  const presshandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length <= 3) {
      Alert.alert("Oops!", "Please Enter more than 3 text", [
        { text: "Close", onPress: () => console.log("alert closed") },
      ]);
    } else {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItems presshandler={presshandler} item={item} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
