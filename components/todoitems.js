import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TodoItems = ({ item, presshandler }) => {
  return (
    <TouchableOpacity onPress={() => presshandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});

export default TodoItems;
