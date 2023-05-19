import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GroupsIcon from "@mui/icons-material/Groups";
import EmailIcon from "@mui/icons-material/Email";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p>&copy; 2023 DevOp_F3lOH</p>
    </div>
  );
}

export default Footer;
