import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class WelcomeScreen extends React.Component {
  gotoLogin = () => {
    this.props.navigation.navigate("LoginScreen");
  };
  render() {
    return (
      <View style={{ justifyContent: "center", marginTop: 100 }}>
        <Text>Welcome</Text>
        <TouchableOpacity onPress={this.gotoLogin}>
          <Text>Start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default WelcomeScreen;
