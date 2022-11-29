import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <h1>SOMETHING WENT WRONG!!!</h1>
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

export default Error;
