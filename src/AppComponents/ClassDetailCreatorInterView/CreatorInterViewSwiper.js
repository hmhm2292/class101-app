import React, { Component } from "react";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import CreatorInterViewItem from "./CreatorInterViewItem";

const CreatorInterViewSwiper = props => {
  const list = props.data.map((el, index) => {
    return <CreatorInterViewItem data={el} key={index} />;
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
