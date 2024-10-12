import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";

const TaskForm = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.taskHeader}>Add New Task</Text>
      <View style={styles.inputContainer}>
        {/* <Ionicons name="person-outline" size={20} style={styles.icon} /> */}
        <TextInput
          placeholder="Title"
          placeholderTextColor="#ccc"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        {/* <Ionicons name="person-outline" size={20} style={styles.icon} /> */}
        <TextInput
          placeholder="Description"
          placeholderTextColor="#ccc"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        {/* <Ionicons name="person-outline" size={20} style={styles.icon} /> */}
        <TextInput
          placeholder="Due Date"
          placeholderTextColor="#ccc"
          style={styles.input}
        />
      </View>

      {/* <Button title="Add Task" color="#6C63FF" /> */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "80%",
    marginBottom: 30,
  },
  icon: {
    marginRight: 10, // Space between icon and text input
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  taskHeader: {
    fontSize: 24,
    color: "#6C63FF",
    fontWeight: "bold",
    marginBottom: 40,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
    backgroundColor: "#6C63FF",
    borderRadius: 10,
    marginLeft: -250,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TaskForm;
