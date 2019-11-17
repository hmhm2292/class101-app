import React from "react";

import styled from "styled-components/native";

import ClassAvailableFuture from "../ClassAvailableFuture";

const ClassAvailableNowText = styled(ClassAvailableFutureText)`
  color: "#858A8D";
`;

const ClassAvailableNow = () => {
  return <ClassAvailableNowText>바로 수강 가능</ClassAvailableNowText>;
};

export default ClassAvailableNow;
