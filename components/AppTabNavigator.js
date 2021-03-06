import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  Image
} from "react-native";
import DonateScreen from "../screens/DonateScreen";
import RequestersScreen from "../screens/RequestersScreen";

export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks: {
    screen: DonateScreen,
    navigationOptions: {
      tabBarIcon: <Image source={require("../assets/q.png")} />,
      tabBarLabel: "Donate Books",
    },
  },
  BookRequest: {
    screen: RequestersScreen,
    navigationOptions: {
      tabBarIcon: <Image source={require("../assets/request-list.png")} />,
      tabBarLabel: " Book Request",
    },
  },
});
