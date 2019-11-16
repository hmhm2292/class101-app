import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default class DetailPriceComponent extends Component {
  render() {
    return (
      <View style={styles.salesInfoTable}>
        <View style={styles.TotalPrice}>
          <Text style={styles.Price_Caption}>24% 할인</Text>
          <Text style={styles.Left_Price}>310,000원</Text>
          <Text style={styles.Right_Price}>234,500원</Text>
        </View>
        <View style={styles.Total_Month_Price_row}>
          <Text style={styles.Total_Month_Price_Text}>월 46,900원</Text>
          <Text
            style={styles.Total_Month_Price_Card}
          >{`최대 할인 적용\n5개월 할부 시`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  salesInfoTable: {
    marginTop: 16,
    marginBottom: 16,
  },
  TotalPrice: {
    height: 12,
    marginBottom: 4,
    flexDirection: "row"
  },
  Price_Caption: {
    marginRight: 4,
    fontSize: 9,
    color: "red"
  },
  Left_Price: {
    marginRight: 4,
    fontSize: 9,
    color: "#999999",
    textDecorationLine: "line-through"
  },
  Right_Price: {
    marginRight: 4,
    fontSize: 9,
    color: "#999999"
  },
  Total_Month_Price_row: {
    flexDirection: "row",
    height: 32,
    marginBottom: 4
  },
  Total_Month_Price_Text: {
    color: "#3E4042",
    fontSize: 20,
    fontWeight: "bold"
  },
  Total_Month_Price_Card: {
    color: "#A8AEB3",
    fontSize: 9,
    marginLeft: 8,
    height: 24
  }
});
