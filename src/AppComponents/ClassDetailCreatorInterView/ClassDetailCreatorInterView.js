import React, { Component } from "react";
import styled from "styled-components";

export default class ClassDetailCreatorInterView extends Component {
  render() {
    return (
      <Container>
        <CreatorFrame>
          <Title>{`크리에이터\n인터뷰`}</Title>
        </CreatorFrame>
      </Container>
    );
  }
}

const Container = styled.View`
  height: 525;
  width: 100%;
  align-items: center;
`;
const CreatorFrame = styled.View`
  width: 90%;
  margin-right: -4;
  margin-left: -4;
  background-color: yellowgreen;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #3e4042;
  margin-top: 50;
`;
