import React from "react";
import Navbar from "./Navbar";
import data from "../data/Skilldata.json";

const assets = import.meta.glob("../Assets/*", { eager: true, as: "url" });

function Skills() {
  return (
    <div className="container-fluid">
      <Navbar />

      <section>
        {data.map((category, index) => (
          <div className="skill_section" key={index}>
            <h2 className="skill_title">{category.title}</h2>

            <div className="skills_grid">
              {category.details.map((skill, i) => (
                <div className="skill_card" key={i}>
                  <img src={assets[`../Assets/${skill.img}`] ?? ""} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Skills;
