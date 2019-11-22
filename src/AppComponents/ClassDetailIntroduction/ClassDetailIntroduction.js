// import React, { Component } from "react";
// import { StyleSheet, View } from "react-native";
// import ClassDetailIntroSkills from "./ClassDetailIntroSkills";

// export default class ClassDetailIntroduction extends Component {
//   constructor() {
//     super();

//     this.state = {
//       data: data.skills,
//       y: ""
//     };
//   }
//   onLayout = e => {
//     this.setState({
//       y: e.nativeEvent.layout.y
//     });
//   };
//   render() {
//     console.log("dsds", this.state.y);
//     return (
//       <View style={styles.container} onLayout={this.onLayout}>
//         <ClassDetailIntroSkills data={this.state.data} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     borderTopWidth: 1,
//     borderTopColor: "#EDEFF0",
//     alignItems: "center",
//     marginBottom: 48
//   }
// });
