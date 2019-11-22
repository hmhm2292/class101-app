import React, { Component } from "react";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import CreatorInterViewItem from "./CreatorInterViewItem";

const CreatorInterViewSwiper = props => {
  const question = [
    "이 클래스만의 매력을 어필해주세요!",
    "이 클래스를 특별히 추천하고 싶은 분들이 있나요?",
    "자랑하고 싶은 이 클래스만의 장점을 말해주세요!"
  ];
  const list = props.data.map((el, index) => {
    return (
      <CreatorInterViewItem data={el} key={index} question={question[index]} />
    );
  });
  return (
    <SwiperContainer>
      <Swiper loop={false} showsPagination={false}>
        {list}
      </Swiper>
    </SwiperContainer>
  );
};

export default CreatorInterViewSwiper;
const SwiperContainer = styled.View`
  width: 80%;
  height: 348;
  margin-left: 8;
  margin-right: 8;
`;
