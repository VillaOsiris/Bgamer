import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcNext, FcPrevious } from "react-icons/fc";
import { useState, useEffect } from "react";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/funtions";
import Loading from "./loading";
import Error from "./error";

const Hero = () => {
  const [index, setIndex] = useState("game03");
  const {
    products_loading: loading,
    products_error: error,
    popular_products: popular,
    single_popular,
    fetchSinglePopular,
  } = useProductsContext();

  console.log(popular);

  useEffect(() => {
    fetchSinglePopular(index);
  }, [index]);

  const previous = () => {};

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    id,
    name,
    description,
    background_image,
    platform,
    price,
    rating,
    genre,
  } = single_popular;
  return (
    <Wrapper>
      <div className="hero" key={id}>
        <Link to={`/shop/${id}`} className="bg_img">
          <img src={background_image} alt={name} className="bg_img" />
        </Link>
        <div>
          <div className="info">
            <h3 className="name">{name}</h3>
            <h4 className="genres">
              {genre
                ? genre.map((item, id) => <span key={id}>{item} </span>)
                : null}
            </h4>
            <h4 className="store">{platform}</h4>
            <p className="description">{description}...</p>
          </div>
          <p className="rating">{rating}</p>
          <p className="price">{formatPrice(price)}</p>
        </div>
        <button className="previous">
          <FcPrevious />
        </button>
        <button className="next">
          <FcNext />
        </button>
      </div>
      <div className="slider">
        {popular.map((item) => {
          const { id, name, poster_image } = item;
          return (
            <figure key={id} onClick={() => setIndex(id)}>
              <img src={poster_image} className="poster_img" alt={name} />
              <p>{name.substring(0, 20)}</p>
            </figure>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  align-items: center;

  .hero {
    width: 75vw;
    height: 300px;
    display: flex;
    background: var(--bg-secondary);
    padding: 1rem 2rem;
    position: relative;
    border-radius: 10px;
    margin: 8rem auto;
  }

  .bg_img {
    height: 350px;
    width: 600px;
    border-radius: 10px;
    align-self: center;
  }

  .info {
    text-align: left;
    padding: 0.7rem 1.5rem;
  }
  .name {
    margin-bottom: 1rem;
  }
  .genres,
  .store {
    margin-bottom: 0.7rem;
  }

  .description {
    width: 60ch;
    line-height: 1.4;
  }

  button {
    position: absolute;
    z-index: 1;
    background: none;
    border: none;
    font-size: 4rem;
    cursor: pointer;
  }

  .previous {
    top: 43%;
    left: -7%;
  }
  .next {
    top: 43%;
    right: -7%;
  }

  .slider {
    display: flex;
    gap: 4rem;
  }

  figure {
    text-align: center;
    &:nth-child(1),
    &:nth-child(5) {
      opacity: 0.35;
      scale: 70%;
    }
    &:nth-child(2),
    &:nth-child(4) {
      opacity: 0.65;
      scale: 85%;
    }
  }

  figure > p {
    text-transform: uppercase;
  }
  .poster_img {
    height: 175px;
    border-radius: 5px;
  }
  .rating {
    position: absolute;
    top: 5%;
    right: 2%;
    height: 4rem;
    width: 4rem;
    border: 2px solid yellow;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: yellow;
    font-weight: bold;
    font-size: var(--txt-m);
    text-shadow: 0 0 12px var(--clr-white);
  }
  .price {
    position: absolute;
    bottom: 5%;
    right: 1%;
    font-size: var(--txt-s);
    font-weight: bolder;
    color: #444;
  }
`;

export default Hero;
