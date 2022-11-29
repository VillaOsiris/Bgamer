import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { CartProvider } from "./context/cart_context";
import { FilterProvider } from "./context/filter_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

// dev - ndmoqi6y.eu.auth0.com
// xhO65JvVn9Bq7rz3dzs3A57vYGVveLe7
// http://localhost:3000

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-ndmoqi6y.eu.auth0.com"
    clientId="xhO65JvVn9Bq7rz3dzs3A57vYGVveLe7"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <React.StrictMode>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </React.StrictMode>
    </UserProvider>
  </Auth0Provider>
);
