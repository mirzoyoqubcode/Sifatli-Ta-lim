import React from "react";
import styles from "./AdminHeader.module.scss";
import iut from "../../assets/IUT.png";
import iutname from "../../assets/iut_name.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const AdminHeader = () => {
  return (
    <div className={styles.admin_wrapper}>
      <div className={styles.title_admin}>
        <img src={iut} alt="" />
        <img src={iutname} alt="" />
      </div>
      <div className={styles.dashboard_items}>
        <ul className={styles.tabs}>
          <li>SBL</li>
          <li className={styles.active}>SOCIE</li>
          <li>CSE</li>
          <li>ICE</li>
        </ul>
        <div className={styles.grid}>
          <h1>SOCIE department</h1>
          <div className={styles.grid_container}>
            <Link to={"/firstclass"} className={styles.link}>
              <div className={styles.grid_item}>CIE-23-01</div>
            </Link>
            <Link to={"/secondclass"} className={styles.link}>
              <div className={styles.grid_item}>CIE-23-02</div>
            </Link>
            <div className={styles.grid_item}>CIE-23-03</div>
            <div className={styles.grid_item}>CIE-23-04</div>
            <div className={styles.grid_item}>CIE-23-05</div>
            <div className={styles.grid_item}>CIE-23-06</div>
            <div className={styles.grid_item}>CIE-23-07</div>
            <div className={styles.grid_item}>CIE-23-08</div>
            <div className={styles.grid_item}>CIE-23-09</div>
            <div className={styles.grid_item}>CIE-23-10</div>
            <div className={styles.grid_item}>CIE-23-11</div>
            <div className={styles.grid_item}>CIE-23-12</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminHeader;
