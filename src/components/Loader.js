import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 11;
  left: 50%;
  transform: translateX(-40px);
  width: 80px;
  border-radius: 50%;
  background-color: #f6c84b;
  font-weight: 700;
  color: #444;
  padding: 10px 0px;
  box-shadow: 0px 0px 40px 2px #444;

  span {
    padding: 5px 0px;
    font-size: 14px;
  }

  i {
    animation: ${spin} 1s linear infinite;
    font-size: 24px;
  }
`;

export default ({ current, length, scrollY }) => (
  <Loader style={{ top: window.innerHeight / 2 + scrollY / 2 }}>
    <span>
      <i class="fas fa-cut" />
    </span>
    <span>
      {current} / {length}
    </span>
  </Loader>
);
