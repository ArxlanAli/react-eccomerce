import React, { useState, useMemo, useEffect } from "react";
import SingleProduct from "../single-product/single-product";
import styles from "./productList.module.css";
import { MdViewList, MdViewModule, MdViewComfy } from "react-icons/md";
import Pagination from "@material-ui/lab/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../store/actions/products";

const ProductList = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  // console.log(products);
  const dispacthActions = useDispatch();

  useEffect(() => {
    dispacthActions(fetchProducts());
  }, [dispacthActions]);

  const [productperRow, setProductRow] = useState(3);

  const productClassName = useMemo(() => {
    return productperRow === 4
      ? styles.productRow
      : productperRow === 3
      ? styles.productRow3
      : styles.productRow1;
  }, [productperRow]);

  const pageChange = (_, pageNumber) => {
    console.log(pageNumber);
  };

  return (
    <React.Fragment>
      {isLoading ? <p>Fetching</p> : <p>Fetched</p>}
      <div className={styles.mainList}>
        <div className={styles.filterRow}>
          <div>Sorting items</div>
          <div>
            <MdViewList
              size={25}
              className={styles.icons}
              onClick={() => setProductRow(1)}
            />
            <MdViewModule
              size={25}
              className={styles.icons}
              onClick={() => setProductRow(3)}
            />
            <MdViewComfy
              size={25}
              className={styles.icons}
              onClick={() => setProductRow(4)}
            />
          </div>
        </div>
        <div className={productClassName}>
          {products.map((product) => (
            <SingleProduct key={product.id} />
          ))}
        </div>
        {!isLoading && products.length === 0 && (
          <div className={styles.noItem} style={{ paddingTop: "50px" }}>
            <div
              className={styles.noItemMessage}
              style={{ textTransform: "uppercase" }}
            >
              YOU HAVE NO Matching PRODUCTS
            </div>
          </div>
        )}
        <div className="paginationRow">
          <Pagination
            count={Math.ceil(products.length / 10)}
            onChange={pageChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
