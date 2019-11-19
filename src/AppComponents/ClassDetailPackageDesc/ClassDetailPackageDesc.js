import React, { Component } from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import styled from "styled-components";
import HTML from "react-native-render-html";

export default class ClassDetailPackageDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: true,
      data: `<h4>【소가죽 펜슬 홀더 패키지】</h4><p>1만원 상당의 <strong>소가죽 펜슬 홀더</strong>를 4,900원에 구매할 수 있는 패키지입니다. 가방안에 굴러다녀서 잃어버리기 쉬웠던 애플펜슬을 이제 안전하게 보관해보세요!</p><p><img src=\"https://cdn.class101.net/images/52ee8f1c-7824-415b-86bb-83c61b8c28c6\"></p><p><img src=\"https://cdn.class101.net/images/1c93e07c-8b29-406a-8659-75fbac7a7613\"></p><p>📍해당 제품 구입을 희망하지 않으실 경우, <strong>&lt;수강권만 구매하기&gt;</strong>를 선택하여 결제해주시기 바랍니다.</p><h4>아이패드 선택 옵션</h4><p><strong>1) iPad PRO 11(3세대) Wi-Fi</strong></p><p><strong style=\"color: rgb(62, 64, 66);\"><img src=\"https://cdn.class101.net/images/ad77c0a7-68a9-4543-8826-fc2dd907df53\"></strong></p><ul><li>용량 선택 : 256GB</li><li>색상 선택 : 실버 / 스페이스그레이</li></ul><p><strong>2) iPad PRO 12.9 (3세대) Wi-Fi</strong></p><p><strong style=\"color: rgb(62, 64, 66);\"><img src=\"https://cdn.class101.net/images/ad77c0a7-68a9-4543-8826-fc2dd907df53\"></strong></p><ul><li>용량 선택 : 256GB</li><li>색상 : 스페이스그레이</li></ul><p><strong>3) iPad Mini (5세대) Wi-Fi</strong></p><p><span style=\"color: rgb(62, 64, 66);\"><img src=\"https://cdn.class101.net/images/cd47962f-d161-44c4-8856-88f623e94f4b\"></span></p><ul><li>용량 선택 : 64GB / 256GB</li><li>색상 : 실버 / 골드 / 스페이스그레이</li></ul><p><strong>4) iPad Air 10.5 (3세대) Wi-Fi</strong></p><p><span style=\"color: rgb(62, 64, 66);\"><img src=\"https://cdn.class101.net/images/43ffbc95-7cc5-483d-94f2-7c250d3a3a9e\"></span></p><ul><li>용량 선택 : 64GB / 256GB</li><li>색상 : 실버 / 골드 / 스페이스그레이</li></ul><h4><strong>애플펜슬 선택 옵션</strong></h4><p><strong>1) Apple Pencil (1세대)</strong></p><p><span style=\"color: rgb(62, 64, 66);\"><img src=\"https://cdn.class101.net/images/056486ca-e499-4243-b3d6-fec2cd2c6ae7\"></span></p><ul><li>호환 기기: iPad Air (3세대), iPad mini (5세대)</li></ul><p><strong>2) Apple Pencil (2세대)</strong></p><p><span style=\"color: rgb(62, 64, 66);\"><img src=\"https://cdn.class101.net/images/b33da3b9-e40f-4f47-a56c-8e5db32286b5\"></span></p><ul><li>호환 기기: iPad Pro 11(3세대), iPad Pro 12.9(3세대)</li></ul><p><br></p><p><strong>애플 제품에 대한 환불 특약 안내</strong></p><ul><li>애플 제품은 발송예정일 전 입고될 시, 예정일보다 더 빠르게 발송해드릴 수 있습니다.</li><li>애플 아이패드 제품의 환불 및 A/S는 애플 코리아의 정책을 따릅니다. 다만 제품 가치가 훼손 됐을 경우, 자사 유료서비스 이용약관을 기준으로 환불을 처리합니다.</li><li>애플 아이패드 패키지 최저가 혜택은 패키지로 구매할 경우에 한해 적용됩니다.</li><li>애플 아이패드 패키지 구매 후 기기 단독 환불 시, 본 페이지 내의 상품 가격 기준으로 금액을 공제하고 환불합니다.</li><li>애플 아이패드 패키지 구매 후 아이패드 패키지를 제외하고 환불 시, 기기의 공식판매가격을 기준으로 금액을 공제한 후, 아래의 환불 정책에 따라 환불이 진행됩니다.</li></ul><p>📩 패키지는 일부 변동될 수 있으며, 변동될 시 충분히 안내됩니다.</p><h4>사용 프로그램 안내</h4><p><strong>프로크리에이트 Procreate 어플 (개별 준비)</strong></p><p><img src=\"https://cdn.class101.net/images/0434c309-e54c-4b96-b52d-29c55f9da9f1\"></p><ul><li>클래스에서 활용하는 프로크리에이트(Procreate) 어플은 <strong>유료 </strong>입니다.</li><li>원활한 강의 수강을 위해서는 <strong>필수로 갖춰주셔야 합니다!</strong></li><li><strong>패키지에 포함 되어있지 않으므로 개별 구매</strong> 해주셔야 합니다.</li><li>어플 사용법, 활용법은 클래스에서 충분히 알려드립니다.</li><li><span style=\"color: rgb(0, 0, 0);\">클래스는 </span><strong style=\"color: rgb(0, 0, 0);\">프로크리에이트 4.3.3 버전</strong><span style=\"color: rgb(0, 0, 0);\">으로 제작 되었습니다.</span></li></ul>`
    };
  }
  onLayout = e => {
    this.props.getPackageY(e.nativeEvent.layout.y); // 커리큘럼 컴포넌트의 절대위치값을 가져옵니다.
  };
  render() {
    const htmlContent = this.state.data;
    return (
      <Container onLayout={this.onLayout}>
        <View style={{ width: "90%" }}>
          <View
            style={{
              weight: "90%",
              height: this.state.mode ? 420 : "auto",
              marginBottom: 50,
              overflow: "hidden"
            }}
          >
            <Title>패키지 소개</Title>
            <HTML
              tagsStyles={{
                img: styles.img
              }}
              baseFontStyle={{
                fontSize: 15
              }}
              html={htmlContent}
              imagesMaxWidth={(Dimensions.get("window").width * 90) / 100}
            />
          </View>
          <Text
            style={styles.TextButton}
            onPress={e => {
              console.log("click");
              this.setState({
                mode: !this.state.mode
              });
            }}
          >
            {this.state.mode ? "열기" : "닫기"}
          </Text>
        </View>
      </Container>
    );
  }
}

const Container = styled.View`
  width: 100%;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24;
  font-weight: bold;
  margin-top: 35;
`;

const styles = StyleSheet.create({
  img: {
    marginBottom: 20
  },
  html: {
    height: 500,
    overflow: "hidden"
  },

  TextButton: {
    height: 30,
    zIndex: 10,
    position: "absolute",
    bottom: 0,
    fontSize: 14,
    left: "10%",
    color: "#FD7E14"
  }
});
