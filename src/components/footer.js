import React from "react";
import styled from "styled-components";
import logo from "../assets/BgamerLogo.png";

const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <img
          src={logo}
          alt="Bgmaer logo"
          style={{ height: "4rem", margin: "-6px" }}
        />{" "}
        tribute to defunted Bgamer magazzine.
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
