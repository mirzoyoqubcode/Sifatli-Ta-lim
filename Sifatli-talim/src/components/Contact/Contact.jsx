import React from "react";
import styles from "./Contact.module.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import image1 from "../../assets/header_1.png";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <Navbar />
      <div className={styles.information_contact}>
        <img src={image1} alt="" />
        <p>
          Welcome to our platform where you can engage in dynamic conversations,
          chat, and explore a wide array of topics with ease.
        </p>
      </div>
      <div className={styles.info_contact}>
        <h1>
          <FaPhone />
          Phone Number: +998940317775
        </h1>
        <h1>
          <FaEnvelope />
          Email: mirzoyoqub123@gmail.com
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
