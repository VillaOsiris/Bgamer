import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <h1>LOADING!!!</h1>
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
`;

export default Loading;
