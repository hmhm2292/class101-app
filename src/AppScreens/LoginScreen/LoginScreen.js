import React from "react";
import { View, Text, Dimensions } from "react-native";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import InputBox from "../../AppComponents/InputBox";
import * as Google from "expo-google-app-auth";
import * as SecureStore from "expo-secure-store";

const ipAddress = "http://10.58.1.226:3030";
const dimensions = Dimensions.get("window");
const width = dimensions.width;

class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isEmailFocused: false,
      isPassFocused: false,
      warnEmail: "none",
      warnPass: "none"
    };
  }

  componentDidMount = async () => {
    const token = await SecureStore.getItemAsync("tokenValue");
    console.log("token Exist" + token);
    if (token) {
      console.log("passLogin");
      this.props.navigation.navigate("MainStackNavigator");
    }
  };

  handleOnTextChange = (name, value) => {
    this.setState({ [name]: value }, () => {
      if (!this.state.email) {
        this.setState({
          warnEmail: "flex"
        });
      } else if (this.state.email) {
        this.setState({ warnEmail: "none" });
      }
      if (!this.state.password) {
        this.setState({
          warnPass: "flex"
        });
      } else if (this.state.password) {
        this.setState({ warnPass: "none" });
      }
    });
  };

  handleEmailOnFocus = () => {
    this.setState({ isEmailFocused: true });
  };
  handlePassOnFocus = () => {
    this.setState({ isPassFocused: true });
  };
  handleEmailOnBlur = () => {
    this.setState({ isEmailFocused: false });
  };
  handlePassOnBlur = () => {
    this.setState({ isPassFocused: false });
  };

  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "1041570238910-tj9ua6h07cr9js8fk0232mg7jcoka6hf.apps.googleusercontent.com",
        iosClientId:
          "1041570238910-hutjkvqjohav0tb0eramfs3num4d61pt.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });
      if (result.type === "success") {
        // console.log(result.idToken);
        fetch(`${ipAddress}/users/google`, {
          headers: { Authorization: result.idToken }
        })
          .then(response => response.json())
          .then(response => {
            console.log("token Received" + response.token);
            SecureStore.setItemAsync("tokenValue", response.token),
              this.props.navigation.navigate("MainStackNavigator");
          });
      } else {
        console.log("cancelled");
        // return { cancelled: true };
      }
    } catch (e) {
      console.log(e);
      // return { error: true };
    }
  };

  gotoSignup = () => {
    this.props.navigation.navigate("SignupScreen");
  };

  gotoClassList = () => {
    this.props.navigation.navigate("MainStackNavigator");
  };
  render() {
    return (
      <LoginContainer>
        <LogoImage
          source={{
            uri:
              "https://image.rocketpunch.com/company/12372/class101_logo_1564048015.jpg?s=400x400&t=inside"
          }}
        />
        <LoginTitle>로그인</LoginTitle>
        <InputBox
          ref={this.textRef}
          placeholder="이메일을 입력하세요"
          keyboardType="email-address"
          secureTextEntry={false}
          onChangeText={this.handleOnTextChange}
          name={"email"}
          onFocus={this.handleEmailOnFocus}
          onBlur={this.handleEmailOnBlur}
          borderColor={this.state.isEmailFocused ? "black" : null}
        >
          이메일
        </InputBox>
        <EmailWarning style={{ display: this.state.warnEmail }}>
          이메일을 입력해주세요
        </EmailWarning>
        <InputBox
          ref={this.textRef}
          textContentType="password"
          placeholder="••••••••"
          secureTextEntry={true}
          onChangeText={this.handleOnTextChange}
          name={"password"}
          onFocus={this.handlePassOnFocus}
          onBlur={this.handlePassOnBlur}
          borderColor={this.state.isPassFocused ? "black" : null}
        >
          비밀번호
        </InputBox>
        <PassWarning style={{ display: this.state.warnPass }}>
          패스워드를 입력해주세요
        </PassWarning>
        <LoginButton onPress={this.gotoClassList}>
          <LoginText>로그인</LoginText>
        </LoginButton>
        <ForgotSignupContainer>
          <TouchableOpacity>
            <ForgotPasswordText>비밀번호를 잊으셨나요?</ForgotPasswordText>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoSignup}>
            <SignupText>회원가입</SignupText>
          </TouchableOpacity>
        </ForgotSignupContainer>
        <Border></Border>
        {/* <GoogleContainer> */}
        <GoogleSignin onPress={this.signInWithGoogle}>
          <GoogleLogo
            source={{
              uri:
                "https://banner2.cleanpng.com/20180324/iww/kisspng-google-logo-g-suite-google-5ab6f1cee66464.5739288415219388949437.jpg"
            }}
          />
          <GoogleText>구글로 시작하기</GoogleText>
        </GoogleSignin>
        {/* </GoogleContainer> */}
      </LoginContainer>
    );
  }
}

export default LoginScreen;

const LoginContainer = styled.ScrollView`
  width: ${width};
  padding: 60px 24px;
  height: 100%;
  flex: 1;
`;

const LogoImage = styled.Image`
  width: ${width * 0.08};
  height: 25;
`;

const LoginTitle = styled.Text`
  font-size: 35;
  font-weight: 900;
  opacity: 0.8;
  margin: 30px 0px 10px 0px;
`;

const LoginText = styled.Text`
  color: white;
  font-size: 17;
  font-weight: 900;
  padding: 17px 0px;
  margin-top: 0px;
  text-align: center;
  text-align-vertical: center;
`;

const LoginButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: black;
  margin-top: 20px;
  opacity: 0.8;
  border-radius: 2px;
  opacity: 0.8;
`;

const ForgotSignupContainer = styled.View`
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  margin-top: 20px;
`;

const ForgotPasswordText = styled.Text`
  font-size: 12;
  color: darkgrey;
  text-decoration: underline;
  text-decoration-color: darkgrey;
`;

const SignupText = styled(ForgotPasswordText)``;

const Border = styled.View`
  margin-top: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #efefef;
`;

const EmailWarning = styled.Text`
  display: none;
  margin-top: 10px;
  color: red;
  font-size: 12;
`;

const PassWarning = styled.Text`
  display: none;
  margin-top: 10px;
  color: red;
  font-size: 12;
`;

const GoogleSignin = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0.5px;
  border-color: #efefef;
  border-radius: 2px;
`;

const GoogleLogo = styled.Image`
  width: 20;
  height: 20;
  margin-left: 20;
  resize-mode: contain;
  border-radius: 10;
`;

const GoogleText = styled.Text`
  color: black;
  font-size: 17;
  font-weight: 900;

  margin-right: 95;
`;
