import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./cartColumns";
import CartItem from "./cartItem";
import CartTotals from "./cartTotals";
const CartItems = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/shop" className="btn">
          back to shop
        </Link>
        <button type="button" className="btn clear" onClick={clearCart}>
          clear cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 70vw;
  margin: 3rem auto;
  .link-container {
    display: flex;
    justify-content: space-between;
    margin: 2rem 3rem;

    & > .clear {
      font-size: 1.2rem;
      width: 210px;
    }
  }
`;
export default CartItems;
