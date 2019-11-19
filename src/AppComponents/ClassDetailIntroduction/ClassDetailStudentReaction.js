import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import TopDetailSummaryItem from "./TopDetailSummaryItem";
import data from "Data/classDetailData";

export default class ClassDetailStudentReaction extends Component {
  state = {
    data: data.studentReaction
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal={true}
          data={this.state.data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <TopDetailSummaryItem title={item.title} desc={item.desc} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 16,
    width: "100%",
    paddingBottom: 18,
    paddingTop: 18,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#edeff0",
    borderBottomColor: "#edeff0"
  }
});
