import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>
          4<span>0</span>4
        </h1>
        <h3>Webpages? Where we're going, we don't need webpages.</h3>
        <h6>Dr. Emmett Brown, Back to the Future (1985)</h6>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  span {
    color: black;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  h6 {
    text-align: right;
    color: lightgrey;
  }
`;

export default ErrorPage;
