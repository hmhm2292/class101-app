import React, { Component } from "react";
import styled from "styled-components";

export default class ClassDetailFQAItem extends Component {
  state = { buttonMode: true };

  handleButtonClick = () => {
    this.setState({
      buttonMode: !this.state.buttonMode
    });
  };
  render() {
    const open = "https://class101.net/images/ic-chevron-bottom-gray.png"; // 오픈 이미지 주소
    const close = "https://class101.net/images/ic-bar-gray.png";
    const { question, answer } = this.props.data;
    const { buttonMode } = this.state;
    return (
      <>
        <QnAFrame>
          <Qblock>Q.</Qblock>
          <Question>{question}</Question>
          <Touchable onPress={this.handleButtonClick}>
            <OpenImage source={{ uri: buttonMode ? open : close }}></OpenImage>
          </Touchable>
        </QnAFrame>
        {buttonMode ? null : <AnswerText>{answer}</AnswerText>}
      </>
    );
  }
}

const QnAFrame = styled.View`
  flex-direction: row;
  margin-top: 32px;
`;
const Qblock = styled.Text`
  width: 7%;
  font-size: 16;
  font-weight: bold;
`;

const Question = styled.Text`
  width: 86%;
  font-size: 16;
  font-style: normal;
`;

const OpenImage = styled.Image`
  width: 30;
  height: 28;
`;

const Touchable = styled.TouchableOpacity`
  width: 7%;
  height: 28;
`;

const AnswerText = styled.Text`
  font-size: 14;
  font-weight: normal;
  margin-top: 8px;
  color: #616568;
`;
