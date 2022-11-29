import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { useProductsContext } from "../context/products_context";
import Loading from "./loading";
import Error from "./error";

const ShopRow = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper>
      <h2>Featured</h2>
      <div className="row">
        <div className="row_list">
          {featured.map((game) => {
            return (
              <Link key={game.id} to={`/shop/${game.id}`} className="item">
                <img src={game.poster_image} className="poster_img" />
              </Link>
            );
          })}
        </div>
      </div>
      <Link to="/shop" className="shop-link">
        <p>
          Explore<span> more </span>Games
        </p>
        <HiOutlineChevronDoubleRight />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1rem;
  h2 {
    margin-left: 3rem;
  }
  .row {
    overflow-x: hidden;
    padding: 0 3rem;
  }
  .row_list {
    display: flex;
  }
  .item {
    width: 150px;
  }
  .poster_img {
    cursor: pointer;
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
    &:hover {
      transform: scale(1);
    }
  }
  .shop-link {
    display: flex;
    align-items: center;
    margin-left: 3rem;
    color: white;
    letter-spacing: var(--spacing);
    transition: 0.35s;
    font-size: 1.4rem;
    &:hover {
      text-shadow: 0 0 12px var(--clr-white);
    }
  }
  span {
    color: yellow;
  }
  svg {
    margin: 0.3rem 0 0 0.5rem;
  }
`;

export default ShopRow;
