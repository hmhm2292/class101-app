import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import TopDetailInfoComponent from "AppComponents/ClassDetailTopComponent";
import ClassDetailListComponent from "AppComponents/ClassDetailListComponent";
import ClassDetailStudentReview from "AppComponents/ClassDetailStudentReview";
import ClassDetailIntroHTML from "AppComponents/ClassDetailIntroHTML";
import ClassDetailSpecial from "AppComponents/ClassDetailSpecialComponent";
import ClassDetailExplain from "AppComponents/ClassDetailExplainComponent";
import ClassDetailCreatorInterView from "AppComponents/ClassDetailCreatorInterView";
import ClassDetailCurriculum from "AppComponents/ClassDetailCurriculum";
import ClassDetailIntroSkills from "AppComponents/ClassDetailIntroduction/ClassDetailIntroSkills";
import ClassDetailForPeople from "AppComponents/ClassDetailForPeople";
import ClassDetailPackageDesc from "AppComponents/ClassDetailPackageDesc";
import ClassDetailCreatorInfo from "AppComponents/ClassDetailCreatorInfo";
import ClassDetailFQAComponent from "AppComponents/ClassDetailFQAComponent";

export default class ClassDetailScreen extends Component {
  state = {
    getClasslayoutValue: "",
    getcurriCulumValue: "",
    getPackageValue: ""
  };
  handleComponentMode = mode => {
    const {
      getClasslayoutValue,
      getcurriCulumValue,
      getPackageValue
    } = this.state;

    if (mode === "class") {
      this.scrollView.scrollTo({
        // 스크롤의 위치값 변경
        y: getClasslayoutValue - getStatusBarHeight()
      });
    } else if (mode === "curriCulum") {
      this.scrollView.scrollTo({
        y: getcurriCulumValue - getStatusBarHeight()
      });
    } else if (mode === "package") {
      this.scrollView.scrollTo({
        y: getPackageValue - getStatusBarHeight()
      });
    }
  };

  getclassIntroY = Value => {
    // 각 컴포넌트의 위치값 가져오기
    this.setState({
      getClasslayoutValue: Value
    });
  };
  getcurriCulumY = Value => {
    this.setState({
      getcurriCulumValue: Value
    });
  };
  getPackageY = Value => {
    this.setState({
      getPackageValue: Value
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          stickyHeaderIndices={[1]} // 배열 안 숫자의 위치한 컴포넌트(ClassDetailListCompont)를 stiky로 만들어준다.
          showsVerticalScrollIndicator={false}
          ref={ref => (this.scrollView = ref)}
        >
          <TopDetailInfoComponent />
          <ClassDetailListComponent
            handleComponentMode={this.handleComponentMode}
          />
          <ClassDetailStudentReview />

          {/* 클래스 소개 컴포넌트 */}
          <ClassDetailIntroSkills getclassIntroY={this.getclassIntroY} />
          <ClassDetailSpecial />
          <ClassDetailExplain />
          <ClassDetailIntroHTML />
          <ClassDetailCreatorInterView />

          {/* 커리큘럼 컴포넌트 */}
          <ClassDetailCurriculum getcurriCulumY={this.getcurriCulumY} />
          <ClassDetailForPeople />

          {/* 패키지 컴포넌트 */}
          <ClassDetailPackageDesc getPackageY={this.getPackageY} />

          {/* 크리에이터 컴포넌트 */}
          <ClassDetailCreatorInfo />

          {/* FQA 컴포넌트 */}
          <ClassDetailFQAComponent />
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
