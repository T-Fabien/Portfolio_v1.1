import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Aboutme() {
  return (
    <div className="aboutme">
      <VerticalTimeline lineColor="#fff">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          iconStyle={{ background: "#006400", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lycée Antoine Watteau, Valenciennes, 59300
          </h3>
          <p> Bac S - Spécialité SVT</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#006400", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lycée Henri Wallon, Valenciennes, 59300
          </h3>
          <p> BTS Services Informatiques aux Organisations - Année 1</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mai 2018 - Juin 2018 (4 Semaines)"
          iconStyle={{ background: "#b8860b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            (Stage) Développeur C# - Progress Consulting
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            France, Valenciennes, 59300
          </h4>
          <p>Amélioration d’une application CRM (C#)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#006400", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lycée Henri Wallon, Valenciennes, 59300
          </h3>
          <p>
            BTS Services Informatiques aux Organisations - Année 2 <br />
            Spécialité Solutions Logicielles et Applications Métiers
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Janvier - Mars 2019 (6 Semaines)"
          iconStyle={{ background: "#b8860b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            (Stage) Développeur C# - Progress Consulting
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            France, Valenciennes, 59300
          </h4>
          <p>
            – Amélioration de l’interface avec des nouvelles features
            <br />– Développer un module C#
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#006400", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Université polytechnique Hauts-de-France, Valenciennes, 59300
          </h3>
          <p>
            Licence Professionnelle Technologie de l'Information et Internet
          </p>
          <p>Mention : Assez Bien</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mars - Juin 2020 (4 Mois)"
          iconStyle={{ background: "#b8860b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            (Stage) Développeur Angular - Bridgestone Aircraft Tire SA
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Belgique, Frameries, 7080
          </h4>
          <p>
            – Développer un module Angular <br />– Intégration CSS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2022"
          iconStyle={{ background: "#006400", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Openclassrooms, à distance, Valenciennes, 59300
          </h3>
          <p>Formation Développeur d'application - JavaScript React</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Aboutme;
