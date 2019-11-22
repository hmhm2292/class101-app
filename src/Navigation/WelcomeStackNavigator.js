import React from "react";

import { createStackNavigator } from "react-navigation";
import WelcomeScreen from "../AppScreens/WelcomeScreen/WelcomeScreen";
import LoginScreen from "../AppScreens/LoginScreen/LoginScreen";
import SignupScreen from "../AppScreens/SignupScreen/SignupScreen";

const WelcomeStackNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  SignupScreen: {
    screen: SignupScreen,
    navigationOptions: {
      title: "회원가입"
    }
  }
});

export default WelcomeStackNavigator;
