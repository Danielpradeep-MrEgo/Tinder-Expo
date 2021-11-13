import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import tw from "tailwind-rn";
import { AuthProvider } from "./Hooks/useAuth";
import StackNavigator from "./StackNavigator";
import { LogBox } from "react-native";

export default function App() {
  // LogBox.ignoreLogs();
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
