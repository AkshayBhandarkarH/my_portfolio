import React, { useState } from "react";
import Navbar from "./Navbar";
import profile from "../data/introduction.json";
import ResumePDF from "../Assets/Resume_Akshay_Bhandarkar.pdf";

const assets = import.meta.glob("../Assets/*", { eager: true, as: "url" });

function Home() {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div className="home-wrapper">
      <Navbar />

      {/* HERO SECTION */}
      {!showPDF && (
        <section className="hero">
          {profile.map((detail, index) => (
            <div className="hero-container" key={index}>
              {/* LEFT - TEXT */}
              <div className="hero-text">
                <h4 className="hero-welcome">Welcome to my portfolio</h4>
                <h1>
                  Hi, I'm <span>{detail.name}</span>
                </h1>
                <h3>{detail.domain} Developer</h3>

                <p>{detail.description}</p>

                <button className="btn btn-dark" onClick={() => setShowPDF(true)}>
                  View Resume
                </button>
              </div>

              {/* RIGHT - IMAGE */}
              <div className="hero-image">
                <img src={assets[`../Assets/${detail.url}`] ?? ""} alt="Profile" />
              </div>
            </div>
          ))}
        </section>
      )}

      {/* RESUME VIEW */}
      {showPDF && (
        <section className="resume-section">
          <button className="btn btn-dark btnReturn" onClick={() => setShowPDF(false)}>
            Back
          </button>

          <embed src={ResumePDF} type="application/pdf" width="100%" height="100%" className="pdf" />
        </section>
      )}
    </div>
  );
}

export default Home;
