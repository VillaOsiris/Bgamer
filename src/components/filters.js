import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/funtions";

const Filters = () => {
  const {
    filters: { text, genre, platform, min_price, price, max_price },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext();

  const genres = getUniqueValues(all_products, "genre");
  const platforms = getUniqueValues(all_products, "platform");
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              value={text}
              placeholder="search"
              onChange={updateFilters}
              className="search-input"
            />
          </div>
          {/* end of search input */}
          {/* genre */}
          <div className="form-control">
            <h4>genre</h4>
            <div>
              {genres.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="genre"
                    className={`${genre === c ? "active" : null}`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of genre */}
          {/* platform */}
          <div className="form-control">
            <h4>platform</h4>
            <select
              name="platform"
              value={platform}
              onChange={updateFilters}
              className="platform"
            >
              {platforms.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of platform */}

          {/* price */}
          <div className="form-control">
            <h4>price</h4>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 15vw;
  margin-left: auto;
  padding-left: 3rem;
  border-left: 2px solid grey;
  .form-control {
    margin-bottom: 1.25rem;
    h4 {
      margin-bottom: 2rem;
    }
  }
  .search-input {
    padding: 0.7rem;
    background: var(--clr-white);
    border-radius: 5px;
    border: none;
    letter-spacing: 1px;
    margin: 2rem 0;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }

  .clear-btn {
    background: red;
    color: var(--clr-white);
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }
`;

export default Filters;
