import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
  Text
} from "react-native";

export default class DetailProductInfoTable extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer1}>
          <TouchableHighlight onPress={() => {}}>
            <View style={styles.ButtonFrame}>
              <Image
                style={styles.buttonImage}
                source={{
                  uri:
                    "https://png.pngtree.com/element_pic/16/06/03/00575062de3a1a6.jpg"
                }}
              />
              <Text style={styles.buttonText}>찜하기</Text>
              <Text style={styles.buttonTextNumber}>1778</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.buttonContainer2}>
          <TouchableHighlight onPress={() => {}}>
            <View style={styles.ButtonFrame}>
              <Image
                style={styles.buttonImage}
                source={{
                  uri:
                    "https://png.pngtree.com/element_pic/16/06/03/00575062de3a1a6.jpg"
                }}
              />
              <Text>공유하기</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    marginTop: 16,
    flexDirection: "row"
  },
  saveButton: {
    color: "red"
  },
  buttonContainer1: {
    flex: 3,
    height: "100%",
    marginRight: 8,
    paddingLeft: 16,
    justifyContent: "center"
  },
  buttonContainer2: {
    flex: 2,
    height: "100%",
    paddingRight: 16,
    justifyContent: "center"
  },
  ButtonFrame: {
    justifyContent: "center",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#f8f8f9",
    borderRadius: 2
  },
  buttonImage: {
    width: 18,
    height: 18
    // Color:'black'
  },
  buttonText: {
    color: "#3e4042",
    fontSize: 14,
    fontWeight: "500"
  },
  buttonTextNumber: {
    fontSize: 10,
    color: "#3e4042",
    marginLeft: 4
  }
});
