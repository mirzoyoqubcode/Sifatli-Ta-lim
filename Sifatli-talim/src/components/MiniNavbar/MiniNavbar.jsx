import React from "react";
import styles from "./MiniNavbar.module.scss";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
const MiniNavbar = () => {
  return (
    <div className={styles.wrapper_miniNav}>
      <ul className={styles.links}>
        <Link className={styles.link}>
          <li>Classes</li>
        </Link>
        <Link className={styles.link}>
          <li>Teachers</li>
        </Link>
        <Link className={styles.link}>
          <li>Students</li>
        </Link>
        <Link className={styles.link}>
          <li>Subjects</li>
        </Link>
      </ul>
      <div className={styles.profile}>
        <p>Prof. Michel John SOCIE dept.</p>
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};

export default MiniNavbar;
