import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const TaskForm = () => {
  const [priority, setPriority] = useState("high");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowPicker(false); // Close the picker after selection
  };

  // Format date to display it in the TextInput
  const getFormattedDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero-based
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.taskHeader}>Add New Task</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Title"
          placeholderTextColor="#ccc"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Description"
          placeholderTextColor="#ccc"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <View>
          {showPicker && (
            <DateTimePicker
              mode="date"
              display="spinner"
              value={date}
              onChange={onChange}
              minimumDate={Date.now()}
              placeholderText="Select a date"
            />
          )}
        </View>
        {/* Show the formatted date in the TextInput */}
        {!showPicker && (
          <Pressable onPress={toggleDatePicker} style={styles.input}>
            <TextInput
              placeholderText="Due Date"
              placeholderTextColor="#ccc"
              editable={false}
              value={getFormattedDate(date)} // Display formatted date
              onPressIn={toggleDatePicker}
            />
          </Pressable>
        )}
      </View>

      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={priority}
          onValueChange={(itemValue) => setPriority(itemValue)}
        >
          <Picker.Item label="High" value="high" style={styles.pickerItem} />
          <Picker.Item
            label="Medium"
            value="medium"
            style={styles.pickerItem}
          />
          <Picker.Item label="Low" value="low" style={styles.pickerItem} />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
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
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#C3C0FA",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "80%",
    marginBottom: 30,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#6C63FF",
  },
  taskHeader: {
    fontSize: 24,
    color: "#6C63FF",
    fontWeight: "bold",
    marginBottom: 40,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 50,
    backgroundColor: "#6C63FF",
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#C3C0FA",
    borderRadius: 8,
    backgroundColor: "white",
    width: "80%",
    height: 40,
    justifyContent: "center",
    marginBottom: 30,
  },
  pickerItem: {
    fontSize: 16,
    height: 50,
    color: "#6C63FF",
  },
});

export default TaskForm;
