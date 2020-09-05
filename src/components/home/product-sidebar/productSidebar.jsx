import React from "react";
import styles from "./productSidebar.module.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { MdExpandMore } from "react-icons/md";

const ProductSidebar = () => {
  return (
    <React.Fragment>
      <div className={styles.main}>
        <Accordion style={{ marginBottom: "25px" }}>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Categories</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.matExpansionBody}>
              <ul>
                <li>
                  <button>category</button>
                  <button>category</button>
                  <button>category</button>
                  <button>category</button>
                  <button>category</button>
                  <button>category</button>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginBottom: "25px" }}>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Brands</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.matExpansionBody}>
              <ul>
                <li>
                  <button>category</button>
                  <button>category</button>
                  <button>category</button>
                  <button>category</button>
                  <button>category</button>
                  <button>category</button>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginBottom: "25px" }}>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Price</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.priceSlider}>
              <span>
                From: <b>RS 200</b>
              </span>
              <span>
                From: <b>RS 500</b>
              </span>
            </div>
            <div className={styles.priceSlider}></div>
          </AccordionDetails>
        </Accordion>
      </div>
    </React.Fragment>
  );
};

export default ProductSidebar;
