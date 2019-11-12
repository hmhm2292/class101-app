import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class ClassDetailExplainBox extends Component {
  render() {
    return (
      <View style={styles.box}>
        <View style={styles.dayTextBox}>
          <Text style={styles.numberText}>{this.props.data.count}</Text>
          <Text style={styles.weekText}>{this.props.data.countText}</Text>
        </View>
        <View style={{ height: 16, alignItems: "center" }}>
          <Text style={styles.explainText}>{this.props.data.explain}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#F8F8F9",
    height: 104,
    marginRight: 4,
    marginLeft: 4,
    paddingTop: 12
  },
  dayTextBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 56
  },
  numberText: {
    color: "#2A8FB4",
    fontSize: 48,
    marginRight: 4
  },
  weekText: {
    fontSize: 24,
    marginTop: 18,
    marginBottom: 6,
    color: "#3E4042"
  },
  explainText: {
    color: "#3E4042",
    fontSize: 11
  }
});
