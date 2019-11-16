import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class ClassDetailReviewItem extends Component {
  render() {
    return (
      <View style={styles.reviewImageContainer}>
        <Image
          style={styles.reviewImage}
          source={{
            uri: this.props.photoUrl
          }}
        ></Image>
        <View
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "row"
          }}
        >
          <Image
            style={styles.reviewWriterImage}
            source={{
              uri: this.props.userphotoUrl
            }}
          ></Image>
          <Text style={styles.reviewWriterName}>{this.props.nickName}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reviewImageContainer: {
    width: 180,
    height: 208,
    marginRight: 16,
    marginBottom: 24,
    backgroundColor: "white"
  },
  reviewImage: {
    width: "100%",
    height: "90%"
  },
  reviewWriterImage: {
    width: 18,
    height: 18,
    borderRadius: 9
  },
  reviewWriterName: {
    fontSize: 11,
    color: "#3E4042"
  }
});
