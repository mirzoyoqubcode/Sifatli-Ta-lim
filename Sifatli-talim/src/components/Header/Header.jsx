import React from "react";
import styles from "./Header.module.scss";
import header_1 from "../../assets/header_1.png";
import header_2 from "../../assets/header_2.png";
import brand1 from "../../assets/brand_1.svg";
import brand2 from "../../assets/brand_2.svg";
import brand3 from "../../assets/brand_3.svg";
import brand4 from "../../assets/brand_4.svg";
import brand5 from "../../assets/brand_5.svg";
import brand6 from "../../assets/brand_6.svg";
import brand7 from "../../assets/brand_7.svg";
import brand8 from "../../assets/brand_8.svg";
import brand9 from "../../assets/brand_9.svg";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={header_1} alt="" />
        <div className={styles.box_header}>
          <p>
            By gaining deeper insights into students' affective states,
            educators can tailor instructional strategies to optimize engagement
            and learning outcomes.
          </p>
        </div>
      </div>
      <div className={styles.header_information}>
        <div className={styles.box_info}>
          <p>
            <span className={styles.title_info}>Real-time Monitoring:</span>{" "}
            Educators gain real-time interventions and personalized support for
            students.
          </p>
        </div>
        <img src={header_2} alt="" />
      </div>
      <div className={styles.education}>
        <h1>
          Integration with all{" "}
          <span className={styles.bold}>HIGHER EDUCATION</span> and
          <span className={styles.bold}> PRESCHOOL EDUCATIONAL</span>{" "}
          institutions in Uzbekistan
        </h1>
        <div className={styles.slider_brands}>
          <Marquee className={styles.slider_brands_img}>
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
            <img src={brand6} alt="" />
            <img src={brand7} alt="" />
            <img src={brand8} alt="" />
            <img src={brand9} alt="" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Header;
