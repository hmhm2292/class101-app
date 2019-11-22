import React, { Component } from "react";
import { Image, Dimensions, StyleSheet, Text, View } from "react-native";
import TopDetailPriceComponent from "./TopDetailPriceComponent";
import TopDetailSummaryOption from "./TopDetailSummaryOption";
import TopDetailProductInfoTable from "./TopDetailProductInfoTable";
import HTML from "react-native-render-html";
export default class DetailInfoComponent extends Component {
  state = {
    paused: false,
    video:
      '<iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/XMb0w3KMw00"></iframe>'
  };
  render() {
    const htmlContent = this.state.video;
    return (
      <View>
        {this.props.class ? (
          <HTML tagsStyles={{ iframe: styles.iframe }} html={htmlContent} />
        ) : (
          <Image
            style={styles.InfoImage}
            source={{
              uri: this.props.data.coverImageUrl
            }}
          />
        )}

        <View style={styles.InfoContainer}>
          <View style={styles.InfoFrame}>
            <Text style={styles.CreatorName}>
              By.{this.props.data.ownerUser.nickname}
            </Text>
            <Text style={styles.CreatorTitle}>
              {this.props.data.curriculum.title}
            </Text>
            <View style={styles.CreatorLabelContainer}>
              <Text style={styles.CreatorLabel}>
                {this.props.data.categoryId.title}
              </Text>
              <Text style={styles.CreatorLabel}>바로 수강가능</Text>
            </View>
            <TopDetailPriceComponent />
            <TopDetailSummaryOption />
            <TopDetailProductInfoTable data={this.props.data.wishlistedCount} />
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
    backgroundColor: "black"
  },
  iframe: { width: "100%", height: 400 }
});
