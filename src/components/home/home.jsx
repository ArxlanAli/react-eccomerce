import React from "react";
import Navbar from "./navbar/navbar";
import Products from "./products/product";
import Errors from "../error/error";

import { Route, Redirect } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Route path="/" render={() => <Redirect to="/home/products" />} />
      <Route path="/home/products" component={Products} />
      <Errors />
    </React.Fragment>
  );
};

export default Home;
