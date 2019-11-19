import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import IntroSkillListItem from "./IntroSkillListItem";
import data from "Data/classDetailData";

export default class ClassDetailIntroSkills extends Component {
  constructor() {
    super();

    this.state = {
      data: data.skills
    };
  }
  onLayout = e => {
    this.props.getclassIntroY(e.nativeEvent.layout.y); // 클래스 소개 컴포넌트의 절대 높이값 을 가져옵니단
  };
  render() {
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <View style={styles.introContainer}>
          <Text style={styles.Title}>이런 걸 배울 거예요</Text>
          <View style={styles.introListItemContainer}>
            <FlatList
              horizontal={true}
              data={this.state.data}
              renderItem={({ item }) => (
                <IntroSkillListItem
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  photoUrl={item.photoUrl}
                />
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#EDEFF0",
    alignItems: "center",
    marginBottom: 48
  },
  introContainer: {
    width: "90%"
  },
  Title: {
    zIndex: 1,
    marginTop: 30,
    height: 32,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  introDesc: {
    fontSize: 14
  },
  introListItemContainer: {
    flexDirection: "row"
  }
});
//나중에 사용할 컴포넌트입니다 일단은 주석 처리 해놨습니다
// import React, { Component } from "react";
// import { StyleSheet, View, FlatList,Text } from "react-native";
// import ClassDetailIntroListItem from "./ClassDetailIntroListItem";
// export default class ClassDetailIntroSkills extends Component {

//   render() {
//     return (
//       <View style={styles.introContainer}>
//         <Text
//           style={styles.introTitle}
//         >{`색연필로\n총 10개의 작품 만들기`}</Text>
//         <Text style={styles.introDesc}>
//           한 작품을 만들어보는데에
//           <Text style={{ fontWeight: "bold" }}> 1~4시간 </Text>
//           정도가 소요 됩니다.
//         </Text>
//         <View style={styles.introListItemContainer}>
//           <FlatList
//             data={this.props.data}
//             renderItem={({ item }) => <ClassDetailIntroListItem />}
//             numColumns={3}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   introContainer: {
//     width: "90%",
//     backgroundColor: "yellowgreen"
//   },
//   introTitle: {
//     marginTop: 30,
//     fontSize: 24,
//     fontWeight: "bold"
//   },
//   introDesc: {
//     fontSize: 14
//   },
//   introListItemContainer: {
//     flexDirection: "row"
//   }
// });
