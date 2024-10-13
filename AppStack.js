import React from "react";
import { StyleSheet, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Profile from "./Screens/Profile";

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Signup" component={Signup} options={{}} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default AppStack;
