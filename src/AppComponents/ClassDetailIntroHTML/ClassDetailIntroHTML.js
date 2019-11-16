import React, { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import HTML from "react-native-render-html";

export default class ClassDetailIntroHTML extends Component {
  constructor() {
    super();
    this.state = {
      data: `<h4><span>Class101's Check Point!</span></h4><ul><li><strong style=\"color: rgb(0, 0, 0);\"><span>다른 수업과 달리 기존 인물 드로잉 이론의 틀을 깨트리는 보다 쉬운 작가님만의 공식.</span></strong></li></ul><ul><li><strong style=\"color: rgb(0, 0, 0);\"><span>볼펜으로 연필과 같은 명암 조절을 더 쉽게 하는 다양한 스킬과 팁.</span></strong></li></ul><ul><li><strong style=\"color: rgb(0, 0, 0);\"><span>모나미 특징인 '똥' 해결법과 오직 모나미로 시작해 모나미로 끝내는 드로잉.</span></strong></li></ul><h3>모나미 볼펜으로 완성해보는 인물 드로잉</h3><p>안녕하세요! 작가 모넥스입니다.</p><p>이번에 저의 클래스는 <strong>볼펜만의 명암 표현과 선 쓰는 법부터 기본 3색 모나미 볼펜으로 채색까지</strong><span> 알아보도록 하겠습니다.</span><span style=\"color: rgb(62, 64, 66);\"><img src=\"https://cdn.class101.net/images/d2492777-4e1c-4f13-8a55-784b6d05f554\"></span></p><h4>누구나 한번 쯤은 써 봤을 모나미 볼펜.</h4><p><strong>무언가를 그릴때 특별한 도구가 필요한게 아닙니다.</strong></p><iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://www.youtube.com/embed/hD7GL7I_TFs?showinfo=0\"></iframe><p>여러 가지 그림을 그려오면서, 단순히 \"그림을 그린다\" 가 아닌 <strong>감정이란 것을 표현하고 싶었어요.</strong><span> \"내가 지금 슬픈 감정을 그림에 표현하고 싶은데 어떤 그림을 그리면 가장 잘 나타날까?\"라는 질문에 가장 먼저 떠올랐던 건 인물 드로잉이었어요.</span></p><p>사람 표정은 정말 많은 것들이 들어가 있어서 눈뜨는 정도, 입술 모양, 주름진 모양 하나에 그 사람의 감정이 나타나거든요.</p><p>그렇게 인물 드로잉을 시작했고, 수많은 재료들을 써가면서 <strong>결국 지금 손에는 볼펜 딱하나 남았어요.</strong><span style=\"color: rgb(62, 64, 66);\"><img src=\"https://cdn.class101.net/images/e266bc76-c8b6-4b9b-bdd7-e996a006e4df\"></span></p><h4><span style=\"color: rgb(0, 0, 0);\">많은 분들이 그림을 그릴 때 실수해도 언제든지 지울 수 있는 연필을 많이 사용하세요. 제가 알려드릴 </span><strong style=\"color: rgb(0, 0, 0);\"><span>공식을 따라서 그리시면 누구나 금방 인물을 그릴 수 있습니다.</span></strong><span style=\"color: rgb(0, 0, 0);\"> 이 공식만 있으시면 볼펜으로 그리는 게 두렵지 않으실 거예요.</span><span style=\"color: rgb(62, 64, 66);\"><img src=\"https://cdn.class101.net/images/ed2d33eb-ed41-4138-8edc-3c037ae3c8b8\"></span><span style=\"color: rgb(62, 64, 66);\"><img src=\"https://cdn.class101.net/images/2637e9c5-3f68-4656-ae82-924fffd37ac5\"></span></h4><h4>볼펜은 <strong>부드러우면서도 강렬한</strong><span> 그림을 그릴 수 있습니다.</span></h4><p><span style=\"color: rgb(0, 0, 0);\">볼펜은 표현의 폭이 넓어서 </span><strong style=\"color: rgb(0, 0, 0);\"><span>표현력을 다채롭게</span></strong><span style=\"color: rgb(0, 0, 0);\"> 가져갈 수 있습니다. 또한, </span><span>볼펜이 지닌 </span><strong><span>눈에 띄는 발색을</span></strong><span> 이용해 인물이 돋보이는 그림을 그릴 수 있거든요. </span><span style=\"color: rgb(0, 0, 0);\">\"정말 이게 볼펜으로 그린 건가?\"라는 생각이 드실 작품들을 같이 만들고, 또한 </span><strong style=\"color: rgb(0, 0, 0);\"><span>모나미 하면 빠질수 없는 일명 '똥'</span></strong><span style=\"color: rgb(0, 0, 0);\">에 관한 팁도 알려드릴게요!</span><img src=\"https://cdn.class101.net/images/ba154bc1-5d12-4901-ac8e-0ee0c01ed8fd\"><img src=\"https://cdn.class101.net/images/6529e506-52c8-4df1-abfe-721202ca4751\"></p><h4>눈, 코, 입 형태를 잡으실 때는 해부학 이론없이 그릴 수 있도록.</h4><p>저 또한 해부학을 배우지 않았습니다. 하지만 제가 알려드릴 <strong>드로잉의 공식만</strong><span> 아시면 </span><strong><span>사진이 없어도 눈, 코, 입을 그리실 수 있게</span></strong><span> 말이죠. 공식을 배우시고, 이목구비 비율에 대한 이해를 하시고 나면 인물을 그릴 때마다 </span><strong><span>크게 구도를 잡을 필요가 없답니다.</span></strong><span> 이목구비 비율에 맞게 인물화를 그리면서 말그대로 지우개 없는 인물드로잉을 배우실 수 있어요.</span></p><iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://www.youtube.com/embed/nb6nX17KO7w?showinfo=0\"></iframe><h4><img src=\"https://cdn.class101.net/images/197303e3-8160-4918-9c58-071588e04d14\">눈썹 및 머리카락 드로잉을 자연스럽게 그리는 법.</h4><p><span style=\"color: rgb(0, 0, 0);\">제가 알려드릴 공식만 있으면 손이 굉장히 많이 갈 것 같은 눈썹이나 머리카락 드로잉도 자연스럽게 그리실 수 있을 거예요. </span><span style=\"color: rgb(62, 64, 66);\"><img src=\"https://cdn.class101.net/images/61b1c66a-a74f-42e3-abde-bf5b5773b9f7\"><img src=\"https://cdn.class101.net/images/f574e54d-0de7-4957-8523-d0e3c38a2cf0\"><img src=\"https://cdn.class101.net/images/0d8b80f0-50f4-43f6-8c26-1f084e7bc6ee\"></span></p><h4>인물의 분위기를 명암으로 표현하기</h4><p>감정 표현을 분위기와 함께 표현하는 법과 볼펜선을 이용하여 개성 있는 그림도 세세하게 배우게 될 거예요. 볼펜은 <strong>연필보다 강력하게</strong> <span style=\"color: rgb(62, 64, 66);\">임팩트를 </span>나타나는 재료 중 하나에요. 정말 <strong>부드럽게만 </strong>사용하실 수도 있고, <strong>거칠게만</strong> 표현하실 수도 있는 재료랍니다.<span style=\"color: rgb(62, 64, 66);\"><img src=\"https://cdn.class101.net/images/2c3466bd-29ad-418a-aa7d-283bd1e6cabf\"></span></p><p><span style=\"color: rgb(62, 64, 66);\"><img src=\"https://cdn.class101.net/images/62d67f83-c1bd-442e-b4dd-7a7f59e73903\"></span></p><h4>마무리로 모나미 기본 펜 3개로 채색을 해볼거에요.</h4><p>채색은 자칫 잘못하면 탁할 수 있지만 <strong>탁하지 않게 겹쳐 쓰는 방법</strong>과, 어느 포인트에 채색을 해야 인물 드로잉이 살아나는지 알려드릴게요.</p><p><span style=\"color: rgb(62, 64, 66);\"><img src=\"https://cdn.class101.net/images/cfa3f9b1-5857-4f9f-9f5a-d86af9ffca6e\"><img src=\"https://cdn.class101.net/images/1729a378-5ea7-4187-adc1-1aa48c1f8227\"></span></p><p><sub style=\"color: rgb(62, 64, 66);\">간단한 수채화 그라데이션과 색연필로 그리는법도 알려드릴게요 :)</sub></p><p><span style=\"color: rgb(0, 0, 0);\">저는 인물 드로잉에 대해서 전문적으로 배운 적이 없습니다. 혼자 스스로 터득했기에 여러분이 어렵게 느끼는 부분에 대해, 쉽게 이해할 수 있는 팁들도 알려드릴게요.</span></p><p>천천히 이 클래스를 따라오시다보면, 정말 발전한 자기자신을 발견하시게 될거에요. 이젠 많은 재료없이, 볼펜 단 하나로 드로잉을 즐기시길 바랍니다 :)</p><h4>*모나미 3색 볼펜은 개별 준비물 입니다.</h4>`
    };
  }

  render() {
    const htmlContent = this.state.data;
    return (
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <View style={{ width: "90%" }}>
          <HTML
            tagsStyles={{
              span: styles.span,
              h4: styles.h4,
              h3: styles.h3,
              strong: styles.strong,
              sub: styles.sub,
              li: styles.li,
              p: styles.p,
              iframe: styles.iframe,
              img: styles.img
            }}
            baseFontStyle={{
              fontSize: 15
            }}
            html={htmlContent}
            imagesMaxWidth={(Dimensions.get("window").width * 90) / 100}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    marginBottom: 20
  },
  p: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 15,
    margin: 3
  },
  h4: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10
  },
  h3: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10
  },
  strong: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  span: {
    flexWrap: "wrap"
  },
  sub: {
    fontSize: 9
  },
  li: {
    fontSize: 16
  },
  iframe: {
    width: (Dimensions.get("window").width * 90) / 100
  }
});
