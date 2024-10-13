import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

const Calendars = () => {
  const [selected, setSelected] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 28 }}>Calendar</Text>

        <Calendar
          style={{
            // borderWidth: 1,
            borderColor: "gray",
            height: 350,
            width: 390,
          }}
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "orange",
            },
          }}
        />
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

export default Calendars;
