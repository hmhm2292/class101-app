import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  Animated,
  ScrollView
} from "react-native";

const dimensions = Dimensions.get("window");
const sliderWidth = dimensions.width;
const promoImageWidth = Math.round((dimensions.width * 15) / 16);

class Promotion extends Component {
  scrollRef = React.createRef();
  constructor() {
    super();
    this.state = {
      fadeValue: new Animated.Value(0),
      selectedIndex: 0
    };
  }

  // _start = () => {
  //   Animated.timing(this.state.fadeValue, {
  //     toValue: 1,
  //     duration: 100
  //   }).start();
  // };

  handleInterval = () => {
    this.setState(
      prev => ({
        selectedIndex:
          prev.selectedIndex === this.props.promotionList.length - 1
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
    setInterval(this.handleInterval, 5000);
  };

  componentDidMount() {
    this.sliderInterval();
  }

  componentWillUnmount() {
    clearInterval(this.sliderInterval);
  }

  setSelectedIndex = event => {
    //width of the viewSize
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    // current position of the view
    const contentOffset = event.nativeEvent.contentOffset.x;

    const selectedIndex = Math.floor(contentOffset / viewSize);
    this.setState({
      selectedIndex: selectedIndex
    });
  };

  render() {
    return (
      <View>
        <ScrollView
          // onScrollStartDrag={this._start}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
          style={{
            height: 400,
            width: sliderWidth
          }}
        >
          {this.props.promotionList.map((promotion, i) => (
            <View key={i} style={{ width: sliderWidth }}>
              <View
                style={{
                  backgroundColor: this.props.promotionList[
                    this.state.selectedIndex
                  ].backgroundColor,
                  height: 345
                }}
              >
                <Animated.View
                // style={{
                //   opacity:
                //     i === this.state.selectedIndex ? this.state.fadeValue : 1
                // }}
                >
                  <Text style={styles.Title}>{promotion.title}</Text>
                  <Text style={styles.Description}>
                    {promotion.description}
                  </Text>
                </Animated.View>
              </View>
              <Image
                style={styles.PromotionImage}
                source={{ uri: promotion.imageUrl }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Promotion;

const styles = StyleSheet.create({
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
    opacity: 0.7,
    lineHeight: 20,
    marginLeft: 24
  },
  PromotionImage: {
    top: 175,
    position: "absolute",
    zIndex: 3,
    width: promoImageWidth,
    height: 190,
    alignSelf: "center",
    borderRadius: 5,
    marginBottom: 70
  }
});
