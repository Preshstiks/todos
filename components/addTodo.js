import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add todo"
        color="coral"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
});
export default AddTodo;
