import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItems = ({ item, presshandler }) => {
  return (
    <TouchableOpacity onPress={() => presshandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={24} color="#333" />
        <Text>{item.text}</Text>
      </View>
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
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default TodoItems;
