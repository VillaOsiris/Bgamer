import React from "react";
import styled from "styled-components";
import {
  FaTwitch,
  FaDiscord,
  FaYoutube,
  FaRedditAlien,
  FaTwitter,
} from "react-icons/fa";

const Community = () => {
  return (
    <Wrapper>
      <h2>join our Community</h2>
      <div className="socials">
        <a href="http://twitch.com" target="_blank">
          <FaTwitch />
        </a>
        <a href="http://discord.com" target="_blank">
          <FaDiscord />
        </a>
        <a href="http://youtube.com" target="_blank">
          <FaYoutube />
        </a>
        <a href="http://reddit.com" target="_blank">
          <FaRedditAlien />
        </a>
        <a href="http://twitter.com" target="_blank">
          <FaTwitter />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  h2 {
    text-transform: uppercase;
    margin: 10rem auto 14rem auto;
    text-shadow: 0 0 9px var(--clr-secondary);
  }
  .socials {
    display: flex;
    justify-content: center;
    gap: 5rem;
    font-size: 6rem;
    & > a {
      transition: ease 0.3s;
      & > svg {
        color: white;
        filter: drop-shadow(0 0 6px var(--clr-secondary));
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export default Community;
