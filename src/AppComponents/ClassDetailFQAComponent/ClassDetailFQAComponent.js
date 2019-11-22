import React, { Component } from "react";
import styled from "styled-components";
import data from "Data/qnasData";
import ClassDetailFQAItem from "./ClassDetailFQAItem";

export default class ClassDetailFQAComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    const { data } = this.state;
    const QnAItemList = data.map((el, index) => {
      return <ClassDetailFQAItem data={el} key={index} />;
    });
    return (
      <Container>
        <Frame>
          <Title>FQA</Title>
          {QnAItemList}
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
`;
