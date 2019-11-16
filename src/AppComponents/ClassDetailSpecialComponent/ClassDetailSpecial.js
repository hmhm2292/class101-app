import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import SpecialContentItem from "./SpecialContentItem";

export default class DetailSummaryOption extends Component {
  render() {
    const DATA = [
      {
        title: "언제 어디서든\n수강할 수 있어요",
        image: "https://class101.net/images/im-content-device.png",
        text: "휴대폰, 태블릿, PC 어디서든 수강 기간 내에 온라인으로",
        text2: "할 수 있어요.",
        bold: "무제한 반복 수강"
      },
      {
        title: "준비물까지\n보내드릴게요",
        image: "https://class101.net/images/im-content-kitbox.png",
        text: "수강에 필요한 모든 준비물이 포함된 키트를",
        text2: "으로 간편하게 받아보세요",
        bold: "무료배송"
      }
    ];
    return (
      <View style={styles.container}>
        <View style={{ width: "90%" }}>
          <Text style={styles.title}>{`클래스101만의\n특별함`}</Text>
          <View style={styles.contentContainer}>
            <SpecialContentItem data={DATA[0]} />
            <SpecialContentItem data={DATA[1]} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 448
  },
  title: {
    fontSize: 24,
    color: "#3E4042",
    fontWeight: "bold",
    marginTop: 40
  },
  contentContainer: {
    marginBottom: 48
  }
});
