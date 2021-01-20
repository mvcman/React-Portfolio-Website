import React from "react";

const SkillCard = ({ icon, title, about }) => {
  return (
    <div className="skill__card">
      {icon}
      <div className="skill__card__body">
        <h6 className="skill__card__title">{title}</h6>
        <p className="skill__card__content">{about}</p>
      </div>
    </div>
  );
};

export default SkillCard;
