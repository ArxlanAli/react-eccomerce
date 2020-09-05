import { combineReducers } from "redux";
import products from "../reducers/products";
import errors from "../reducers/error";

export default combineReducers({
  products,
  errors,
});
