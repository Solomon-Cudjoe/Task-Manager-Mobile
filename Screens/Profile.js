import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  const logoutHandler = () => {
    console.log("Pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name="person" size={60} color="#ccc" />
      </View>

      <Pressable style={styles.logoutBtn} onPress={logoutHandler}>
        <Ionicons
          name="exit"
          style={{ marginHorizontal: 10 }}
          size={20}
          color="white"
        />
        <Text style={{ fontSize: 18, fontWeight: "700", color: "white" }}>
          Logout
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 150,
    marginVertical: 60,
  },
  logoutBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#6C63FF",
    marginHorizontal: 150,
    marginBottom: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: "40%",
  },
});

export default Profile;
