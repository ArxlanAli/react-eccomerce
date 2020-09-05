import React from "react";
import styles from "./product.module.css";
import ProductList from "../product-list/productList";
import ProductSidebar from "../product-sidebar/productSidebar";
// import { useDispatch } from "react-redux";
// import { SUCCESS, INFO, WARNING, ERROR } from "../../../core/errorTypes";

const Products = () => {
  // const dispatchError = useDispatch();

  // setTimeout(() => {
  //   dispatchError({
  //     type: "SHOW_ERROR",
  //     error: Math.random().toFixed(36).substring(2),
  //     severity: WARNING,
  //   });
  // }, 5000);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <ProductSidebar />
        </div>
        <div className={styles.mainList}>
          <ProductList />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
