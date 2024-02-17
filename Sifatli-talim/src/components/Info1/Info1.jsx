import React from "react";
import styles from "./Info1.module.scss";
import info1 from "../../assets/info_1.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const Info1 = () => {
  return (
    <div>
      <nav></nav>
      <div className={styles.info1}>
        <img src={info1} alt="" />
        <div className={styles.content_info}>
          <p>
            The opportunity to control the impact of the leak on the lesson, as
            well as to explore their interest
          </p>
          <div className={styles.btns_info}>
            <Link to={"/info2"}>
              <button className={styles.blue}>Next</button>
            </Link>
            <Link to={"/dashboard"}>
              <button>Skip</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Info1;
