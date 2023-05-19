import React from "react";
import { iconsList } from "../helpers/IconsList";

import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skillIcons">
      {iconsList.map(({ name, image }) => (
        <div className="styleIcons">
          <img src={image} alt="Icons" />
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;
