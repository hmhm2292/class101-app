import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import ClassDetailListItem from "./ClassDetailListItem";
import data from "Data/classDetailData";

export default class ClassDetailListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: props.data
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ mode: nextProps.data });
  }
  handleMode = mode => {
    this.setState({ mode });
    this.props.handleComponentMode(mode);
  };
  render() {
    const { mode } = this.state;
    return (
      <ScrollView style={styles.container} horizontal={true}>
        <ClassDetailListItem
          title="클래스소개"
          active={mode === "class"}
          selectMode={() => {
            this.handleMode("class");
          }}
        />
        <ClassDetailListItem
          title="커리큘럼"
          active={mode === "curriCulum"}
          selectMode={() => {
            this.handleMode("curriCulum");
          }}
        />
        <ClassDetailListItem
          title="패키지"
          active={mode === "package"}
          selectMode={() => {
            this.handleMode("package");
          }}
        />
        <ClassDetailListItem
          title="혜택"
          active={mode === "benefit"}
          selectMode={() => {
            this.handleMode("benefit");
          }}
        />
        <ClassDetailListItem
          title="크리에이터"
          active={mode === "creator"}
          selectMode={() => {
            this.handleMode("creator");
          }}
        />
        <ClassDetailListItem
          title="커뮤니티"
          active={mode === "community"}
          selectMode={() => {
            this.handleMode("community");
          }}
        />
        <ClassDetailListItem
          title="추천"
          active={mode === "recommendation"}
          selectMode={() => {
            this.handleMode("recommendation");
          }}
        />
        <ClassDetailListItem
          title="환불 정책"
          active={mode === "refund"}
          selectMode={() => {
            this.handleMode("refund");
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 24,
    paddingLeft: 24,
    height: 47,
    backgroundColor: "white"
  }
});
