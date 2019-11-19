import React from "react";

import { createStackNavigator } from "react-navigation";
import HomeScreenBottomTabNavigator from "./HomeScreenBottomTabNavigator.js.js";

const MainStackNavigator = createStackNavigator({
  // LoginScreen: { screen: LoginScreen },
  // SignupScreen: { screen: SignupScreen },
  HomeScreenBottomTabNavigator: {
    screen: HomeScreenBottomTabNavigator,
    navigationOptions: {
      header: null
    }
  }
});

export default MainStackNavigator;
