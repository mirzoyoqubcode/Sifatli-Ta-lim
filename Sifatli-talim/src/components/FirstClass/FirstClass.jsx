import React, { useState } from "react";
import MiniNavbar from "../MiniNavbar/MiniNavbar";
import iut from "../../assets/IUT.png";
import iutname from "../../assets/iut_name.png";
import timetable from "../../assets/timetable.png";
import styles from "./FirstClass.module.scss";
import Footer from "../Footer/Footer";
import axios from "axios";
const FirstClass = () => {
  const [file, setFile] = useState(null);
  const [responseText, setResponseText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      console.log("No file selected");
      return;
    }

    setLoading(true); // Start loading

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "http://localhost:8081/audio",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResponseText(response.data);
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    } finally {
      setLoading(false); // Stop loading
    }
  };

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
        <div>
          <div className={styles.firstclass_content}>
            <h1>History</h1>
            <p>Upload your audio lesson to get AI summary and feedback</p>
            <div className={styles.input_content}>
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                className={styles.dropzone}
              />
              <button onClick={handleUpload} disabled={loading}>
                {loading ? "Uploading..." : "Upload"}
              </button>
              {loading && <div>Loading...</div>}
              {responseText && (
                <div>
                  Response: <p>{responseText}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FirstClass;
