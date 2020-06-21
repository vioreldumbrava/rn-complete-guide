import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Icon } from "react-native-elements";
import { SocialIcon } from "react-native-elements";
import GoalItem from './components/GoalItem'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [listGoals, setListGoals] = useState([]);

  function goalInputHandler(text) {
    setEnteredGoal(text);
  }

  const addGoalHandler = () => {
    setListGoals((listGoals) => [...listGoals, {uid: Math.random().toString() , value: enteredGoal}]);
  };
  const mycolor = "red";
  return (
    <>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Course Goal"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <Button title="ADD" onPress={addGoalHandler} />
          <Icon
            raised
            name="heartbeat"
            type="font-awesome"
            color="#f50"
            onPress={() => console.log("hello")}
          />
        </View>

        <FlatList
          data={listGoals}
          renderItem={(itemData) => (
            <GoalItem title={itemData.item.value} />
          )}
          keyExtractor={(item, index) => item.uid}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
