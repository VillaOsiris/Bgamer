import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar, SideBar, Footer } from "./components";
import {
  About,
  AuthWrapper,
  Cart,
  Checkout,
  Error,
  Home,
  SingleProduct,
  Products,
  PrivateRoute,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="Bgamer/" element={<Home />} />
        <Route path="Bgamer/about" element={<About />} />
        <Route path="Bgamer/cart" element={<Cart />} />
        <Route path="Bgamer/shop" element={<Products />} />
        <Route path="Bgamer/shop/:id" element={<SingleProduct />} />
        <Route
          path="Bgamer/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
