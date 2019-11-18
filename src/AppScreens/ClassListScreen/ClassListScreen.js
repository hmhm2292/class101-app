import React from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import * as WebBrowser from "expo-web-browser";
import Theme from "./Theme/Theme";
import Filter from "./Filter/Filter";
import Collections from "./Collections/Collections";

import Advertisement from "./Advertisement/Advertisement";
import Promotion from "./Promotion/Promotion";
// import promoData from "./PromotionMockData";
// import themeData from "./ThemeMockData";
// import filterData from "./FilterMockData";
// import collectionData from "./CollectionsMockData";

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
      next: true
    };
  }

  static navigationOptions = {
    title: "홈"
  };

  componentDidMount() {
    this.fetchCategory();
    this.fetchPromotion();
    this.fetchTheme();
    this.fetchCollection();
  }

  fetchCategory = () => {
    fetch(`http:10.58.1.133:3030/category`)
      .then(response => response.json())
      .then(response => {
        this.setState({ filter: response.filter.category });
      });
  };

  fetchPromotion = () => {
    fetch(`http:10.58.1.133:3030/banner/promotion`)
      .then(response => response.json())
      .then(response => {
        this.setState({ promotion: response.promotion });
      });
  };

  fetchTheme = () => {
    fetch(`http:10.58.1.133:3030/banner/theme`)
      .then(response => response.json())
      .then(response => {
        this.setState({ theme: response });
      });
  };

  fetchCollection = () => {
    fetch(`http:10.58.1.133:3030/collection?page=${this.state.page}&limit=3`)
      .then(response => response.json())
      .then(response => {
        if (!response[0].next) {
          this.setState({
            next: false,
            collection: this.state.collection.concat(response)
          });
        } else {
          this.setState({
            collection: this.state.collection.concat(response),
            page: response[0].next.page
          });
        }
      });
  };

  handleLoadMore = () => {
    if (this.state.next) {
      this.fetchCollection();
    }
  };

  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 10
    );
  };

  render() {
    console.log(this.state.page);
    return (
      <View>
        <ScrollView
          onScroll={({ nativeEvent }) => {
            console.log(nativeEvent);
            if (this.isCloseToBottom(nativeEvent)) {
              this.handleLoadMore();
            }
          }}
        >
          <Promotion promotionList={this.state.promotion} />
          <FlatList
            data={this.state.theme}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Theme theme={item} />}
          />
          <Filter filterCategory={this.state.filter} />
          <Advertisement />
          <FlatList
            data={this.state.collection}
            keyExtractor={item => item._id}
            renderItem={({ item }) => <Collections collection={item} />}
          />
        </ScrollView>
      </View>
    );
  }
}

export default ClassListScreen;
