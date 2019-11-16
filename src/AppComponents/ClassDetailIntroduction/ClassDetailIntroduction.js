import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ClassDetailIntroSkills from "./ClassDetailIntroSkills";
import data from "Data/classDetailData";

export default class ClassDetailIntroduction extends Component {
  constructor() {
    super();

    this.state = {
      data: data.skills
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ClassDetailIntroSkills data={this.state.data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#EDEFF0",
    alignItems: "center",
    marginBottom: 48
  }
});
