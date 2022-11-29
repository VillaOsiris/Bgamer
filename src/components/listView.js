import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/funtions";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, poster_image, name, genre, price, description } = product;
        return (
          <article key={id}>
            <div className="container">
              <img src={poster_image} alt={name} />
              <Link to={`/shop/${id}`} className="link">
                <FaSearch />
              </Link>
            </div>
            <div>
              <h3>{name}</h3>
              <h4>
                {genre.map((item, id) => (
                  <span key={id}>{item} </span>
                ))}
              </h4>
              <p>{description.substring(0, 300)}...</p>
              <h4 className="price">{formatPrice(price)}</h4>
              <Link to={`/shop/${id}`} className="btn">
                details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  .container {
    position: relative;
    background: black;
    width: 200px;
    height: 250px;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
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
    transition: all 0.3s linear;
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
  .container {
  }

  h3 {
    margin-bottom: 1.5rem;
  }
  h4 {
    margin-bottom: 1.5rem;
  }
  .price {
    margin-bottom: 1.5rem;
  }
  p {
    max-width: 75ch;
    line-height: 1.3;
    margin-bottom: 1rem;
    height: 95px;
  }
  .btn {
    width: 150px;
    margin-left: -0.75rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: min-content 1fr;
      column-gap: 3rem;
    }
  }
`;

export default ListView;
