import React from "react";
import styled from "styled-components/native";

const ClassAvailableFutureText = styled.Text`
  margin-top: 10;
  font-size: 9;
  font-weight: 600;
  background-color: #f8f8f9;
  width: 60;
  height: 20;
  text-align-vertical: center;
  text-align: center;
  border-radius: 3;
  color: #fd7e14;
`;

const ClassAvailableFuture = ({ children }) => {
  return <ClassAvailableFutureText>{children}</ClassAvailableFutureText>;
};

export default ClassAvailableFuture;
