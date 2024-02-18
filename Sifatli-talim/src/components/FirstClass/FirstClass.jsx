import React from "react";
import MiniNavbar from "../MiniNavbar/MiniNavbar";
import iut from "../../assets/IUT.png";
import iutname from "../../assets/iut_name.png";
import timetable from "../../assets/timetable.png";
import styles from "./FirstClass.module.scss";
import Footer from "../Footer/Footer";
const FirstClass = () => {
  return (
    <div>
      <MiniNavbar />
      <div className={styles.wrapper_firstclass}>
        <div className={styles.title_logo}>
          <img src={iut} alt="" />
          <img src={iutname} alt="" />
        </div>
        <div className={styles.wrapper_main}>
          <h1>CIE-23-01</h1>
          <p>SOCIE department</p>
          <h2>Timetable</h2>
          <img src={timetable} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FirstClass;
