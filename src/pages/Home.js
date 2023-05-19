import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GroupsIcon from "@mui/icons-material/Groups";
import EmailIcon from "@mui/icons-material/Email";
import Typewriter from "typewriter-effect";

import Skills from "../components/Skills";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString("Hi!!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Welcome to...")
                .pauseFor(1000)
                .deleteAll()
                .typeString("My Portfolio 😎")
                .pauseFor(1000)
                .deleteAll()
                .typeString("I'm DevOp Felix")
                .start();
            }}
          />
        </div>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon
            onClick={() =>
              window.open("https://www.linkedin.com/in/nthiwa-felix-04bb5724b/")
            }
          />
          <GitHubIcon
            onClick={() => window.open("https://github.com/DevOpF3loH")}
          />
          <GroupsIcon
            onClick={() =>
              window.open(
                "https://www.upwork.com/freelancers/~018995a846d341435a"
              )
            }
          />
          <a href="mailto:devopnthw@gmail.com" target="_blank" rel="noreferrer">
            <>
              <EmailIcon />
            </>
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <Skills />
      </div>
    </div>
  );
}

export default Home;
