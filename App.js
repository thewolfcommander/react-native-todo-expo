import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    // TODO: HANDLE EMPTY TASKS
    if (task === null) {
      alert("You are creating an empty task. Please write something in it.");
    } else {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View
      style={
        Platform.OS === "ios" ? styles.iosContainer : styles.androidContainer
      }
    >
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <View style={styles.titleContainer}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
        </View>

        <View style={styles.items}>
          {/* This is where the tasks will go */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Write a task section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  iosContainer: {
    flex: 1,
    marginVertical: 40,
    backgroundColor: "#d4d9d1",
  },
  androidContainer: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#d4d9d1",
  },

  tasksWrapper: {
    paddingTop: 0,
  },
  titleContainer: {
    backgroundColor: "#ebeaed",
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  writeTaskWrapper: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#ebeaed",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#000",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: 300,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 40,
  },
});
