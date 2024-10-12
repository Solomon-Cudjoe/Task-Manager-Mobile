import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

const Calendar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Calendar Screen</Text>
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

export default Calendar;
