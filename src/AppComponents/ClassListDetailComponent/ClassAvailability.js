import React from "react";
import styled from "styled-components/native";

const ClassAvailabilityText = styled.Text`
  margin-top: 10;
  font-size: 9;
  font-weight: 600;
  background-color: #f8f8f9;
  width: ${props => props.width || "60px"};
  padding: 4.5px 0px;
  text-align: center;
  border-radius: 3;
  color: ${props => props.color || "#858A8D"};
`;

const ClassAvailability = ({ children, color, width }) => {
  return (
    <ClassAvailabilityText width={width} color={color}>
      {children}
    </ClassAvailabilityText>
  );
};

export default ClassAvailability;
