import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./gridView";
import ListView from "./listView";
const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return <h5 style={{ textTransform: "none" }}>No match found.</h5>;
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
};

export default ProductList;
