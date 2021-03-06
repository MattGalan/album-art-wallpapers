import React, { useState } from "react";
import styled from "styled-components";
import SearchSVG from "./search.svg";
import NakedButton from "./NakedButton";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 300px;
  padding: 12px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px #15152d;
  background: #ffe8e9;
  margin-bottom: 20px;

  input {
    flex: 1;
    font-family: "Archivo", sans-serif;
    font-size: 18px;
    border: none;
    background: none;
    outline: none;

    ::placeholder {
      color: #15152dbb;
    }
  }

  img {
    margin-right: 4px;
  }
`;

function TextField({ sendSearch }) {
  const [text, setText] = useState("");
  return (
    <StyledDiv>
      <input
        placeholder="Search Spotify albums"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            sendSearch(text);
            setText("");
          } else if (key === "Escape") {
            setText("");
          }
        }}
      />
      <NakedButton onClick={() => sendSearch(text)}>
        <img src={SearchSVG} />
      </NakedButton>
    </StyledDiv>
  );
}

export default TextField;
