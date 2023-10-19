import React from "react";

import backgroundImage from "../../assets/images/packages.webp";

const HomePackages = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      packages
    </div>
  );
};

export default HomePackages;
