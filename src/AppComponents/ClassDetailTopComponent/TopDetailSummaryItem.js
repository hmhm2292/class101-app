import React, { Component } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default class DetailSummaryOption extends Component {
  render() {
    const { title, desc } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: "https://class101.net/images/im-play-gray.png" }}
        />
        <Text style={styles.OptionTitle}>{title}</Text>
        <Text style={styles.OptionDesc}>{desc}</Text>
      </View>
    );
  }
}

const dimensions = Dimensions.get("window");
const widthVlaue = (dimensions.width * 90) / 100 / 4; // 4 대신에 배열 크기만큼 받아오기
const styles = StyleSheet.create({
  container: {
    width: widthVlaue,
    height: 88,
    marginTop: 6,
    marginBottom: 6,
    alignItems: "center", // 가로로 가운데 정렬
    justifyContent: "center", // 세로로 가운데 정렬
  },
  image: {
    width: 32,
    height: 32
  },
  OptionTitle: {
    fontSize: 11,
    color: "#858a8d"
  },
  OptionDesc: {
    fontSize: 14,
    color: "#3e4042"
  }
});
