import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#0ccac4">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2004 - 2010"
          iconStyle={{ background: "#0ccac4", color: "#3e497a" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bondeni Primary School, Embakasi
          </h3>
          <p> Primary School Certificate </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2015"
          iconStyle={{ background: "#0ccac4", color: "#3e497a" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bishop Ndingi High School, Mwala
          </h3>
          <p> High School Certificate </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2022"
          iconStyle={{ background: "#0ccac4", color: "#3e497a" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Jomo Kenyatta University of Agriculture and Technology, Kiambu
          </h3>
          <p> Bachelor's Degree in Computer Technology </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2023"
          iconStyle={{ background: "limegreen", color: "#3e497a" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Upwork Freelancer and Side Gigs, Online
          </h3>
          <p>
            Through Upwork and reaching out to some direct clients, I managed to
            get some few gigs and side hustle projects. I gained some new
            experience in software development and a bit of networking. I also
            gained some soft and hard skills by interacting and working with the
            clients.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
