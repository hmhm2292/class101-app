import React, { Component } from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import styled from "styled-components";
import HTML from "react-native-render-html";

export default class ClassDetailPackageDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: true,
      data: props.data
    };
  }

  handleTextClick = e => {
    this.setState({
      mode: !this.state.mode
    });
  };
  onLayout = e => {
    this.props.getOffSetY("PackageDesc", e.nativeEvent.layout.y); // 커리큘럼 컴포넌트의 절대위치값을 가져옵니다.
  };
  render() {
    const htmlContent = this.state.data;
    return (
      <>
        <Container onLayout={this.onLayout}>
          <View style={{ width: "90%" }}>
            <View
              style={{
                weight: "90%",
                height: this.state.mode ? 420 : "auto",
                marginBottom: 50,
                overflow: "hidden"
              }}
            >
              <Title>패키지 소개</Title>
              <HTML
                tagsStyles={{
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
        </Container>
        <Text style={styles.TextButton} onPress={this.handleTextClick}>
          {this.state.mode ? "열기" : "닫기"}
        </Text>
      </>
    );
  }
}

const Container = styled.View`
  width: 100%;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24;
  font-weight: bold;
  margin-top: 35;
`;

const styles = StyleSheet.create({
  img: {
    marginBottom: 20
  },
  html: {
    height: 500,
    overflow: "hidden"
  },

  TextButton: {
    width: 70,
    height: 30,
    zIndex: 10,
    bottom: 0,
    fontSize: 14,
    left: "5%",
    color: "#FD7E14"
  }
});
