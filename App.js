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

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isAddMode, setIsAddMode] = useState(false)
  const [listGoals, setListGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    if(goalTitle.length === 0){
      return;
    }
    setListGoals((listGoals) => [
      ...listGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setListGoals((listGoals) => {
      return listGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalInputHandler = () => {
    setIsAddMode(false)
  }

  return (
    <>
      <View style={styles.screen}>
        <Button title="Add new goal" onPress={() => setIsAddMode(true)}/>

        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancelGoal={cancelGoalInputHandler} />

        <FlatList
          data={listGoals}
          renderItem={(itemData) => (
            <GoalItem
              title={itemData.item.value}
              id={itemData.item.id}
              onDelete={removeGoalHandler}
            />
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
