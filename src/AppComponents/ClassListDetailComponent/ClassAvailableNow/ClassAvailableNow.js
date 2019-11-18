import React from "react";
import styled from "styled-components/native";

const ClassAvailableNowText = styled.Text`
  margin-top: 10;
  font-size: 9;
  font-weight: 600;
  background-color: #f8f8f9;
  width: 60;
  height: 20;
  text-align-vertical: center;
  text-align: center;
  border-radius: 3;
  color: #858a8d;
`;

const ClassAvailableNow = ({ children }) => {
  return <ClassAvailableNowText>{children}</ClassAvailableNowText>;
};

export default ClassAvailableNow;
