import React from "react";
import styled from "styled-components/native";

const ClassAvailabilityText = styled.Text`
  margin-top: 10;
  font-size: 9;
  font-weight: 600;
  background-color: #f8f8f9;
  width: 60;
  height: 20;
  text-align-vertical: center;
  text-align: center;
  border-radius: 3;
  color: ${props => props.color || "#858A8D"};
`;

const ClassAvailability = ({ children }) => {
  return <ClassAvailabilityText>{children}</ClassAvailabilityText>;
};

export default ClassAvailability;
