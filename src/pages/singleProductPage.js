import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/funtions";
import { Loading, Error, AddToCart } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: game,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    description,
    publisher,
    poster_image,
    released,
    platform,
    price,
    rating,
    genre,
  } = game;

  return (
    <Wrapper>
      <div className="container">
        <Link to="/shop" className="btn">
          back to Shop
        </Link>
        <div className="content">
          <img src={process.env.PUBLIC_URL + poster_image} alt={name} />
          <section className="content-info">
            <h2 className="name">{name}</h2>
            <h2 className="rating">{rating}</h2>
            <h4 className="price">{formatPrice(price)}</h4>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Genre : </span>
              {genre
                ? genre.map((item, id) => <span key={id}>{item} </span>)
                : null}
            </p>
            <p className="info">
              <span>Platform : </span>
              {platform}
            </p>
            <p className="info">
              <span>Publisher : </span>
              {publisher}
            </p>
            <p className="info">
              <span>Release : </span>
              {released}
            </p>
            <hr />
            <AddToCart product={game} />
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: calc(90vh - 15rem);

  .container {
    width: 65%;
    position: relative;
    margin: 6rem auto 3rem auto;
    border: 3px solid yellow;
    border-radius: 30px;
    box-shadow: 0 0 5px 1px grey;
  }
  .btn {
    width: max-content;
    margin: 2rem 0 1.5rem 2.5rem;
  }
  .add {
    position: absolute;
    width: 120px;
    bottom: 5%;
    right: 2%;
  }
  .content {
    display: flex;
    gap: 3rem;
  }
  .content-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .rating {
    position: absolute;
    top: 4%;
    right: 2%;
    height: 5rem;
    width: 5rem;
    border: 2px solid yellow;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: var(--clr-primary);
    text-shadow: 0 0 12px var(--color-secondary);
  }
  .price {
    position: absolute;
    bottom: 17%;
    right: 4%;
    font-weight: bold;
    color: #c9c9c9;
  }
  .desc {
    line-height: 1.5;
    max-width: 65ch;
    height: 200px;
  }
  .info {
    text-transform: capitalize;
    span {
      font-weight: 700;
    }
  }
  img {
    height: 400px;
    border-radius: 30px;
    margin: 0 0 2rem 2rem;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 50% 40% auto;
      align-items: center;
    }
  }
`;

export default SingleProductPage;
