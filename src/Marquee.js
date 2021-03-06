import { useEffect } from "react";
import MockExample from "./mock-example.png";
import styled from "styled-components";
import anime from "animejs";

const StyledDiv = styled.div`
  position: relative;
  width: 677px;
  height: 100vh;
  margin-right: 80px;
  overflow-y: hidden;

  .marquee-items {
    position: absolute;
    top: 0;
  }

  img {
    border-radius: 8px;
    margin-bottom: 20px;
  }
`;

function Marquee() {
  useEffect(() => {
    anime({
      targets: ".marquee-items",
      top: -(381 + 20) * 8 - 20,
      easing: "linear",
      loop: true,
      duration: 5000 * 8,
      delay: anime.stagger(5000 * 8),
    });
  }, []);

  return (
    <StyledDiv>
      <div className="marquee-items">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <img src={MockExample} key={i} style={{ top: `${381 * i}px` }} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <img src={MockExample} key={i} style={{ top: `${381 * i}px` }} />
        ))}
      </div>
    </StyledDiv>
  );
}

export default Marquee;
