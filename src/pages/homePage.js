import styled from "styled-components";
import { Hero, ShopRow, Service, Community } from "../components";

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <ShopRow />
      <Service />
      <Community />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
`;

export default Home;
