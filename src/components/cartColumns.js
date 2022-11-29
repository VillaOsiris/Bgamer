import React from "react";
import styled from "styled-components";
const CartColumns = () => {
  return (
    <Wrapper>
      <div className="content">
        <h4>item</h4>
        <h4>price</h4>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  .content {
    display: grid;
    grid-template-columns: 3fr 1fr auto;
    justify-items: center;
  }
  span {
    width: 2rem;
    height: 2rem;
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`;

export default CartColumns;
