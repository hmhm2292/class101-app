import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import ClassDetailReviewItem from "./ClassDetailReviewItem";
import data from "Data/classDetailData";

export default class ClassDetailStudentReview extends Component {
  constructor() {
    super();

    this.state = {
      data: data.studentReaction
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewTitle}>수강생분들의 반응</Text>
          <Text style={styles.reviewDesc}>
            온라인 클래스를 즐기며 올린 사용자 분들의 반응입니다. 총
            <Text style={styles.reviewCount}>172개</Text>의 수강생의 실제
            반응들을 확인해보세요.
          </Text>
          <FlatList
            horizontal={true}
            data={this.state.data}
            renderItem={({ item, index }) => (
              <ClassDetailReviewItem
                id={item.id}
                photoUrl={item.photoUrl}
                nickName={item.user.nickName}
                userphotoUrl={item.user.photoUrl}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 16,
    marginBottom: 8
  },
  reviewContainer: {
    width: "90%"
  },
  reviewTitle: {
    fontSize: 24,
    color: "#3E4042",
    fontWeight: "bold"
  },
  reviewDesc: {
    fontSize: 14,
    color: "#3E4042",
    marginTop: 10,
    marginBottom: 16
  },
  reviewCount: {
    fontWeight: "bold"
  }
});
