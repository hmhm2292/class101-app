import React, { Component } from "react";
import { Image, Dimensions, StyleSheet, Text, View } from "react-native";
import TopDetailPriceComponent from "./TopDetailPriceComponent";
import TopDetailSummaryOption from "./TopDetailSummaryOption";
import TopDetailProductInfoTable from "./TopDetailProductInfoTable";

export default class DetailInfoComponent extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.InfoImage}
          source={{
            uri:
              "https://cdn.class101.net/images/ff19aed5-d756-480a-ae5b-3e7a15d2bcc8/1024xauto@2x"
          }}
        />
        <View style={styles.InfoContainer}>
          <View style={styles.InfoFrame}>
            <Text style={styles.CreatorName}>By.엘리</Text>
            <Text style={styles.CreatorTitle}>
              따뜻함으로 가득 채운 한 장, 엘리와 함께하는 색연필 드로잉
            </Text>
            <View style={styles.CreatorLabelContainer}>
              <Text style={styles.CreatorLabel}>미술</Text>
              <Text style={styles.CreatorLabel}>바로 수강가능</Text>
            </View>
            <TopDetailPriceComponent />
            <TopDetailSummaryOption />
            <TopDetailProductInfoTable />
          </View>
        </View>
      </View>
    );
  }
}

const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignItems: "center"
  },
  InfoImage: {
    width: imageWidth,
    height: imageHeight
  },
  InfoContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    height: 424
  },
  InfoFrame: {
    width: "90%"
  },
  CreatorName: {
    color: "#a8aeb3",
    fontWeight: "bold",
    fontSize: 14
  },
  CreatorTitle: {
    color: "#3e4042",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8
  },
  CreatorLabelContainer: {
    height: 24,
    flexDirection: "row"
  },
  CreatorLabel: {
    marginRight: 4,
    marginBottom: 4,
    padding: 2,
    fontSize: 11,
    color: "white",
    backgroundColor:'black'
  }
});
