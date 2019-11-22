import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ClassListScreen from "../AppScreens/ClassListScreen/ClassListScreen";
import LinksScreen from "../../screens/LinksScreen";
import { createStackNavigator } from "react-navigation";
import ClassDetailScreen from "../AppScreens/ClassDetailScreen/ClassDetailScreen";

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: ClassListScreen,
    navigationOptions: {
      title: "홈"
    }
  },
  ClassDetail: {
    screen: ClassDetailScreen,
    navigationOptions: {
      title: "클라스"
    }
  }
});

const HomeScreenBottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStackNavigator,
    navigationOptions: {
      title: "홈",
      tabBarIcon: () => (
        <MaterialCommunityIcons name={"home-outline"} size={30} />
      )
    }
  },
  MyAccount: {
    screen: LinksScreen,
    navigationOptions: {
      title: "마이페이지",
      tabBarIcon: () => (
        <MaterialCommunityIcons name={"account-outline"} size={30} />
      )
    }
  }
});

export default HomeScreenBottomTabNavigator;
