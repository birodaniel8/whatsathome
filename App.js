import React from 'react'
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from 'expo-app-loading';
import { Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat";

import HomeScreen from "./screens/HomeScreen"
import ItemScreen from "./screens/ItemScreen"
import CategoryScreen from "./screens/CategoryScreen"


// Create a Stack Navigator and set the global screen settings:
const Stack = createStackNavigator();
const globalScreenOptions = {
  headerShown: false,
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Item" component={ItemScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}