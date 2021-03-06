import React from "react";
import styled from "styled-components";
import Colors from "../Colors";

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;

  .dimension {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  label {
    margin-top: 4px;
    font-size: 12px;
    opacity: 50%;
  }

  span {
    margin: 8px 8px 0 8px;
  }

  input {
    background: none;
    border: none;
    border-bottom: 1px solid ${Colors.white};
    color: ${Colors.white};
    padding: 4px;
    font-size: 16px;
    width: 80px;
    text-align: center;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

function ResolutionField({ onChange }) {
  return (
    <StyledDiv>
      <div className="dimension">
        <input type="number" id="width" name="width" />
        <label htmlFor="width">WIDTH</label>
      </div>
      <span>x</span>
      <div className="dimension">
        <input type="number" id="height" name="height" />
        <label htmlFor="height">HEIGHT</label>
      </div>
    </StyledDiv>
  );
}

export default ResolutionField;
