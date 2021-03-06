import React, { useState, useEffect } from "react";
import Jimp from "jimp";
import styled from "styled-components";
import anime from "animejs";
import Loading from "./Loading";

const width = 1920;
const halfWidth = width / 2;
const height = 1080;
const halfHeight = height / 2;
const albumSize = 640;
const halfAlbum = albumSize / 2;
const shadowColor = "#000000";
const url = "https://i.scdn.co/image/ab67616d0000b273442b53773d50e1b5369bb16c";

const StyledDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;
  position: relative;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    ${(props) => props.$loading && `filter: brightness(0.5) blur(4px);`}
    transition: filter .5s;
  }

  .loading {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: ${(props) => (props.$loading ? 1 : 0)};
    transition: opacity 1s;
  }
`;

function insideEllpise(x, y, rx, ry, h, k) {
  return (
    Math.pow(x - h, 2) / Math.pow(rx, 2) +
      Math.pow(y - k, 2) / Math.pow(ry, 2) <=
    1
  );
}

const generateVignette = (size, blur, opacity) =>
  new Promise(
    (resolve) =>
      new Jimp(width, height, (err, vignette) => {
        for (let x = 0; x < width; x++) {
          for (let y = 0; y < height; y++) {
            const colorToUse = insideEllpise(
              x,
              y,
              halfWidth * size,
              halfHeight * size,
              halfWidth,
              halfHeight
            )
              ? 0x00000000
              : 0x000000ff;
            vignette.setPixelColor(colorToUse, x, y);
          }
        }

        vignette.blur(blur);
        vignette.opacity(opacity);

        resolve(vignette);
      })
  );

const generateShadow = (xOffset, yOffset, blur, opacity, color) =>
  new Promise((resolve) => {
    const shadow = new Jimp(albumSize, albumSize, color);

    new Jimp(width, height, (err, shadowContainer) => {
      shadowContainer
        .blit(
          shadow,
          halfWidth - halfAlbum + xOffset,
          halfHeight - halfAlbum + yOffset
        )
        .blur(blur)
        .opacity(opacity);

      resolve(shadowContainer);
    });
  });

const generateAutoBackground = (image) =>
  new Promise(
    (resolve) =>
      new Jimp(
        width,
        height,
        image.clone().resize(1, 1).getPixelColor(0, 0),
        (err, autoBackground) => resolve(autoBackground)
      )
  );

function Preview({ config }) {
  const [dataUri, setDataUri] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function generate() {
      const album = await Jimp.read(url);
      const autoBackground = await generateAutoBackground(album);
      const vignette = await generateVignette(1, 200, 0.75);
      const shadow = await generateShadow(0, 2, 4, 0.5, 0x000000ff);

      await autoBackground
        .blit(vignette, 0, 0)
        .blit(shadow, 0, 0)
        .blit(album, halfWidth - halfAlbum, halfHeight - halfAlbum)
        .getBase64Async(Jimp.MIME_PNG)
        .then((uri) => {
          setDataUri(uri);
          setLoading(false);
        });

      // anime({
      //   targets: ".wallpaper-preview",
      //   keyframes: [
      //     { scale: 0.75, opacity: 0, duration: 0 },
      //     { opacity: 1, scale: 1 },
      //   ],
      //   duration: 2000,
      //   easing: "easeOutQuart",
      // });
    }

    setLoading(true);
    generate();
  }, [config.backgroundType]);

  return (
    <StyledDiv $loading={loading}>
      {dataUri && (
        <img
          src={dataUri}
          className="wallpaper-preview"
          alt="Wallpaper preview"
        />
      )}

      <Loading />
    </StyledDiv>
  );
}

export default Preview;
