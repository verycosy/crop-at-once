import React from "react";
import styled, { keyframes } from "styled-components";
import sample1 from "../sample/1.png";
import sample2 from "../sample/2.png";
import sample3 from "../sample/3.png";

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
    background-color: #d3394c;
    opacity:0.5;
  }

  to {
    background-color: hsl(70, 0%, 15%);
    opacity:1;
  }
`;

const Cutter = styled.div`
  height: 16px;
  position: relative;
  margin: 0 auto;
  width: 726px;
  animation: ${cutframes} 1.2s infinite;
  animation-direction: alternate;
`;

const SampleImg = styled.img`
  height: 400px;
  margin-top: -16px;

  &:nth-child(3) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const Description = styled.p`
  margin: 10px 0px;
`;

export default () => (
  <Header>
    <SampleContainer>
      <Cutter />
      <SampleImg src={sample1} />
      <SampleImg src={sample2} />
      <SampleImg src={sample3} />
      <Cutter style={{ height: "36px", marginTop: "-36px" }} />
    </SampleContainer>

    <Title>Crop At Once</Title>
    <Description>Please upload same height images.</Description>
  </Header>
);
