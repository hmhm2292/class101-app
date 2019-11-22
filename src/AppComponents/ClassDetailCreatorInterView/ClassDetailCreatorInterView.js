import React, { Component } from "react";
import styled from "styled-components";
import CreatorInterViewSwiper from "./CreatorInterViewSwiper";
import data from "Data/creatorQnAData";

export default class ClassDetailCreatorInterView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data
    };
  }
  render() {
    const { data } = this.state;
    return (
      <Container>
        <CreatorFrame>
          <Title>{`크리에이터\n인터뷰`}</Title>
          <CreatorInterViewSwiper data={data} />
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
  flex: 1;
  border-top-width: 1;
  border-top-color: #edeff0;
  border-bottom-width: 1;
  border-bottom-color: #edeff0;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #3e4042;
  margin-top: 48px;
  margin-bottom: 16px;
`;
