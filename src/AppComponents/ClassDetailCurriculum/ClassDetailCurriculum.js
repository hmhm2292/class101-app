import React, { Component } from "react";
import styled from "styled-components";
import data from "Data/curriCulum";
import CurriCulumItemInfo from "./CurriCulumItemInfo";

export default class ClassDetailCurriculum extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }
  onLayout = e => {
    this.props.getcurriCulumY(e.nativeEvent.layout.y); // 커리큘럼 컴포넌트의 절대위치값을 가져옵니다.
  };
  render() {
    const list = this.state.data.map((el, index) => {
      return <CurriCulumItemInfo info={el} key={index} />;
    });
    return (
      <Container onLayout={this.onLayout}>
        <CurriCulumFrame>
          <Title>커리큘럼</Title>
          <Desc>
            클래스를 신청하신 분들이 배우고 있는 커리큘럼입니다. 콘텐츠는 배우기
            쉽게 영상, 수업노트, 첨부파일로 구성돼있습니다
          </Desc>
          {list}
        </CurriCulumFrame>
      </Container>
    );
  }
}

const Container = styled.View`
  width: 100%;
  align-items: center;
`;
const CurriCulumFrame = styled.View`
  width: 90%;
`;
const Title = styled.Text`
  margin-top: 46px;
  font-size: 24;
  font-weight: bold;
  margin-bottom: 10;
`;

const Desc = styled.Text`
  width: 80%;
  margin-top: 16;
  margin-bottom: 16;
  font-size: 14;
  color: #3e4042;
  text-align: left;
`;
