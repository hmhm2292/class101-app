import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const InputBox = ({
  children,
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
  name,
  borderColor,
  onFocus,
  onBlur
}) => {
  return (
    <View>
      <InputTitle>{children}</InputTitle>
      <Input
        borderColor={borderColor}
        selectionColor="black"
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={value => onChangeText(name, value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  );
};

export default InputBox;

const Input = styled.TextInput`
  width: 100%;
  height: 50;
  border: 1px;
  border-color: ${props => props.borderColor || "#efefef"};
  margin-top: 10px;
  padding: 0px 15px;
  border-radius: 2px;
`;

const InputTitle = styled.Text`
  font-size: 17;
  margin-top: 20px;
  opacity: 0.8;
`;
