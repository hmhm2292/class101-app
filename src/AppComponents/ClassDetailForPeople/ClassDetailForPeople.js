import React, { Component } from "react";
import styled from "styled-components";

export default class ClassDetailForPeople extends Component {
  render() {
    const recommendations = [
      "디지털로 아날로그 느낌을 내고 싶으신 분",
      "일상적이고 예쁜 사진 찍는 걸 좋아하시는 분",
      "평범하지 않은 완성도 있어 보이는 그림을 그리고 싶으셨던 분",
      "밤이나 낮의 색채 표현을 잘 하고 싶으셨던 분"
    ];

    const list = recommendations.map((el, index) => {
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
