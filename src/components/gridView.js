import React from "react";
import styled from "styled-components";
import Product from "./product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  img {
    height: 250px;
  }

  .products-container {
    display: grid;
    margin-top: 3rem;
    gap: 2rem 4rem;
    justify-content: center;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;

export default GridView;
