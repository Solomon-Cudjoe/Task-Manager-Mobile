import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

const Calendars = () => {
  const [selected, setSelected] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Calendar Screen</Text>

        <Calendar
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
