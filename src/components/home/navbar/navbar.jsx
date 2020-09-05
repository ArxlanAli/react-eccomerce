import React from "react";
import styles from "./navbar.module.css";
import { MdLocalGroceryStore } from "react-icons/md";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const helpLineStyle = {
    position: "relative",
  };

  const priceStyle = {
    fontSize: "18px",
    marginTop: "4px",
  };

  return (
    <React.Fragment>
      <div className={styles.navbar}>
        <div className={styles.homeHeader}>
          <div className={styles.logo}>
            <Link to="/home/products">
              <img src={logo} alt="logo here" />
            </Link>
          </div>
          <div className={styles.formSearch}>
            <div className={styles.formSearchBar}>
              <input type="text" placeholder="Type to search..." />
              <button type="submit">SEARCH</button>
            </div>
          </div>
          <div className={styles.helpline} style={helpLineStyle}>
            <MdLocalGroceryStore size={30} />
            <span className={styles.infoTotal}>4</span>
            <span style={priceStyle}>RS 1500</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
