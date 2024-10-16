import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Checkbox from "expo-checkbox";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

const Home = () => {
  const [isChecked, setChecked] = useState(false);
  const [task, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "This is a sample task",
      priority: "high",
      dueDate: new Date(),
      isChecked: false,
    },

    {
      id: 2,
      title: "Task 1",
      description: "This is a sample task",
      priority: "high",
      dueDate: new Date(),
      isChecked: false,
    },

    {
      id: 3,
      title: "Task 1",
      description: "This is a sample task",
      priority: "high",
      dueDate: new Date(),
      isChecked: false,
    },

    {
      id: 4,
      title: "Task 1",
      description: "This is a sample task",
      priority: "high",
      dueDate: new Date(),
      isChecked: false,
    },
    {
      id: 5,
      title: "Task 1",
      description: "This is a sample task",
      priority: "high",
      dueDate: new Date(),
      isChecked: false,
    },
    {
      id: 6,
      title: "Task 1",
      description: "This is a sample task",
      priority: "high",
      dueDate: new Date(),
      isChecked: false,
    },
    {
      id: 7,
      title: "Task 1",
      description: "This is a sample task",
      priority: "high",
      dueDate: new Date(),
      isChecked: false,
    },
    {
      id: 8,
      title: "Task 1",
      description: "This is a sample task",
      priority: "high",
      dueDate: new Date(),
      isChecked: false,
    },
    {
      id: 9,
      title: "Task 1",
      description: "This is a sample task",
      priority: "high",
      dueDate: new Date(),
      checked: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks((prevTask) => prevTask.filter((item) => item.id !== id));
  };

  const renderRightActions = () => {
    return (
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="create-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
    );
  };

  const renderLeftActions = (id) => {
    return (
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteTask(id)}
        >
          <Ionicons name="trash-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>
    );
  };
  const toggleCheckbox = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons
          name="search-outline"
          size={30}
          style={styles.icon}
          color="#ccc"
        />
        <TextInput style={styles.input} placeholder="Search..." />
      </View>

      <GestureHandlerRootView style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text>No tasks available</Text>}
          data={task}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Swipeable
              renderRightActions={renderRightActions}
              renderLeftActions={() => renderLeftActions(item.id)}
            >
              <View style={styles.tasksContainer}>
                <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                <Text>{item.description}</Text>
                <Text>Priority: {item.priority}</Text>
                <Text>Due Date: {item.dueDate.toLocaleDateString()}</Text>
                <Checkbox
                  style={styles.checkbox}
                  value={item.checked}
                  onValueChange={() => toggleCheckbox(item.id)}
                  color={isChecked ? "#ffffff" : "#6C63FF"}
                />
              </View>
            </Swipeable>
          )}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "80%",
    marginTop: 50,
    marginBottom: 30,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  tasksContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: 350,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 60, // Matching task container height
    borderRadius: 8,
    marginVertical: 10,
  },
  editButton: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 60, // Matching task container height
    borderRadius: 8,
    marginVertical: 10,
  },
  actionText: {
    color: "#fff",
    fontWeight: "bold",
  },
  checkbox: {
    justifyContent: "center",
    alignSelf: "flex-end",
    position: "absolute",
    right: 30,
    top: 40,
  },
});

export default Home;
