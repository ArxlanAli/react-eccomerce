import { FETCHED_PRODUCTS, FETCHED_PRODUCTS_ASYNC } from "../actions/products";

const initalState = {
  products: [],
  isLoading: false,
};

const productsReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCHED_PRODUCTS_ASYNC:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHED_PRODUCTS:
      return {
        ...state,
        products: action.data,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
