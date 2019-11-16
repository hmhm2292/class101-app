import React, { Component } from "react";
import { Image, Text, StyleSheet, View } from "react-native";

export default class SpecialContentItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>{data.title}</Text>
          <Image
            style={styles.image}
            source={{
              uri: data.image
            }}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.text}>
            {data.text} <Text style={{ fontWeight: "bold" }}>{data.bold}</Text>
            {data.text2}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center"
  },
  title: {
    marginTop: 10,
    flex: 2,
    height: 56,
    fontSize: 20,
    color: "#3E4042",
    fontWeight: "bold"
  },
  image: {
    flex: 1,
    width: 132,
    height: 64
  },
  text: {
    fontSize: 14,
    color: "#324042"
  }
});
