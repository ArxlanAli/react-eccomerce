export const FETCHED_PRODUCTS_ASYNC = "FETCH_PRODUCTS_ASYNC";
export const FETCHED_PRODUCTS = "FETCHED_PRODUCTS";

export const fetchProducts = () => {
  return {
    type: FETCHED_PRODUCTS_ASYNC,
  };
};
