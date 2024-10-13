import React from "react";
import { StyleSheet, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Screens/Login";
import Signup from "./Screens/Signup";

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} options={{}} />
    <Stack.Screen name="Signup" component={Signup} options={{}} />
  </Stack.Navigator>;
};

const styles = StyleSheet.create({});

export default AppStack;
