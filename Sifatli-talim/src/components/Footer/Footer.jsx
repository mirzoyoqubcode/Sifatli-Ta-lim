import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2>
        © By <span className={styles.dots}>DOTS</span> team
      </h2>
    </div>
  );
};

export default Footer;
