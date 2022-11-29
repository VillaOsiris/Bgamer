import React from "react";
import styled from "styled-components";
import { BsEmojiFrown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContent } from "../components";
import { useCartContext } from "../context/cart_context";

const Cart = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className="empty">
          <h1>Your cart is empty!</h1>
          <BsEmojiFrown className="sad" />
          <Link to="/shop" className="btn">
            Back to Shop
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <CartContent />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .empty {
    height: calc(90vh - 6rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .sad {
    font-size: 12rem;
    margin: 5rem;
  }
  .btn {
    width: 200px;
    padding: 1rem 2rem;
    font-size: var(--txt-s);
  }
`;

export default Cart;
