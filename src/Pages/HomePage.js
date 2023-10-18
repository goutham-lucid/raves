import React from "react";
import "./homePage.css";
import RavesLogo from "../assets/RAVES-logo.png";

const HomePage = () => {
  return (
    <div className="dark-theme overflow-x-hidden">
      <div className="grid">
        <div className="md:col-7 col-12 p-5 demo">
          <div>
            <img className="logo" src={RavesLogo} alt="Raves-logo" />
          </div>
          <div className="mt-5">
            <h1>55 20 56 98</h1>
          </div>
          <div>
            <span className="company-dark-btn border-round px-3 py-2">Comming Soon!</span>
          </div>
          <div>
            <h1>
              RAVES: THE NEXT BIG THING IN WORKFOURCE MANAGEMENT WILL BE HERE
              SOON
            </h1>
            Get notified as soon as it's ready for launch!
          </div>
          <div>
            <input />
            <br />
            No stamps, no waiting, just pure tech magic!
          </div>
        </div>
        <div className="md:col-5 col-12 p-5 demo">
          <div className="flex justify-content-center align-items-center">
            <h1>form</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
