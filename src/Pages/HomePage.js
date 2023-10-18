import React from "react";
import "./homePage.css";
import RavesLogo from "../assets/RAVES-logo.png";

import Timer from "../components/Timer";

const HomePage = () => {
  return (
    <div className="dark-theme">
      <div>
        <img src={RavesLogo} alt="Raves-logo" />
      </div>
    </div>
  );
};

export default HomePage;
