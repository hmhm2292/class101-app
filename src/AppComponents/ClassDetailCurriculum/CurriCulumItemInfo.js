import React, { Component } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import CurriCulumlastItem from "./CurriCulumlastItem";

export default class CurriCulumItemInfo extends Component {
  render() {
    // console.log("=-======", this.props.info);
    const list = this.props.info.missions.map((el, index) => {
      return <CurriCulumlastItem data={el} key={index} />;
    });
    return (
      <Container>
        <ImageContainer
          source={{
            uri: this.props.info.imageUrls[0]
          }}
        />
        <Title>
          {this.props.info.subtitle}
          {"  "}
          {this.props.info.title}
        </Title>
        <EpisodeContainer>{list}</EpisodeContainer>
      </Container>
    );
  }
}

const dimensions = Dimensions.get("window");
const imageWidth = (dimensions.width * 90) / 100;
const imageHeight = Math.round((imageWidth * 9) / 16);

const Container = styled.View`
  width: ${imageWidth};
`;

const ImageContainer = styled.Image`
  width: 100%;
  height: ${imageHeight};
  margin-top: 30;
`;

const Title = styled.Text`
  margin-top: 30;
  width: 100%;
  font-size: 20px;
  color: #858a8d;
`;

const EpisodeContainer = styled.View`
  width: 100%;
`;
