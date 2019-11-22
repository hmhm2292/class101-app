import React, { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import HTML from "react-native-render-html";

export default class ClassDetailIntroHTML extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    // console.log(this.props.data);
    const htmlContent = this.state.data;
    return (
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <View style={{ width: "90%" }}>
          <HTML
            tagsStyles={{
              span: styles.span,
              h4: styles.h4,
              h3: styles.h3,
              strong: styles.strong,
              sub: styles.sub,
              li: styles.li,
              p: styles.p,
              iframe: styles.iframe,
              img: styles.img
            }}
            baseFontStyle={{
              fontSize: 15
            }}
            html={htmlContent}
            imagesMaxWidth={(Dimensions.get("window").width * 90) / 100}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    marginBottom: 20
  },
  p: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 15,
    margin: 3
  },
  h4: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10
  },
  h3: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10
  },
  strong: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  span: {
    flexWrap: "wrap"
  },
  sub: {
    fontSize: 9
  },
  li: {
    fontSize: 16
  },
  iframe: {
    width: (Dimensions.get("window").width * 90) / 100
  }
});
