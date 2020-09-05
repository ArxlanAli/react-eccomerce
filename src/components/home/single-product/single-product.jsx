import React from "react";
import styles from "./single-product.module.css";
import { Link } from "react-router-dom";
import productImage from "../../../images/headphone.png";

const SingleProduct = () => {
  return (
    <React.Fragment>
      <div className={styles.card}>
        <div className={styles.productImage}>
          <Link to="/home/products">
            <img
              src={productImage}
              alt="headphone here"
              className={styles.imageProperty}
            />
          </Link>
        </div>
        <div className={styles.productDetail}>
          <p>CategoryName </p>
          <h4>productName</h4>
          <div className={styles.cartRow}>
            <p>RS 1500</p>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleProduct;
