import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, product } = action.payload;
    const newItem = {
      id: id,
      name: product.name,
      image: product.poster_image,
      price: product.price,
    };
    return { ...state, cart: [...state.cart, newItem] };
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_price } = state.cart.reduce(
      (total, cartItem) => {
        const { price } = cartItem;
        total.total_items += 1;
        total.total_price += Number(price);
        return total;
      },
      { total_items: 0, total_price: 0 }
    );
    return { ...state, total_items, total_price };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
