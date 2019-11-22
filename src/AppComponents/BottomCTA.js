import React, { Component } from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

export default class BottomCTA extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.props.handleClassState();
  };
  render() {
    return (
      <Container>
        <ImageFrame
          source={{
            uri: "https://en.pimg.jp/034/470/349/1/34470349.jpg"
          }}
        ></ImageFrame>
        <ImageFrame
          source={{
            uri:
              "https://st2.depositphotos.com/6489488/9322/v/950/depositphotos_93229654-stock-illustration-love-heart-icon.jpg"
          }}
        ></ImageFrame>
        <ButtonFrame>
          <Touchable onPress={this.handleClick}>
            <ClassText>클래스 신청하기</ClassText>
          </Touchable>
        </ButtonFrame>
      </Container>
    );
  }
}

const Container = styled.View`
  width: 100%;
  height: 72;
  padding: 12px 12px 12px 0px;
  flex-direction: row;
`;

const ImageFrame = styled.Image`
  width: 15%;
  height: 100%;
  background-color: yellow;
`;

const ButtonFrame = styled.View`
  width: 70%;
  height: 100%;
  background-color: gray;
`;

const Touchable = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  background-color: #ff9228;
  text-align: center;
  justify-content: center;
`;

const ClassText = styled.Text`
  color: white;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;
