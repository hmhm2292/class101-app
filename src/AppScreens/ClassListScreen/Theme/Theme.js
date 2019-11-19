import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Carousel from "react-native-snap-carousel";
import ClassListDetailComponent from "../../../AppComponents/ClassListDetailComponent/ClassListDetailComponent";

const dimensions = Dimensions.get("window");
const sliderWidth = dimensions.width;
const itemWidth = Math.round((dimensions.width * 4.7) / 10);

const Theme = props => {
  return (
    <View style={styles.Theme}>
      <TouchableOpacity style={styles.TitleContainer}>
        <Text style={styles.Title}>{props.theme.title}</Text>
        <Image
          style={styles.Arrow}
          source={{
            uri:
              "https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Right_arrow-512.png"
          }}
        />
      </TouchableOpacity>

      <View style={styles.ListDetailComponent}>
        <Carousel
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          activeSlideAlignment={"start"}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          firstItem={0}
          contentContainerCustomStyle={{
            overflow: "hidden",
            marginLeft: 8,
            width: itemWidth * props.theme.data.length + 8
          }}
          horizontal={true}
          data={props.theme.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ClassListDetailComponent
              classData={item}
              navigation={props.navigation}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Theme;

const styles = StyleSheet.create({
  Theme: {
    marginBottom: 40
  },
  TitleContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  Title: {
    fontSize: 18,
    marginLeft: 24,
    marginBottom: 1
  },
  Arrow: {
    marginLeft: 3,
    width: 13,
    height: 13,
    opacity: 0.6
  },
  ListDetailComponent: {
    marginTop: 5
  }
});
