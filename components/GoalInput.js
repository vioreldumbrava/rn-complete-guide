import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Icon } from "react-native-elements";
import { SocialIcon } from "react-native-elements";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(text) {
    setEnteredGoal(text);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button
              style={styles.cancelButton}
              color="red"
              title="Cancel"
              onPress={props.onCancelGoal}
            />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
        <Icon
          raised
          name="heartbeat"
          type="font-awesome"
          color="#f50"
          onPress={() => console.log("hello")}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  button:{
    width: "40%"
  },
  cancelButton: {
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default GoalInput;
