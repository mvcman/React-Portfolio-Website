import React from "react";
import { FcSettings } from "react-icons/fc";

const languages = [
  {
    name: "Python",
    level: "70",
    icon: <FcSettings className="bar__icon" />,
  },
  {
    name: "Java Script",
    level: "90",
    icon: <FcSettings className="bar__icon" />,
  },
  {
    name: "Java",
    level: "80",
    icon: <FcSettings className="bar__icon" />,
  },
  {
    name: "C Language",
    level: "78",
    icon: <FcSettings className="bar__icon" />,
  },
];

const tools = [
  {
    name: "Figma",
    level: "60",
    icon: <FcSettings className="bar__icon" />,
  },
  {
    name: "Github",
    level: "90",
    icon: <FcSettings className="bar__icon" />,
  },
  {
    name: "AWS SDK",
    level: "70",
    icon: <FcSettings className="bar__icon" />,
  },
];

const Bar = ({ language, icon, level }) => {
  const bar_width = `${level}%`;
  return (
    <div className="bar">
      <div
        className="bar__wrapper"
        style={{
          width: bar_width,
        }}
      >
        <span className="bar__name">
          {icon}
          {language}
        </span>
        <span>{bar_width}</span>
      </div>
    </div>
  );
};
const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Computer Engineering</h5>
            <p className="resume-card__name">Academy of Technology</p>
            <p className="resume-card__details">
              Loreme impsum color site kf aaklj af
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Computer Engineering</h5>
            <p className="resume-card__name">Academy of Technology</p>
            <p className="resume-card__details">
              Loreme impsum color site kf aaklj af
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Languages & Framework</h5>
          <div className="resume-language__body mt-3">
            {languages.map((l) => (
              <Bar language={l.name} icon={l.icon} level={l.level} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Tools and Software</h5>
          <div className="resume-language__body mt-3">
            {tools.map((l) => (
              <Bar language={l.name} icon={l.icon} level={l.level} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
