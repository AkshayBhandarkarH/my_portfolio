import React from "react";
import Navbar from "./Navbar";
import eduData from "../data/EduDate.json";

function Academics() {
  return (
    <div className="academics-page">
      <Navbar />

      <section className="academics-container">
        {eduData.map((edu, index) => (
          <div className="academics-section" key={index}>
            <h2 className="academics-type">{edu.Education}</h2>

            {edu.details.map((detail, i) => (
              <div className="academics-card" key={i}>
                <div className="academics-header">
                  <h3>{detail.Organization}</h3>
                  <span>{detail.year}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Academics;
