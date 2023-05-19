import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.imageXL} alt="Projects" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="icons">
        <GitHubIcon onClick={() => window.open(project.gitlink)} />
        <LaunchIcon onClick={() => window.open(project.link)} />
      </div>
    </div>
  );
}

export default ProjectDisplay;
