import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Marquee from "./Marquee";
import NakedButton from "./NakedButton";
import TextField from "./TextField";
import Editor from "./editor/Editor";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 64px;
    color: #ffe8e9;
    text-shadow: 0 2px 4px #15152d;
    margin-top: 20vh;
    padding-right: 200px;
  }
`;

const SlideInAnim = keyframes`
  from {
    margin-left: 80px;
    opacity: 0;
  }

  to {
    margin-left: 0;
    opacity 1;
  }
`;

const StyledResult = styled(NakedButton)`
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: 16px;
  color: #ffe8e9;
  text-shadow: 0 1px 2px #15152d;
  opacity: 0;
  animation: ${SlideInAnim} 0.5s cubic-bezier(0.33, 1, 0.68, 1)
    ${(props) => props.index * 0.1}s forwards;

  &:hover {
    padding-left: 20px;
  }

  transition: padding-left 0.25s;

  div {
    padding-left: 16px;
  }

  p {
    margin: 8px 0;
    max-width: 500px;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p:first-child {
    font-weight: bold;
  }

  img {
    border-radius: 4px;
    height: 100px;
    width: 100px;
    box-shadow: 0px 2px 4px 0px #15152d77;
  }
`;

const fakeResults = [
  {
    artists: ["Drake"],
    name: "Views",
    image: "https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c",
  },
  {
    artists: ["Taylor Swift"],
    name: "Love Story (Taylor’s Version)",
    image: "https://i.scdn.co/image/ab67616d0000b273877ea8fa223c26f19aaef92d",
  },
  {
    artists: ["Maroon 5"],
    name: "V",
    image: "https://i.scdn.co/image/ab67616d0000b273442b53773d50e1b5369bb16c",
  },
  {
    artists: ["Lil Durk"],
    name: "The Voice",
    image: "https://i.scdn.co/image/ab67616d0000b273e67a56591cf8bcfcb1450980",
  },
  {
    artists: ["Nipsey Hussle"],
    name: "Victory Lap",
    image: "https://i.scdn.co/image/ab67616d0000b273ac271e5d670e92c42bf99237",
  },
];

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendSearch = (query) => {
    setLoading(true);
    fetch(`http://localhost:5000?q=${encodeURIComponent(query)}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setResults(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    // <StyledDiv>
    //   <Marquee />
    //   <header>
    //     <h1>
    //       From album art to
    //       <br />
    //       wallpaper in seconds.
    //     </h1>
    //     <TextField sendSearch={sendSearch} />
    //     {loading && <div>Loading...</div>}

    //     {!loading &&
    //       results.map((r, i) => (
    //         <StyledResult className="result" key={`${r.name}-${i}`} index={i}>
    //           <img src={r.image} />
    //           <div>
    //             <p>{r.name}</p>
    //             <p>{r.artists.join(", ")}</p>
    //           </div>
    //         </StyledResult>
    //       ))}
    //   </header>
    // </StyledDiv>
    <Editor />
  );
}

export default App;
