import React from "react";
import { View, Dimensions } from "react-native";
import styled from "styled-components/native";

import ClassAvailability from "./ClassAvailability";

const dimensions = Dimensions.get("window");
const classImageWidth = Math.round((dimensions.width * 6.5) / 16);

const ClassContainer = styled.TouchableOpacity`
  flex-direction: column;
  height: 235;
  width: ${classImageWidth};
  margin-left: 24;
`;

const ClassImage = styled.Image`
  height: 116;
  width: 100%;
  border-radius: 5;
`;

const ClassLikeButton = styled.TouchableOpacity`
  position: absolute;
  right: 10;
  top: 6;
  z-index: 10;
  height: 18;
  width: 18;
`;

const ClassCategoryCreater = styled.Text`
  height: 16;
  font-size: 11;
  font-weight: 600;
  color: #858a8d;
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

const ClassListDetailComponent = props => {
  return (
    <ClassContainer>
      <View>
        <ClassImage
          source={{
            uri: props.classData.imageUrl
          }}
        />
        <ClassLikeButton
          source={{
            uri:
              "https://cdn4.iconfinder.com/data/icons/web-outline/164/17-512.png"
          }}
        />
      </View>

      <ClassCategoryCreater>
        {props.classData.categoryCreater}
      </ClassCategoryCreater>
      <ClassTitle numberOfLines={2}>{props.classData.title}</ClassTitle>
      <HeartThumbsContainer>
        <HeartContainer>
          <HeartImage
            source={{
              uri:
                "https://cdn4.iconfinder.com/data/icons/vote-rewards-solid-style/24/vote-heart-512.png"
            }}
          />

          <HeartCount>{props.classData.likeCount}</HeartCount>
        </HeartContainer>

        <ThumbsContainer>
          <ThumbsImage
            source={{
              uri:
                "https://cdn4.iconfinder.com/data/icons/vote-rewards-solid-style/24/vote-thumbs-up-256.png"
            }}
          />
          <ThumbsPercent>{props.classData.rating}</ThumbsPercent>
        </ThumbsContainer>
      </HeartThumbsContainer>
      <ClassAvailability>바로 수강 가능</ClassAvailability>
      <ClassAvailability color="#fd7e14"></ClassAvailability>
    </ClassContainer>
  );
};

export default ClassListDetailComponent;
