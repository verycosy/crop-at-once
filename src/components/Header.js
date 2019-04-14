import React from "react";
import styled, { keyframes } from "styled-components";

const Header = styled.header``;

const Title = styled.h1`
  margin-top: 30px;
  font-size: 32px;
  font-weight: 700;
`;

const SampleContainer = styled.div`
  margin-top: 40px;
`;

const cutframes = keyframes`
  from {
    background-color: red;
    opacity:0.5;
  }

  to {
    background-color: hsl(70, 0%, 15%);
    opacity:1;
  }
`;

const Cutter = styled.div`
  height: 16px;
  position: absolute;
  z-index: 10;
  width: 726px;
  animation: ${cutframes} 2.5s infinite;
`;

const SampleImg = styled.img`
  height: 400px;

  &:nth-child(3) {
    margin: 0px 10px;
  }
`;

const Description = styled.p`
  margin: 10px 0px;
`;

export default () => (
  <Header>
    <SampleContainer>
      <Cutter />
      <SampleImg src="/sample/1.png" />
      <SampleImg src="/sample/2.png" />
      <SampleImg src="/sample/3.png" />
      <Cutter style={{ height: "36px", marginTop: "-36px" }} />
    </SampleContainer>

    <Title>Crop At Once</Title>
    <Description>Please upload same height images</Description>
  </Header>
);
