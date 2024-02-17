import React from "react";
import styles from "./Info2.module.scss";
import info2 from "../../assets/info_2.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Info2 = () => {
  return (
    <div>
      <nav></nav>
      <div className={styles.info2}>
        <img src={info2} alt="" />
        <div className={styles.content_info}>
          <p>
            The opportunity to control the impact of the leak on the lesson, as
            well as to explore their interest
          </p>
          <div className={styles.btns_info}>
            <Link to={"/dashboard"}>
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

export default Info2;
