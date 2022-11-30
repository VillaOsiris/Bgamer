import React from "react";
import styled from "styled-components";
import logo from "../assets/Bgamer_Logo.png";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartLink from "./cartLink";
import { FaBars } from "react-icons/fa";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const NavBar = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <NavWrapper>
      <div className="nav--center">
        <div className="nav--header">
          <Link to="Bgamer/">
            <img src={logo} alt="bee gamer" />
          </Link>
          <button type="button" className="nav--toggle">
            <FaBars onClick={openSidebar} />
          </button>
        </div>
        <ul className="nav--links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <CartLink />
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: end;

  .nav--center {
    width: 90vw;
    margin: 0 auto;
  }
  .nav--header {
    display: flex;
    justify-content: space-between;
    img {
      height: 4rem;
    }
  }

  .nav--links {
    & > li > a {
      font-size: var(--txt-s);
      transition: 0.2s;

      &:hover {
        text-shadow: 0 0 9px rgb(37 146 238 / 90%);
      }
    }
  }

  .nav--toggle {
    background: transparent;
    border: transparent;
    color: var(--color-primary);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .cart--btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav--toggle {
      display: none;
    }
    .nav--center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav--links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: white;
        text-shadow: 0 0 12px var(--color-secondary);
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 3px solid var(--color-secondary);
        }
      }
    }
    .cart--btn-wrapper {
      display: grid;
    }
  }
`;

export default NavBar;
