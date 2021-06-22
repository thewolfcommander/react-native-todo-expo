import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <View style={styles.titleContainer}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
        </View>

        <View style={styles.items}>
          {/* This is where the tasks will go */}
          <Task text={"This is task 1"} />
          <Task text={"This is task 2"} />
          <Task text={"This is task 3"} />
          <Task text={"This is task 4"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4d9d1",
  },

  tasksWrapper: {
    paddingTop: 20,
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
});
