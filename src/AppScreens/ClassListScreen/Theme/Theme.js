import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import ClassListDetailComponent from "../../../AppComponents/ClassListDetailComponent/ClassListDetailComponent";

const Theme = props => {
  return (
    <View style={styles.Theme}>
      <Text style={styles.Title}>{props.theme.title}</Text>

      <View style={styles.ListDetailComponent}>
        <FlatList
          horizontal={true}
          data={props.theme.classes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ClassListDetailComponent classData={item} />
          )}
        />
      </View>
    </View>
  );
};

export default Theme;

const styles = StyleSheet.create({
  Theme: {
    justifyContent: "center",
    marginBottom: 40
  },
  Title: {
    fontSize: 18,
    marginLeft: 24,
    marginBottom: 1
  },
  ListDetailComponent: {
    marginTop: 15
  }
});
