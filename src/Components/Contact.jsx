import React, { useState } from "react";
import Navbar from "./Navbar";
import gitImg from "../Assets/social/github.png";
import linkImg from "../Assets/social/LinkedIn.png";
import instaImg from "../Assets/social/instagram.png";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDtLJNYpxk4KW3Pr_j5Y-lz-RvtB7V9FGs",
  authDomain: "akshaybhandarkarportfoli-59b2e.firebaseapp.com",
  projectId: "akshaybhandarkarportfoli-59b2e",
  storageBucket: "akshaybhandarkarportfoli-59b2e.appspot.com",
  messagingSenderId: "975007718778",
  appId: "1:975007718778:web:1de6309bb8efb1dbe80ac3",
};

const app = initializeApp(firebaseConfig);

function Contact() {
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = getDatabase(app);
    const newDocRef = push(ref(db, "contacts"));

    await set(newDocRef, {
      username,
      message: msg,
      createdAt: Date.now(),
    });

    alert("Received your message!");
    setUsername("");
    setMsg("");
  };

  return (
    <div className="contact-page">
      <Navbar />

      <section className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Me</h2>

          <div className="form-group">
            <label>Username</label>
            <input type="text" value={username} required onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea rows="5" value={msg} required onChange={(e) => setMsg(e.target.value)} />
          </div>

          <button className="btn btn-danger w-100">Submit</button>

          {/* SOCIAL LINKS */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/akshay5619" target="_blank">
              <img src={linkImg} alt="LinkedIn" />
            </a>

            <a href="https://github.com/AkshayBhandarkarH" target="_blank">
              <img src={gitImg} alt="GitHub" />
            </a>

            <a href="https://www.instagram.com/_akshay_bhandarkar_/" target="_blank">
              <img src={instaImg} alt="Instagram" />
            </a>
          </div>
        </form>
      </section>

      <footer className="footer-bottom">
        <p>© 2024 Akshay Bhandarkar H. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
