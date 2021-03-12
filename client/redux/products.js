const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = (products) => ({ type: GET_PRODUCTS, products });

export default function productsReducer(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
