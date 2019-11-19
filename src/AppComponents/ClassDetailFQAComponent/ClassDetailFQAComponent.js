import React, { Component } from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

export default class ClassDetailFQAComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Frame>
          <Title>FQA</Title>
        </Frame>
      </Container>
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

const Title = styled.Text`
  font-size: 24;
  font-weight: bold;
  margin-top: 40;
  margin-bottom: 16;
`;
