import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import Theme from "./Theme/Theme";
import Filter from "./Filter/Filter";
import Collections from "./Collections/Collections";

import Advertisement from "./Advertisement/Advertisement";
import Promotion from "./Promotion/Promotion";
import promoData from "./PromotionMockData";
import themeData from "./ThemeMockData";
import filterData from "./FilterMockData";
import collectionData from "./CollectionsMockData";

class ClassListScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      promotion: promoData.heroBanner,
      theme: themeData,
      filter: filterData.category,
      collection: collectionData
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <ScrollView>
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
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Collections collection={item} />}
          />
        </ScrollView>
      </View>
    );
  }
}

ClassListScreen.navigationOptions = {
  title: "홈"
};

export default ClassListScreen;
