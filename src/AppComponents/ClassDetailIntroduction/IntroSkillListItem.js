import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class ClassDetailIntroListItem extends Component {
  render() {
    return (
      <View style={styles.introImageContainer}>
       <Text style={styles.itemTitle}>{this.props.title}</Text>
       <Text style={styles.itemDesc}>{this.props.content}</Text>
        <Image
          style={styles.containerImage}
          source={{
            uri:
              this.props.photoUrl
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  introImageContainer: {
    marginBottom: 16,
    marginRight:16
  },
  containerImage: {
    width:304,
    height: 171
  },
  itemTitle: {
    fontSize:16,
    fontWeight:'normal',
    width:304,
    height:24,
    marginTop:4
  },
  itemDesc:{
    fontSize:14,
    fontWeight:'normal',
    
    width:304,
    height:40,
    marginTop:4,
    color:'#858A8D',
    marginBottom:20
  }
});



//나중에 사용할 컴포넌트입니다. 일단은 주석처리 해놨습니다

// import React, { Component } from "react";
// import { Dimensions, StyleSheet, View, Image, Text } from "react-native";

// export default class ClassDetailIntroListItem extends Component {
//   render() {
//     console.log("ClassDetailIntroListItem render")
//     return (
//       <View style={styles.introImageContainer}>
//         <Image
//           style={styles.containerImage}
//           source={{
//             uri:
//               "https://cdn.class101.net/images/bbe14cfa-4eca-442b-9dd6-06d0463b7600/359xauto@2x"
//           }}
//         />
//         <Text style={styles.containerTitle}>나무 숲</Text>
//       </View>
//     );
//   }
// }
// const dimensions = Dimensions.get("window");
// const imageWidthHeight = (dimensions.width * 90) / 100 / 3; // 4 대신에 배열 크기만큼 받아오기

// const styles = StyleSheet.create({
//   introImageContainer: {
//     marginBottom: 16,
//   },
//   containerImage: {
//     width: imageWidthHeight-1,
//     height: imageWidthHeight
//   },
//   containerTitle: {
//     width: imageWidthHeight,
//     height: 32,
//     marginTop: 4,
//     fontSize: 11,
//     color: "#858A8D"
//   }
// });
