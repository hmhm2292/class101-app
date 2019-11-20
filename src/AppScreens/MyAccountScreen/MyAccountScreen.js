import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import Carousel from "react-native-snap-carousel";

import styled from "styled-components/native";
import * as SecureStore from "expo-secure-store";
import TakingData from "./TakingMockData";
import madeData from "./MadeMockData";
import ClassListDetailComponent from "../../AppComponents/ClassListDetailComponent/ClassListDetailComponent";

const dimensions = Dimensions.get("window");
const sliderWidth = dimensions.width;
const itemWidth = Math.round((dimensions.width * 4.7) / 10);
const ipAddress = "http://10.58.1.226:3030";

class MyAccountScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      takingClass: { data: [] },
      madeClass: { data: [] }
    };
  }

  componentDidMount() {
    this.fetchUserInfo();
  }

  fetchUserInfo = async () => {
    const userToken = await SecureStore.getItemAsync("tokenValue");
    fetch(`${ipAddress}/users/profile`, {
      headers: { Authorization: userToken }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response.myClass);
        this.setState({
          userInfo: response.userInfo,
          madeClass: response.myClass,
          takingClass: response.purchasedProducts
        });
      });
  };

  Logout = async () => {
    const deleteToken = await SecureStore.deleteItemAsync("tokenValue");
    console.log("Token Deleted" + deleteToken);
    if (!deleteToken) {
      this.props.navigation.navigate("WelcomeScreen");
      console.log("tokenDeleted");
    }
  };

  render() {
    console.log(this.state.madeClass.data);
    return (
      <MyAccountContainer>
        <UsernameLogout>
          <UserImage source={{ uri: this.state.userInfo.imageUrl }} />
          <TouchableOpacity onPress={this.Logout}>
            <LogoutText>Log Out</LogoutText>
          </TouchableOpacity>
        </UsernameLogout>
        <Username>{this.state.userInfo.name}</Username>
        <AccountInfoData>
          <TakingClassData>
            <Number>{this.state.madeClass.data.length}</Number>
            <HowMany>{this.state.madeClass.title}</HowMany>
          </TakingClassData>
          <TakingClassData>
            <Number>{this.state.takingClass.data.length}</Number>
            <HowMany>{this.state.takingClass.title}</HowMany>
          </TakingClassData>
        </AccountInfoData>
        <Border></Border>
        <ScrollView>
          <Title>{this.state.madeClass.title}</Title>
          <ListDetailComponent>
            <Carousel
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              activeSlideAlignment={"start"}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              firstItem={0}
              contentContainerCustomStyle={{
                overflow: "hidden",
                marginLeft: 8,
                width: itemWidth * this.state.madeClass.data.length + 8
              }}
              horizontal={true}
              data={this.state.madeClass.data}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <ClassListDetailComponent
                  classData={item}
                  navigation={this.props.navigation}
                />
              )}
            />
          </ListDetailComponent>
          <Title>{this.state.takingClass.title}</Title>
          <ListDetailComponent>
            <Carousel
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              activeSlideAlignment={"start"}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              firstItem={0}
              contentContainerCustomStyle={{
                overflow: "hidden",
                marginLeft: 8,
                width: itemWidth * this.state.takingClass.data.length + 8
              }}
              horizontal={true}
              data={this.state.takingClass.data}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <ClassListDetailComponent
                  classData={item}
                  navigation={this.props.navigation}
                />
              )}
            />
          </ListDetailComponent>
        </ScrollView>
      </MyAccountContainer>
    );
  }
}

export default MyAccountScreen;

const MyAccountContainer = styled.View`
  flex-direction: column;
  margin-top: 60;
  padding: 0px 10px;
  flex: 1;
`;

const UsernameLogout = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const Username = styled.Text`
  font-size: 20;
  font-weight: 600;
  opacity: 0.8;
  margin-top: 10;
`;

const UserImage = styled.Image`
  height: 60;
  width: 60;
  border-radius: 30;
  resize-mode: contain;
`;

const LogoutText = styled.Text`
  font-size: 12;
  opacity: 0.8;
`;

const AccountInfoData = styled.View`
  margin: 20px 0px 10px 0px;
  flex-direction: row;
`;

const TakingClassData = styled.View`
  flex-direction: column;
  margin-right: 30px;
  margin-left: 10px;
  justify-content: center;
`;
const Number = styled.Text`
  font-size: 30;
`;

const HowMany = styled.Text`
  font-size: 12;
  margin-top: 10;
  opacity: 0.3;
`;
const Title = styled.Text`
  font-size: 18;
  margin-top: 20;
`;

const ListDetailComponent = styled.View`
  justify-content: flex-start;
  margin-top: 20;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
`;

const Border = styled.View`
  margin-top: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #efefef;
`;
