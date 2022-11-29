import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/funtions";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Product = ({ poster_image, name, price, id }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={poster_image} alt={name} />
        <Link to={`/shop/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <p>{name}</p>
        <p className="price">{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  .container {
    position: relative;
    background: black;
    border-radius: 5px;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 25px;
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 2rem;
      color: white;
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 2rem;
    & > p {
      font-size: var(--txt-xs);
      margin: 1rem;
    }
  }
  .price {
    font-weight: bold;
  }
`;
export default Product;
