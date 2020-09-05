import { put, takeEvery, call } from "redux-saga/effects";
import { fetchProducts } from "./productService";
import { ERROR } from "../../../core/errorTypes";

function* fetchProductsAsync(action) {
  try {
    const result = yield call(fetchProducts);
    console.log(result);
    yield put({ type: "FETCHED_PRODUCTS", data: result });
  } catch (error) {
    yield put({ type: "", error: error.message, severity: ERROR });
  }
}

export function* watchFetchProducts() {
  yield takeEvery("FETCH_PRODUCTS_ASYNC", fetchProductsAsync);
}
