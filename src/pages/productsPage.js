import styled from "styled-components";
import { Filters, ProductList, Sort } from "../components";
const ProductsPage = () => {
  return (
    <main>
      <Wrapper>
        <div className="products">
          <div>
            <Sort />
            <ProductList />
          </div>
          <Filters />
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    margin: 4rem 4rem 2rem 6vw;
    gap: 6rem;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 1fr 15vw;
    }
  }
`;

export default ProductsPage;
