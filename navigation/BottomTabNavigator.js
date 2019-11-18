import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";

import classListScreen from "../src/AppScreens/ClassListScreen/ClassListScreen";
import LinksScreen from "../screens/LinksScreen";

const BottomTabNavigator = createBottomTabNavigator({
  One: classListScreen,
  Two: LinksScreen
});

export default BottomTabNavigator;
