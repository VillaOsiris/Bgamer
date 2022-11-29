import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/funtions";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartTotals = () => {
  const { total_price } = useCartContext();
  const { myUser, login, loginWithPopup } = useUserContext();

  return (
    <Wrapper>
      <div>
        <article>
          <hr />
          <h4>
            Order Total: <span>{formatPrice(total_price)}</span>
          </h4>
          {myUser ? (
            <Link to="/checkout" className="btn">
              checkout
            </Link>
          ) : (
            <button onClick={loginWithPopup} className="btn">
              login
            </button>
          )}
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 70vw;
  display: flex;
  justify-content: flex-end;
  padding: 0 3rem;

  article {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default CartTotals;
