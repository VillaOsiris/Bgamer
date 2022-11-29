import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/funtions";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, image, name, price }) => {
  const { removeItem } = useCartContext();

  return (
    <Wrapper>
      <div className="title">
        <div className="container">
          <img src={image} alt={name} />
        </div>
        <h4 className="name">{name}</h4>
      </div>
      <h4 className="price">{formatPrice(price)}</h4>
      <button className="remove-btn" onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 70vw;
  display: grid;
  grid-template-columns: 50% 40% auto;
  align-items: center;
  grid-template-rows: 150px;
  justify-items: center;
  padding: 2rem;

  .title {
    display: flex;
    width: 90%;
    justify-content: left;
    align-items: center;
    gap: 3rem;
  }
  .container {
    background: black;
    width: 100px;
    height: 100%;
    border-radius: 5px;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 25px;
  }
  .price {
    margin-left: auto;
    font-weight: 400;
  }

  .remove-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    width: 3rem;
    height: 3rem;
    font-size: var(--txt-s);
    color: var(--clr-primary);
    cursor: pointer;
    &:hover {
      color: orangered;
    }
`;

export default CartItem;
