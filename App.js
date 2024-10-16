import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

import Ionicons from "@expo/vector-icons/Ionicons";

import Home from "./Screens/Home";
import TaskForm from "./Screens/TaskForm";
import Notifications from "./Screens/Notifications";
import Calendar from "./Screens/Calendar";
import AppStack from "./AppStack";

export default function App() {
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Simulate some async tasks like loading fonts, making API calls, etc.
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen once resources are ready
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#6C63FF" style="light" />

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelPosition: "below-icon",
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#6C63FF",
            headerShown: false,
            tabBarHideOnKeyboard: true,
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="list-outline" size={26} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={Calendar}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons
                  name="calendar-number-outline"
                  size={26}
                  color={color}
                />
              ),
            }}
          />

          <Tab.Screen
            name="New Task"
            component={TaskForm}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons
                  name="add-circle"
                  size={60}
                  color={color}
                  style={{ position: "absolute", bottom: 15 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Stack"
            component={AppStack}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="person-outline" size={26} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
              tabBarBadge: 3,
              tabBarBadgeStyle: {
                color: "white",
                backgroundColor: "#6C63FF",
              },
              tabBarIcon: ({ color }) => (
                <Ionicons
                  name="notifications-outline"
                  size={26}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
