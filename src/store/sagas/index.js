import { fork, all } from "redux-saga/effects";
import * as products from "./products/products";

export default function* rootSaga() {
  yield all([...Object.values(products)].map(fork));
}
