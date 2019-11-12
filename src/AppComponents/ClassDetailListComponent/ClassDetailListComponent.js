import React, { Component } from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import ClassDetailListItem from "./ClassDetailListItem";
import data from "Data/classDetailData";

export default class ClassDetailListComponent extends Component {
  state = {
    data: data.listData
  };
  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => (
            <ClassDetailListItem title={item.title} lineMode={item.mode} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 24,
    paddingLeft: 24,
    height: 47
  }
});
