import React from "react";
import styled from "styled-components";

const CreatorInterViewItem = props => {
  return (
    <SwiperFrame>
      <TextQ>Q.</TextQ>
      <TextQuestion>{props.question}</TextQuestion>
      <TextAnswer>{props.data.answer}</TextAnswer>
    </SwiperFrame>
  );
};
export default CreatorInterViewItem;

const SwiperFrame = styled.View`
  min-height: 300;
  padding-left: 24;
  padding-right: 24;
  padding-top: 24;
  padding-bottom: 24;
  text-align: left;
  margin-right: 16px;
  border-radius: 3px;
  border-width: 0.3;
`;

const TextQ = styled.Text`
  font-size: 16;
  font-weight: bold;
  margin-bottom: 4px;
`;
const TextQuestion = styled.Text`
  font-size: 16px;
  color: #3e4042;
  font-weight: normal;
  margin-bottom: 12px;
`;

const TextAnswer = styled.Text`
  font-weight: normal;
  font-size: 13;
  color: #858a8d;
`;
