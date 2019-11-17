import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ClassListDetailComponent from "../../../AppComponents/ClassListDetailComponent/ClassListDetailComponent";

const Collections = props => {
  return (
    <View style={styles.Collections}>
      <Text style={styles.Title}>{props.collection.title}</Text>

      <View style={styles.ListDetailComponent}>
        {props.collection.classes.map(item => (
          <ClassListDetailComponent key={item.id} classData={item} />
        ))}
      </View>
    </View>
  );
};

export default Collections;

const styles = StyleSheet.create({
  Collections: {
    marginVertical: 35
  },
  Title: {
    fontSize: 18,
    marginLeft: 24,
    marginBottom: 1
  },
  ListDetailComponent: {
    justifyContent: "flex-start",
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
