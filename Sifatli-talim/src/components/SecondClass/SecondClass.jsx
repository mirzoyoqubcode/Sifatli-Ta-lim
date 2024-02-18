import React from "react";
import styles from "./SecondClass.module.scss";
import MiniNavbar from "../MiniNavbar/MiniNavbar";
import iut from "../../assets/IUT.png";
import iutname from "../../assets/iut_name.png";
import loop from "../../assets/loop.mp4";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import Footer from "../Footer/Footer";
const SecondClass = () => {
  return (
    <div>
      <MiniNavbar />
      <div>
        <div className={styles.title_logo}>
          <img src={iut} alt="" />
          <img src={iutname} alt="" />
        </div>

        <div className={styles.info_second}>
          <div className={styles.info_second_title}>
            <div className={styles.information_class}>
              <div>
                <h1>CIE-23-02</h1>
                <p>SOCIE department</p>
              </div>

              <div>
                <IoIosInformationCircleOutline className={styles.icon} />
                <IoMdDownload className={styles.icon} />
              </div>
            </div>
            <div>
              <p>Date: 18.02.2024</p>
              <p>Subject: Physics 2</p>
              <p>Professor: Michael John</p>
            </div>
          </div>
          <video src={loop} className={styles.videotag} autoPlay loop />
          <div className={styles.statistic}>
            <h1>Statistics</h1>
            <button className={styles.btn_upload}>Upload image</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SecondClass;
