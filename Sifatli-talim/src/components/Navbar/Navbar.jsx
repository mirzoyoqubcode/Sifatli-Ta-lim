import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/white_logo1.jpg";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  return (
    <div className={styles.navbar}>
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>

      <div className={styles.links}>
        <Link to={"/contact"} className={styles.link}>
          <p>Contact us</p>
        </Link>
        <Link onClick={openModal} className={styles.link}>
          <p>Log in</p>
        </Link>
        {isModalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <div className={styles.title_loading}>
              <h1 className={styles.title_modal}>Login</h1>
              <form className={styles.inputs}>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button className={styles.btn}>Log in</button>
              </form>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Navbar;
