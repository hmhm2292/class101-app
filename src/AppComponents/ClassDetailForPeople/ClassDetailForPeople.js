import React, { Component } from "react";
import styled from "styled-components";

export default class ClassDetailForPeople extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data
    };
  }
  render() {
    const list = this.state.data.map((el, index) => {
      return <ClassForSectionDesc key={index}>{el}</ClassForSectionDesc>;
    });
    return (
      <Container>
        <ClassForSectionTitle>
          이런 분들을 위한 클래스에요.
        </ClassForSectionTitle>
        {list}
      </Container>
    );
  }
}

const Container = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 48px 24px 24px;
  background-color: #f8f8f9;
`;

const ClassForSectionTitle = styled.Text`
  margin-bottom: 24;
  font-size: 16;
  color: #3e4042;
`;

const ClassForSectionDesc = styled.Text`
  margin-bottom: 24;
  font-size: 16;
  color: #3e4042;
  font-weight: bold;
`;
