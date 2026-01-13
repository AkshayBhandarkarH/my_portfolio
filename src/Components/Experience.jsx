import React from "react";
import Navbar from "./Navbar";
import expdata from "../data/ExperienceData.json";

function Experience() {
  return (
    <div className="experience-page">
      <Navbar />

      <section className="experience-container">
        {expdata.map((exp, index) => (
          <div className="experience-section" key={index}>
            <h2 className="experience-type">{exp.worktype}</h2>

            {exp.details.map((work, i) => (
              <div className="experience-card" key={i}>
                <div className="experience-header">
                  <h3>{work.title}</h3>
                  <span>{work.date}</span>
                </div>

                <ul className="experience-details">
                  {work.description.map((desc, j) => (
                    <li key={j}>{desc.paragraph}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Experience;
