import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Animated,
  Image,
  ScrollView
} from "react-native";
import adData from "./AdvertisementMockData";

const dimensions = Dimensions.get("window");
const sliderWidth = dimensions.width;
const adImageWidth = Math.round((dimensions.width * 9) / 16);

class Advertisement extends Component {
  scrollRef = React.createRef();
  state = {
    selectedIndex: 0,
    data: {
      advertisement: adData
    }
  };

  handleInterval = () => {
    this.setState(
      prev => ({
        selectedIndex:
          prev.selectedIndex === this.state.data.advertisement.length - 1
            ? 0
            : prev.selectedIndex + 1
      }),
      () => {
        this.scrollRef.current.scrollTo({
          animated: true,
          y: 0,
          x: sliderWidth * this.state.selectedIndex
        });
      }
    );
  };

  sliderInterval = () => {
    this.intervalId = setInterval(this.handleInterval, 5000);
  };

  componentDidMount() {
    this.sliderInterval();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  setSelectedIndex = event => {
    //width of the viewSize
    const viewSize = event.nativeEvent.layoutMeasurement.width;

    // current position of the view
    const contentOffset = event.nativeEvent.contentOffset.x;

    const selectedIndex = Math.floor(contentOffset / viewSize);

    this.setState({ selectedIndex: selectedIndex }, () => {});
  };

  render() {
    return (
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
        >
          {this.state.data.advertisement.map((data, i) => (
            <View key={i} style={styles.Advertisement}>
              <View
                style={{
                  backgroundColor: data.backgroundColor,
                  height: 288
                }}
              >
                <Text style={styles.Title}>{data.title}</Text>
                <Text style={styles.Description}>{data.description}</Text>
              </View>
              <Image
                style={styles.PromotionImage}
                source={{ uri: data.imageUrl }}
              />
            </View>
          ))}
        </ScrollView>
        <View style={styles.whiteCircleBar}>
          {this.state.data.advertisement.map((data, i) => (
            <View
              key={data.id}
              style={[
                styles.whiteCircle,
                {
                  opacity: i === this.state.selectedIndex ? 0.3 : 1
                }
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
}

export default Advertisement;

const styles = StyleSheet.create({
  Advertisement: {
    width: sliderWidth
  },
  Title: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    marginTop: 25,
    marginBottom: 10,
    marginLeft: 24,
    height: 70
  },
  Description: {
    fontSize: 12,
    color: "white",
    lineHeight: 20,
    marginHorizontal: 24
  },
  PromotionImage: {
    position: "absolute",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    resizeMode: "contain",
    bottom: 0,

    width: adImageWidth,
    height: 160,
    alignItems: "baseline"
  },
  whiteCircleBar: {
    position: "absolute",
    bottom: 10,
    height: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "white"
  }
});
