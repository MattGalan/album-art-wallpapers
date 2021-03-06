import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Colors from "../Colors";

const slide = keyframes`
  0% { transform: translateY(-18px) rotate(7deg) }
  25%   { transform: translateY(18px) rotate(-2deg) }
  50% { transform: translateY(-18px) rotate(-7deg) }
  75%   { transform: translateY(18px) rotate(2deg)}
  100%   { transform: translateY(-18px) rotate(7deg)}
`;

const slide2 = keyframes`
  0% { transform: translateY(25px) rotate(-7deg) }
  25%   { transform: translateY(-25px) rotate(2deg) }
  50% { transform: translateY(25px) rotate(7deg) }
  75%   { transform: translateY(-25px) rotate(-2deg)}
  100%   { transform: translateY(25px) rotate(-7deg)}
`;

const StyledDiv = styled.div`
  width: 100%;
  position: relative;
  transform: scale(0.5);

  .rect {
    position: absolute;
    top: calc(50% - 33.75px);
    left: calc(50% - 60px);
    aspect-ratio: 16 / 9;
    width: 120px;
    background: ${Colors.white};
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px #15152d77;
    animation: ${slide} 1.5s ease-in-out infinite;
  }

  .square {
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    aspect-ratio: 1 / 1;
    width: 40px;
    background: ${Colors.pink};
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px #15152d77;
    animation: ${slide2} 1.5s ease-in-out infinite;
  }
`;

function Loading() {
  return (
    <StyledDiv className="loading">
      <div className="rect" />
      <div className="square" />
    </StyledDiv>
  );
}

export default Loading;
