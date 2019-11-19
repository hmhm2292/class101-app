import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ClassListDetailComponent from "../../../AppComponents/ClassListDetailComponent/ClassListDetailComponent";

const Collections = props => {
  return (
    <View style={styles.Collections}>
      <TouchableOpacity style={styles.TitleContainer}>
        <View style={styles.TitleArrowGroup}>
          <Text style={styles.Title}>{props.collection.title}</Text>
          <Image
            style={styles.Arrow}
            source={{
              uri:
                "https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Right_arrow-512.png"
            }}
          />
        </View>

        <Text style={styles.Description}>{props.collection.description}</Text>
      </TouchableOpacity>

      <View style={styles.ListDetailComponent}>
        {props.collection.data.map(item => (
          <ClassListDetailComponent
            key={item._id}
            classData={item}
            navigation={props.navigation}
          />
        ))}
      </View>
    </View>
  );
};

export default Collections;

const styles = StyleSheet.create({
  Collections: {
    marginVertical: 35,
    marginHorizontal: 7
  },
  TitleContainer: {
    flexDirection: "column",
    marginLeft: 17
  },
  TitleArrowGroup: {
    flexDirection: "row",
    alignItems: "center"
  },
  Title: {
    fontSize: 18,
    marginBottom: 3
  },
  Arrow: {
    marginLeft: 3,
    width: 13,
    height: 13,
    opacity: 0.6
  },
  Description: {
    fontSize: 12,
    opacity: 0.3
  },
  ListDetailComponent: {
    justifyContent: "flex-start",
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center"
  }
});
