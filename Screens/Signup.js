import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Signup = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 38, color: "#6C63FF", margin: 30 }}>Signup</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} style={styles.icon} />
        <TextInput placeholder="First Name" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} style={styles.icon} />
        <TextInput placeholder="Last Name" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} style={styles.icon} />
        <TextInput placeholder="Email" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} style={styles.icon} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} style={styles.icon} />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.pressableText}>
            Already have an account?Login
          </Text>
        </Pressable>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign up</Text>
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
    marginBottom: 20,
  },
  icon: {
    marginRight: 10, // Space between icon and text input
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 50,
    backgroundColor: "#6C63FF",
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  pressable: {
    marginBottom: 30,
  },
  pressableText: {
    marginLeft: 160,
    fontSize: 15,
    color: "#6C63FF",
    textDecorationLine: "underline",
  },
});

export default Signup;
