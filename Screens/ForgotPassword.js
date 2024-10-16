import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ForgotPassword = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, color: "#6C63FF", margin: 30 }}>
        Enter your email to reset your password
      </Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} style={styles.icon} />
        <TextInput placeholder="Email" style={styles.input} />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <Text style={styles.buttonText}>Send Email</Text>
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
    alignItems: "center",
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
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ForgotPassword;
