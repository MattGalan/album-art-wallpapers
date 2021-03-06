import React, { useState } from "react";
import styled from "styled-components";
import Colors from "../Colors";
import Slider from "./Slider";
import BackgroundTypeButton from "./BackgroundTypeButton";
import NakedButton from "../NakedButton";
import ResolutionField from "./ResolutionField";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 500px;
  height: 100%;
  background: #000000aa;
  color: ${Colors.white};
  padding: 20px 40px 0 40px;
  box-sizing: border-box;

  h2 {
    margin-top: 60px;
    font-weight: normal;
    color: ${Colors.pink};
    font-size: 16px;
  }

  .background-type-buttons {
    display: flex;
  }

  .bottom-buttons {
    flex: 1;
    display: flex;
    align-items: flex-end;
    margin-bottom: 40px;

    button {
      padding: 16px;
      flex: 1;
      border-radius: 4px;

      &:first-child {
        border: 1px solid ${Colors.white};
        margin-right: 16px;
      }

      &:last-child {
        background-color: ${Colors.pink};
        color: ${Colors.black};
        font-weight: bold;
      }
    }
  }
`;

const BackgroundTypes = {
  AUTO: "AUTO",
  BLUR: "BLUR",
  CUSTOM: "CUSTOM",
};

function Sidebar({ config, updateConfig }) {
  const updateBackgroundType = (bkgType) => () =>
    updateConfig("backgroundType", bkgType);

  return (
    <StyledDiv>
      <h1>Make it yours.</h1>

      <h2>RESOLUTION</h2>
      <ResolutionField />

      <h2>BACKGROUND</h2>
      <div className="background-type-buttons">
        <BackgroundTypeButton
          title="AUTO"
          active={config.backgroundType === BackgroundTypes.AUTO}
          onClick={updateBackgroundType(BackgroundTypes.AUTO)}
        />
        <BackgroundTypeButton
          title="BLUR"
          active={config.backgroundType === BackgroundTypes.BLUR}
          onClick={updateBackgroundType(BackgroundTypes.BLUR)}
        />
        <BackgroundTypeButton
          title="CUSTOM"
          active={config.backgroundType === BackgroundTypes.CUSTOM}
          onClick={updateBackgroundType(BackgroundTypes.CUSTOM)}
        />
      </div>

      <h2>POSITION</h2>
      <Slider label="X-Offset" />
      <Slider label="Y-Offset" />
      <Slider label="Scale" />

      <h2>DROP SHADOW</h2>
      <Slider label="X-Offset" />
      <Slider label="Y-Offset" />
      <Slider label="Blur" />

      <h2>VIGNETTE</h2>
      <Slider label="Size" />
      <Slider label="Blur" />
      <Slider label="Opacity" />

      <div className="bottom-buttons">
        <NakedButton>Switch Album</NakedButton>
        <NakedButton>DOWNLOAD</NakedButton>
      </div>
    </StyledDiv>
  );
}

export default Sidebar;
