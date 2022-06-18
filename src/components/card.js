import React from "react";
import ProfileImage from "./profile_image";
import ProfileTitle from "./profile_title";
import ProfileDetails from "./profile_details";
import ProfileFooter from "./footer";

const Card = () => {
  return (
    //contains the rest of the components
    <div className="card">
      <ProfileImage />
      <ProfileTitle />
      <ProfileDetails />
      <ProfileFooter />
    </div>
  );
};

export default Card;
