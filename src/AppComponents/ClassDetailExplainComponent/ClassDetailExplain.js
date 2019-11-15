import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ClassDetailExplainBox from "./ClassDetailExplainBox";

export default class ClassDetailExplain extends Component {
  render() {
    const DATA = [
      {
        level: "초급자",
        class: "인물 드로잉"
      },
      { count: 20, countText: "주", explain: "수강기간" },

      { count: 32, countText: "개", explain: "전체 콘텐츠" }
    ];
    return (
      <View style={styles.container}>
        <View style={{ width: "90%" }}>
          <Text style={styles.text}>
            <Text style={styles.text2}>{DATA[0].level}</Text>분들을 위한
          </Text>
          <Text style={styles.text2}>{DATA[0].class}</Text>
          <Text style={styles.text}>클래스입니다.</Text>

          <View
            style={{ flexDirection: "row", marginBottom: 10, marginTop: 20 }}
          >
            <ClassDetailExplainBox data={DATA[1]} />
            <ClassDetailExplainBox data={DATA[2]} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  text: {
    fontSize: 24,
    color: "#3E4042",
    fontWeight: "bold"
  },
  text2: {
    fontSize: 24,
    color: "#3E4042",
    fontWeight: "bold",
    color: "#2A8FB4"
  },
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
