import React, { Component } from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import HTML from "react-native-render-html";
import styled from "styled-components";
import data from "Data/creatorData";

export default class ClassDetailCreatorInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: true,
      data: props.ownerUser
    };
  }

  handleTextClick = e => {
    this.setState({
      mode: !this.state.mode
    });
  };

  onLayout = e => {
    this.props.getOffSetY("CreatorInfo", e.nativeEvent.layout.y); // 커리큘럼 컴포넌트의 절대위치값을 가져옵니다.
  };
  render() {
    const htmlContent = this.state.data.content;
    return (
      <>
        <Container onLayout={this.onLayout}>
          <Frame>
            <TitleFrame>
              <Title>
                {`크리에이터\n`}
                <TitleName>{this.state.data.nickname}</TitleName>입니다
              </Title>
              <TitleImage
                source={{
                  uri: "https://class101.net/images/ic-profile-fog.png"
                }}
              ></TitleImage>
              <UserImage source={{ uri: this.state.data.photoUrl }}></UserImage>
            </TitleFrame>
            <View
              style={{
                height: this.state.mode ? 420 : "auto",
                overflow: "hidden"
              }}
            >
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
          </Frame>
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

const Frame = styled.View`
  width: 90%;
`;

const TitleFrame = styled.View`
  margin-top: 50;
  height: 92;
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled.Text`
  font-size: 24;
  color: #3e4042;
  font-weight: normal;
`;

const TitleName = styled.Text`
  font-size: 24;
  color: #3e4042;
  font-weight: bold;
`;

const TitleImage = styled.Image`
  position: absolute;
  right: 0;
  width: 88;
  height: 68;
`;

const UserImage = styled.Image`
  border-radius: 31;
  margin-right: 10;
  width: 62;
  height: 62;
`;

const styles = StyleSheet.create({
  img: {
    marginBottom: 20
  },
  p: {
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
  },
  html: {
    height: 420,
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
