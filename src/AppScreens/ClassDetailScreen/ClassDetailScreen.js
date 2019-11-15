import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import TopDetailInfoComponent from "AppComponents/ClassDetailTopComponent";
import ClassDetailListComponent from "AppComponents/ClassDetailListComponent";
import ClassDetailStudentReview from "AppComponents/ClassDetailStudentReview";
import ClassDetailIntroduction from "AppComponents/ClassDetailIntroduction";
import ClassDetailIntroHTML from "AppComponents/ClassDetailIntroHTML";
import ClassDetailSpecial from "AppComponents/ClassDetailSpecialComponent";
import ClassDetailExplain from "AppComponents/ClassDetailExplainComponent";
import ClassDetailCreatorInterView from "AppComponents/ClassDetailCreatorInterView";
import ClassDetailCurriculum from "../../AppComponents/ClassDetailCurriculum";

export default class ClassDetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TopDetailInfoComponent />
          <ClassDetailListComponent />
          <ClassDetailStudentReview />
          <ClassDetailIntroduction />
          <ClassDetailSpecial />
          <ClassDetailExplain />
          <ClassDetailIntroHTML />
          <ClassDetailCreatorInterView />
          <ClassDetailCurriculum />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight() // 기기마다 다른 상태바 높이값을 가져오기 위해
  }
});
