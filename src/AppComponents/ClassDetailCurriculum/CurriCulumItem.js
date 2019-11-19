// import React, { Component } from "react";
// import { Dimensions } from "react-native";
// import styled from "styled-components";

// export default class CurriCulumItem extends Component {
//   render() {
//     const list = this.props.data.map(el => {
//       return (
//         <Container>
//           <ImageContainer
//             source={{
//               uri:
//                 "https://cdn.class101.net/images/73af7d05-bcbf-4381-92b0-014bb126f70c/640xauto"
//             }}
//           />
//           <Title>WelCome 인트로 - 매력적인 그림에 대하여</Title>
//           <EpisodeContainer>
//             <EpisodeFrame>
//               <EpiIndex>1</EpiIndex>
//               <EpiTitle>모넥스의 볼펜 드로잉 클래스를 소개합니다</EpiTitle>
//               <EpiFree>무료공개</EpiFree>
//             </EpisodeFrame>
//           </EpisodeContainer>
//         </Container>
//       );
//     });
//     return(
//     { list };
//   }
// }

// const dimensions = Dimensions.get("window");
// const imageWidth = (dimensions.width * 90) / 100;
// const imageHeight = Math.round((imageWidth * 9) / 16);

// const Container = styled.View`
//   width: ${imageWidth};
// `;

// const ImageContainer = styled.Image`
//   width: 100%;
//   height: ${imageHeight};
// `;

// const EpisodeContainer = styled.View`
//   width: 100%;
// `;
// const EpisodeFrame = styled.View`
//   width: 100%;
//   margin-top: 12px;
//   flex-direction: row;
//   align-items: center;
// `;

// const EpiIndex = styled.Text`
//   width: 20px;
//   height: 20px;
//   margin-right: 16px;
//   background-color: #edeff0;
//   border-radius: 10px;
//   font-size: 11px;
//   text-align: center;
//   align-items: center;
// `;
// const EpiTitle = styled.Text`
//   font-size: 14px;
// `;
// const EpiFree = styled.Text`
//   border-radius: 3px;
//   width: 63;
//   height: 20;
//   font-size: 9;
//   margin-left: 16;
//   padding-top: 4;
//   padding-bottom: 4;
//   padding-right: 5;
//   padding-left: 5;
//   background-color: black;
//   color: white;
//   text-align: center;
//   align-items: center;
// `;
