import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ProfileTitle = () => {
  return (
    <div className="profileTitle--div">
      {/* title texts */}
      <h2 className="title--name">Adeyemo OlaOluwa</h2> {/* name */}
      <h4 className="title--career">Frontend Developer</h4> {/* career title */}
      <a
        href="https://twitter.com/4real_Dev"
        className="title--website"
        target="_blank"
        rel="noreferrer"
      >
        twitter.com/4real_Dev
      </a>
      {/* website */}
      {/* title social buttons */}
      <div className="title--socialButtons--div">
        <a href="mailto:olaoluwaadeyemo7@gmail.com" className="title--socialButtons-link">
        <div className="title--socialButtons-1">
          <FontAwesomeIcon icon={faEnvelope} className="emailIcon" />
          <h4>Email</h4>
        </div>
        </a>
        {/* <div className="title--socialButtons-2">
          <FontAwesomeIcon icon={faLinkedin} className="linkedinIcon" />
          <h4>LinkedIn</h4>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileTitle;
