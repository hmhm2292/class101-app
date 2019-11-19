import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import BottomTabNavigator from "../src/Navigation/HomeScreenBottomTabNavigator.js";
import MainStackNavigator from "../src/Navigation/MainStackNavigator.js";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Bottom: BottomTabNavigator,
    MainStackNavigator: MainStackNavigator
  })
);
