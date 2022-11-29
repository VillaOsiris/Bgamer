import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/funtions";
import { useCartContext } from "../context/cart_context";

const CheckoutPage = () => {
  const { cart, total_price } = useCartContext();

  return (
    <main>
      <Wrapper>
        {cart.length < 1 ? (
          <div className="empty">
            <h2>No items in cart</h2>
            <Link to="/shop" className="btn">
              Back to Shop
            </Link>
          </div>
        ) : (
          <div className="pay">
            <h2>Hello, Gamer!</h2>
            <p>
              Your total order is: <span>{formatPrice(total_price)}</span>
            </p>
            <p>Choose your payment method:</p>
            <form>
              <div>
                <img src="./visa.png" alt="visa logo"></img>
                <input type="radio" name="pay" />
              </div>
              <div>
                <img src="./mastercard.png" alt="mastercard logo"></img>
                <input type="radio" name="pay" />
              </div>
              <div>
                <img src="./maestro.png" alt="maestro logo"></img>
                <input type="radio" name="pay" />
              </div>
              <div>
                <img src="./paypal.png" alt="paypal logo"></img>
                <input type="radio" name="pay" />
              </div>
            </form>
            <Link to="/" className="btn">
              Continue Payment
            </Link>
          </div>
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  height: calc(90vh - 6rem);
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
  .pay {
    background: gray;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
    border: 2px solid white;
    border-radius: 25px;
  }
  img {
    height: 30px;
  }
  span {
    font-size: var(--txt-s);
    font-weight: bold;
    color: var(--clr-primary);
    text-decoration: underline;
  }

  form {
    display: flex;
    gap: 2rem;
    font-size: var(--txt-xxs);
    margin: 1rem 0 1rem 0;
    & > div {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
  }
`;
export default CheckoutPage;

// MODAL

//         <article>
//           <h4>Thank you</h4>
//           <h4>Your payment was successful!</h4>
//           <h4>Redirecting to home page shortly</h4>
// <Link to="/" className="btn">
//   Home
// </Link>;
//         </article>
