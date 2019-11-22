import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainStackNavigator from "../src/Navigation/MainStackNavigator.js";

import WelcomeStackNavigator from "../src/Navigation/WelcomeStackNavigator.js";
import * as SecureStore from "expo-secure-store";

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      // Bottom: BottomTabNavigator,
      WelcomeScreen: WelcomeStackNavigator,
      MainStackNavigator: MainStackNavigator
    },
    { initialRouteName: "WelcomeScreen" }
  )
);
