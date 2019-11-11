import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";

const dimensions = Dimensions.get("window");
const buttonWidth = Math.round((dimensions.width * 3) / 16);

const FilterButton = props => {
  return (
    <View>
      <TouchableOpacity style={styles.FilterButton}>
        <Image
          source={{ uri: props.category.iconUrl }}
          style={styles.FilterButtonIcon}
        />
        <Text style={styles.FilterButtonText}>{props.category.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  FilterButton: {
    width: buttonWidth,
    height: 72,
    backgroundColor: "#F8F8F9",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25
  },
  FilterButtonIcon: {
    width: buttonWidth,
    height: 32,
    resizeMode: "contain"
  },
  FilterButtonText: {
    fontSize: 9,
    textAlignVertical: "center",
    textAlign: "center"
  }
});
