import React from "react";
import styled from "styled-components";
import img from "../assets/img/about.webp";

const About = () => {
  return (
    <Wrapper className="section">
      <div className="content">
        <h1 className="title">ABOUT US</h1>
        <p>
          Here at Bgamer have taken the passion for games and created a truly
          innovative service that puts gamers first.
          <br /> Our main focus is to building up a community that shares this
          enthusiasm and do our best to provide you with the best experience,
          friendship, a variety of content, games and the most recent news.
          <br /> We believe that more than a brand or business, we want to
          become a way of life that shows the world what trully means to be a
          gamer.
        </p>
      </div>
      <img src={img} alt="cyberpunk figure" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 80vw;
  height: calc(90vh - 11rem);
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;

  .title {
    text-align: left;
    text-shadow: 0 0 12px var(--clr-white);
    margin-bottom: 3rem;
  }
  .content {
    padding-left: 4rem;
  }
  p {
    width: 65ch;
    font-size: var(--txt-s);
  }
  img {
    height: 500px;
  }
`;

export default About;
