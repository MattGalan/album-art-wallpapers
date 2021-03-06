import React from "react";
import styled from "styled-components";
import Colors from "../Colors";
import NakedButton from "../NakedButton";

const StyledButton = styled(NakedButton)`
  flex: 1;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid ${Colors.white};
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }

  .radio-header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  .circle {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid ${Colors.white};
    border-radius: 50%;
    margin-right: 8px;
    box-sizing: border-box;
    /* ${(props) => (props.active ? `background: ${Colors.white};` : "")} */
    ${(props) => (props.active ? `border-width: 10px;` : "")}
    transition: border-width .25s;
  }
`;

function BackgroundTypeButton({ title, onClick, active, children }) {
  return (
    <StyledButton onClick={onClick} active={active}>
      <div className="radio-header">
        <div className="circle" />
        <span>{title}</span>
      </div>
      {children}
    </StyledButton>
  );
}

export default BackgroundTypeButton;
