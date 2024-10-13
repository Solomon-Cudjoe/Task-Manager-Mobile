import React from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Home = () => {
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
    marginHorizontal: 40,
    marginVertical: 60,
  },
  icon: {
    marginRight: 10, // Space between icon and text input
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default Home;
