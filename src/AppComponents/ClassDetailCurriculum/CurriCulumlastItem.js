import React, { Component } from "react";
import { Dimensions, Text } from "react-native";
import styled from "styled-components";

export default class CurriCulumlastItem extends Component {
  render() {
    return (
      <EpisodeFrame>
        <EpiIndex>{this.props.data.episode}</EpiIndex>
        <EpiTitle>{this.props.data.title}</EpiTitle>
        {this.props.data.isFree ? (
          <EpiFree>무료공개</EpiFree>
        ) : (
          <NotEpiFree></NotEpiFree>
        )}
      </EpisodeFrame>
    );
  }
}

const dimensions = Dimensions.get("window");
const textWidth = Math.round((dimensions.width * 90) / 10 - 1000);

const EpiIndex = styled.Text`
  width: 20px;
  height: 20px;
  margin-right: 16px;
  background-color: #edeff0;
  border-radius: 10px;
  font-size: 11px;
  text-align: center;
  align-items: center;
`;
const EpiTitle = styled.Text`
  width: 70%;
  font-size: 14px;
`;
const EpiFree = styled.Text`
  border-radius: 3px;
  width: 63;
  height: 20;
  font-size: 9;
  padding-top: 4;
  padding-bottom: 4;
  padding-right: 5;
  padding-left: 5;
  background-color: black;
  color: white;
  text-align: center;
  align-items: center;
`;

const NotEpiFree = styled.Text`
  width: 63;
  height: 20;
`;

const EpisodeFrame = styled.View`
  width: 100%;
  margin-top: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
