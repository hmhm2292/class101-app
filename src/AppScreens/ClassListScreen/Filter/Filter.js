import React from "react";
import Carousel from "react-native-snap-carousel";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";

import FilterButton from "./FilterButton/FilterButton";

const dimensions = Dimensions.get("window");
const sliderWidth = dimensions.width;
const buttonWidth = Math.round((dimensions.width * 3) / 16) + 20;

const Filter = props => {
  return (
    <View style={styles.Filter}>
      <Text style={styles.FilterTitle}>무엇을 찾으시나요?</Text>
      <Carousel
        sliderWidth={sliderWidth}
        itemWidth={buttonWidth}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        firstItem={0}
        contentContainerCustomStyle={{
          overflow: "hidden",
          marginHorizontal: 24,
          width: buttonWidth * 10.2
        }}
        horizontal={true}
        data={props.filterCategory}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <FilterButton category={item} />}
      />
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  Filter: {
    marginBottom: 30
  },
  FilterTitle: {
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 24
  }
});
