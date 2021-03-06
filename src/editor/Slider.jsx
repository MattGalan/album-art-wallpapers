import React from "react";
import styled from "styled-components";
import Colors from "../Colors";
import NakedButton from "../NakedButton";
import ResetSVG from "../rotate-ccw.svg";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  label {
    width: 70px;
  }

  input {
    flex: 1;
    margin: 0 16px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 15px;
      height: 15px;
      border: 1px solid black;
    }
  }
`;

function Slider({ label, onChange }) {
  return (
    <StyledDiv>
      <label htmlFor={label}>{label}</label>
      <input type="range" id={label} name={label} />
      <NakedButton>
        <img src={ResetSVG} />
      </NakedButton>
    </StyledDiv>
  );
}

export default Slider;
