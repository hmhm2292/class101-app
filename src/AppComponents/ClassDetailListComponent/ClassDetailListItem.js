import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default class ClassDetailListItem extends Component {
  state = {
    Activy: ""
  };
  render() {
    const { title, selectMode, active } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={selectMode}>
        <Text value={title} style={styles.listText}>
          {title}
        </Text>
        {active ? <View style={styles.listLine}></View> : null}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 24,
    paddingTop: 14,
    paddingBottom: 13,
    height: 47
  },
  listText: {
    color: "#3E4042",
    fontSize: 14
  },
  listLine: {
    marginTop: 9,
    height: 3,
    backgroundColor: "#3E4042"
  }
});
