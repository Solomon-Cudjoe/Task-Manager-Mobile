import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Tasks Screen</Text>
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

export default Home;
