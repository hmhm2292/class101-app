import React from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import ClassAvailability from "./ClassAvailability";
import { thisExpression } from "@babel/types";

const dimensions = Dimensions.get("window");
const classImageWidth = Math.round((dimensions.width * 4.2) / 10);

const ClassContainer = styled.TouchableOpacity`
  flex-direction: column;
  height: 235;
  width: ${classImageWidth};
  margin-horizontal: 10;
  margin-top: 10;
`;

const ClassImageContainer = styled.View`
  flex-direction: row;
`;

const ClassImage = styled.Image`
  height: 116;
  width: 100%;
  border-radius: 5;
`;

const ClassLikeButton = styled.Image`
  position: absolute;
  top: 6;
  right: 10;
  z-index: 10;
  height: 18;
  width: 18;
`;

const ClassCategoryCreater = styled.Text`
  height: 16;
  font-size: 11;
  font-weight: 600;
  color: #858a8d;
  margin-top: 5;
`;

const ClassTitle = styled.Text`
  height: 40;
  margin-top: 2;
  font-size: 14;
  color: #3e4042;
`;

const HeartThumbsContainer = styled.View`
  height: 16;
  flex-direction: row;
  margin-top: 8;
  justify-content: space-between;
  padding-right: 40;
`;

const HeartContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const HeartImage = styled.Image`
  width: 12;
  height: 12;
  margin-right: 3;
  opacity: 0.7;
`;

const HeartCount = styled.Text`
  font-size: 11;
  font-weight: 600;
  color: #858a8d;
`;

const ThumbsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ThumbsImage = styled(HeartImage)``;

const ThumbsPercent = styled(HeartCount)``;

class ClassListDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDate: false,
      id: null
    };
  }

  componentDidMount() {
    this.checkOpenDate();
    this.setId();
  }

  setId = () => {
    this.setState({ id: this.props.classData._id });
  };

  checkOpenDate = () => {
    if (
      new Date(this.props.classData.willOpenAt).toISOString() >
      new Date().toISOString()
    ) {
      this.setState({ openDate: true }, () => {});
    }
  };

  onPress = () => {
    // console.log(this.state.id);
    // console.log(this.props.navigation.navigate("ClassDetail"));
    this.props.navigation.navigate("ClassDetail", {
      id: this.state.id
    });
  };

  render() {
    return (
      <View>
        <ClassContainer activeOpacity={1} onPress={this.onPress}>
          <ClassImageContainer>
            <ClassImage
              source={{
                uri: this.props.classData.imageUrl
              }}
            />
            <TouchableOpacity activeOpacity={0.1}>
              <ClassLikeButton
                source={{
                  uri:
                    "https://cdn4.iconfinder.com/data/icons/web-outline/164/17-512.png"
                }}
              />
            </TouchableOpacity>
          </ClassImageContainer>

          <ClassCategoryCreater>
            {this.props.classData.categoryCreater}
          </ClassCategoryCreater>
          <ClassTitle numberOfLines={2}>
            {this.props.classData.title}
          </ClassTitle>
          <HeartThumbsContainer>
            <HeartContainer>
              <HeartImage
                source={{
                  uri:
                    "https://cdn4.iconfinder.com/data/icons/vote-rewards-solid-style/24/vote-heart-512.png"
                }}
              />

              <HeartCount>{this.props.classData.favorites}</HeartCount>
            </HeartContainer>
            {this.props.classData.rate ? (
              <ThumbsContainer>
                <ThumbsImage
                  source={{
                    uri:
                      "https://cdn4.iconfinder.com/data/icons/vote-rewards-solid-style/24/vote-thumbs-up-256.png"
                  }}
                />
                <ThumbsPercent>{this.props.classData.rate}</ThumbsPercent>
              </ThumbsContainer>
            ) : null}
          </HeartThumbsContainer>
          {this.state.openDate ? (
            <ClassAvailability color="#fd7e14" width="90px">
              {new Date(
                this.props.classData.willOpenAt.slice(0, 10)
              ).getMonth() + 1}
              월
              {new Date(this.props.classData.willOpenAt.slice(0, 10)).getDate()}
              일부터 수강 가능
            </ClassAvailability>
          ) : (
            <ClassAvailability>바로 수강 가능</ClassAvailability>
          )}
        </ClassContainer>
      </View>
    );
  }
}

export default ClassListDetailComponent;
