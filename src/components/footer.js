import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const ProfileFooter = () => {
  return (
    <div className="profileFooter--div">
      <a href="https://twitter.com/4real_Dev" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="footerIcon" />
      </a>
      <a href="https://twitter.com/4real_Dev" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitterSquare} className="footerIcon" />
      </a>
      <a href="https://github.com/Ola4606" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithubSquare} className="footerIcon" />
      </a>
      <a href="https://twitter.com/4real_Dev" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagramSquare} className="footerIcon" />
      </a>
    </div>
  );
};

export default ProfileFooter;
