import React from "react";
import styled from "styled-components";
import BG from "../assets/crypto.jpg";

const Service = () => {
  return (
    <Wrapper>
      <div className="content">
        <h3>
          Best Cloud-Gamming Service <br />
          Fast and Secure gameplay.{" "}
        </h3>
        <p>
          We provide you with the oportunity to play your favourite games, at
          ultra graphics, unbelievable frames ratios and no delay with our cloud
          based gamming platform, no need to worry about your own hardware!
        </p>
        <p>
          <span>
            "You can't play the lastest games, because your computer is a
            toaster?? <br />
            Not Anymore !!!"
          </span>
        </p>
        <p>
          All you need to do is to have a stable internet connection and
          subscribe to our service for only <span>€9,99 /month</span> .
        </p>
        <button className="btn">sign up</button>
      </div>
      <img src={BG} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 3rem;
  gap: 3rem;
  color: white;

  h3 {
    text-shadow: 0 0 9px var(--clr-secondary);
    margin-bottom: 2.5rem;
  }

  p {
    width: 80ch;
    margin-bottom: 2rem;
    line-height: 1.3;
    font-size: var(--txt-s);
  }

  button {
    width: 150px;
  }
  span {
    color: yellow;
  }
  img {
    max-height: 400px;
    border-radius: 25px;
  }
`;

export default Service;
