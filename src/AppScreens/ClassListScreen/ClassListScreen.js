import React from "react";
import { Dimensions } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";

import Theme from "./Theme/Theme";
import Filter from "./Filter/Filter";
import Collections from "./Collections/Collections";

import Advertisement from "./Advertisement/Advertisement";
import Promotion from "./Promotion/Promotion";
// import promoData from "./PromotionMockData";
// import themeData from "./ThemeMockData";
// import filterData from "./FilterMockData";
// import collectionData from "./CollectionsMockData";

const ipAddress = "http://10.58.1.226:3030";

const screenHeight = Math.round(Dimensions.get("window").height);

class ClassListScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      promotion: [],
      theme: [],
      filter: [],
      collection: [],
      page: 1,
      next: true,
      isLoading: false
    };
  }

  componentDidMount() {
    this.fetchCategory();
    this.fetchPromotion();
    this.fetchTheme();
    this.fetchCollection();
  }

  fetchCategory = () => {
    fetch(`${ipAddress}/category`)
      .then(response => response.json())
      .then(response => {
        this.setState({ filter: response.category });
      });
  };

  fetchPromotion = () => {
    fetch(`${ipAddress}/banner/promotion`)
      .then(response => response.json())
      .then(response => {
        this.setState({ promotion: response.promotion });
      });
  };

  fetchTheme = () => {
    fetch(`${ipAddress}/banner/theme`)
      .then(response => response.json())
      .then(response => {
        this.setState({ theme: response });
      });
  };

  fetchCollection = () => {
    fetch(`${ipAddress}/collection?page=${this.state.page}&limit=3`)
      .then(response => response.json())
      .then(response => {
        if (!response[0].next) {
          this.setState({
            next: false,
            collection: this.state.collection.concat(response),
            isLoading: false
          });
        } else {
          this.setState({
            collection: this.state.collection.concat(response),
            page: response[0].next.page,
            isLoading: false
          });
        }
      });
  };

  handleLoadMore = () => {
    if (this.state.next) {
      this.setState({ isLoading: true });
      this.fetchCollection();
    }
  };

  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return layoutMeasurement.height + contentOffset.y > contentSize.height - 1;
  };

  render() {
    // console.log(this.state.theme);
    return (
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        onMomentumScrollEnd={({ nativeEvent }) => {
          if (this.isCloseToBottom(nativeEvent)) {
            this.handleLoadMore();
          }
        }}
      >
        <Promotion promotionList={this.state.promotion} />
        <FlatList
          data={this.state.theme}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Theme theme={item} navigation={this.props.navigation} />
          )}
        />
        <Filter filterCategory={this.state.filter} />
        <Advertisement />
        <FlatList
          data={this.state.collection}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <Collections collection={item} navigation={this.props.navigation} />
          )}
        />
        <View style={styles.loader}>
          {this.state.isLoading ? <ActivityIndicator size="small" /> : null}
        </View>
      </ScrollView>
    );
  }
}

export default ClassListScreen;

const styles = StyleSheet.create({
  loader: {
    alignItems: "center"
  }
});
