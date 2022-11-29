import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()}
        <span> Bgamer </span>
        Meeh... no rights to reserve.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 10vh;
  border-top: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: var(--clr-primary);
  }
`;

export default Footer;
