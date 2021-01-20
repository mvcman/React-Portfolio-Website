import React from "react";
import { FcSettings } from "react-icons/fc";
import SkillCard from "./SkillCard";

const skills = [
  {
    icon: <FcSettings className="about__icon" />,
    title: "Loreem ipsum",
    about: "Deta",
  },
  {
    icon: <FcSettings className="about__icon" />,
    title: "Loreem ipsum",
    about: "Deta",
  },
  {
    icon: <FcSettings className="about__icon" />,
    title: "Loreem ipsum",
    about: "Deta",
  },
  {
    icon: <FcSettings className="about__icon" />,
    title: "Loreem ipsum",
    about: "Deta",
  },
  {
    icon: <FcSettings className="about__icon" />,
    title: "Loreem ipsum",
    about: "Deta",
  },
];

const About = () => {
  return (
    <div className="about">
      <h6 className="about__intro">
        Loreum ipsum is the best food ever in the city of god.
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">What I offer</h6>
        <div className="row">
          {skills.map((s, i) => (
            <div className="col-lg-6" key={i}>
              <SkillCard icon={s.icon} title={s.title} about={s.about} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
