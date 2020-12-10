import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { AiFillPushpin } from "react-icons/ai";
// import { FaAward } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import file from "../assets/IAM-AWS.pdf";

const Sidebar = () => {
  const handleEmailme = () => {
    window.open("mailto:mandar.waghe@udgama.com");
  };
  return (
    <div className="sidebar">
      <img
        src="https://mandarwaghe.netlify.app/static/profile-f5777bd0aeb0b223c161fe760357720b.jpeg"
        alt="profile"
        className="sidebar__avatar"
      />
      <div className="sidebar__name">
        Mandar <span>Waghe</span>
      </div>
      <div className="sidebar__item sidebar_title">Software Engineer</div>
      <a href={file} download="resume.pdf" className="link">
        <div className="sidebar__item">
          <AiOutlineDownload className="sidebar__icon" /> Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="">
          <FaFacebookF className="sidebar__icon mr-3" />
        </a>
        <a href="">
          <FiInstagram className="sidebar__icon mr-3" />
        </a>
        <a href="">
          <AiFillGithub className="sidebar__icon mr-3" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__location">
          <AiFillPushpin className="sidebar__icon" />
          Maharashtra, India
        </div>
        <div className="sidebar__item">mandar@gmail.com</div>
        <div className="sidebar_item">8549489943</div>
      </div>
      <div className="sidebar__email" onClick={handleEmailme}>
        Email Me
      </div>
    </div>
  );
};

export default Sidebar;
