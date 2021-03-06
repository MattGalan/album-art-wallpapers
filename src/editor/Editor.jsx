import React, { useState } from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Preview from "./Preview";

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
`;

function Editor() {
  const [config, setConfig] = useState({});

  const updateConfig = (key, value) => {
    setConfig({
      ...config,
      [key]: value,
    });

    const urlParams = new URL(window.location.href).searchParams;
    urlParams.set(key, value);
    window.history.replaceState(null, "", urlParams.toString());
  };

  return (
    <StyledDiv>
      <Preview config={config} />
      <Sidebar config={config} updateConfig={updateConfig} />
    </StyledDiv>
  );
}

export default Editor;
