import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";

const Notifications = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Notifications Screen</Text>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
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
});

export default Notifications;
