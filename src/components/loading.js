import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="spinner--container">
        <div className="spinner">Loading</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  height: 80vh;
  width: 100%;

  .spinner--container {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .spinner {
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    overflow: hidden;
    position: relative;
    animation: text-color 2s ease-in-out infinite alternate;
  }

  .spinner::after,
  .spinner::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 15px solid transparent;
    mix-blend-mode: lighten;
    animation: rotate var(--duration) var(--timming) infinite;
    pointer-events: none;
    z-index: 99;
  }

  .spinner::after {
    border-top-color: #252553;
    --duration: 1s;
    --timming: ease-in;
  }

  .spinner::before {
    border-bottom-color: yellow;
    --duration: 1s;
    --timming: ease-in;
  }

  @keyframes text-color {
    0%,
    100% {
      color: rgb(255, 255, 255, 1);
    }

    25%,
    75% {
      color: rgb(255, 255, 255, 0.5);
    }

    50% {
      color: rgb(255, 255, 255, 0.1);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
