import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
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
import BottomCTA from "AppComponents/BottomCTA";

const API = "http://10.58.1.226:3030/product/5c5d780974eabcfdafd39757";
export default class ClassDetailScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      classEnrolment: false,
      mode: "class",
      IntroSkills: 0,
      curriCulum: 0,
      PackageDesc: 0,
      CreatorInfo: 0
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
      });
  }

  handleClassState = () => {
    this.setState({
      classEnrolment: !this.state.classEnrolment
    });
    this.scrollView.scrollTo({
      y: 0
    });
  };

  handleComponentMode = mode => {
    const { IntroSkills, curriCulum, PackageDesc, CreatorInfo } = this.state;

    // 스크롤의 위치값 변경
    switch (mode) {
      case "class":
        this.scrollView.scrollTo({
          y: IntroSkills - getStatusBarHeight()
        });
        break;

      case "curriCulum":
        this.scrollView.scrollTo({
          y: curriCulum - getStatusBarHeight()
        });
        break;

      case "package":
        this.scrollView.scrollTo({
          y: PackageDesc - getStatusBarHeight()
        });
        break;
      case "creator":
        this.scrollView.scrollTo({
          y: CreatorInfo - getStatusBarHeight()
        });
    }
  };

  getOffSetY = (section, Value) => {
    // 각 컴포넌트의 위치값 가져오기
    this.setState({
      [section]: Value
    });
  };

  handleScroll = e => {
    const { IntroSkills, curriCulum, PackageDesc, CreatorInfo } = this.state;
    let scroll = e.nativeEvent.contentOffset.y;

    if (IntroSkills <= scroll && scroll <= curriCulum) {
      this.setState({
        mode: "class"
      });
    } else if (curriCulum <= scroll && scroll <= PackageDesc) {
      this.setState({
        mode: "curriCulum"
      });
    } else if (PackageDesc <= scroll && scroll <= CreatorInfo) {
      this.setState({
        mode: "package"
      });
    } else if (CreatorInfo < scroll) {
      this.setState({
        mode: "creator"
      });
    }
  };
  render() {
    const { data, classEnrolment, mode } = this.state;
    return data ? (
      <React.Fragment>
        <ScrollView
          stickyHeaderIndices={[1]} // 배열 안 숫자의 위치한 컴포넌트(ClassDetailListCompont)를 stiky로 만들어준다.
          showsVerticalScrollIndicator={false}
          ref={ref => (this.scrollView = ref)}
          onScroll={this.handleScroll}
        >
          <TopDetailInfoComponent class={classEnrolment} data={data} />
          <ClassDetailListComponent
            data={mode}
            handleComponentMode={this.handleComponentMode}
          />
          <ClassDetailStudentReview />

          {/* 클래스 소개 컴포넌트 */}
          <ClassDetailIntroSkills
            data={data.skills}
            getOffSetY={this.getOffSetY}
          />
          <ClassDetailSpecial />
          <ClassDetailExplain />
          <ClassDetailIntroHTML data={data.description} />
          {data.interviews ? (
            <ClassDetailCreatorInterView data={data.interviews} />
          ) : null}

          {/* 커리큘럼 컴포넌트 */}
          <ClassDetailCurriculum
            data={data.curriculum}
            getOffSetY={this.getOffSetY}
          />
          {data.recommendations ? (
            <ClassDetailForPeople data={data.recommendations} />
          ) : null}

          {/* 패키지 컴포넌트 */}
          {data.packageDescription ? (
            <ClassDetailPackageDesc
              data={data.packageDescription}
              getOffSetY={this.getOffSetY}
            />
          ) : null}

          {/* 크리에이터 컴포넌트 */}
          {data.ownerUser ? (
            <ClassDetailCreatorInfo
              getOffSetY={this.getOffSetY}
              ownerUser={data.ownerUser}
            />
          ) : null}
          {data.qnas ? <ClassDetailFQAComponent data={data.qnas} /> : null}
        </ScrollView>
        <BottomCTA handleClassState={this.handleClassState} />
      </React.Fragment>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight() // 기기마다 다른 상태바 높이값을 가져오기 위해
  }
});
