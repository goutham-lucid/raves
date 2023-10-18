import React from "react";
import "./homePage.css";
import RavesLogo from "../assets/RAVES-logo.png";
import Timer from "../components/Timer";
import Form from "../components/Form";
import Notify from "../components/Notify";

const HomePage = () => {
  return (
    <div className="dark-theme h-screen overflow-x-hidden">
      <div className="grid h-full">
        <div className="lg:col-8 col-12 p-5">
          <div>
            <img className="logo" src={RavesLogo} alt="Raves-logo" />
          </div>
          <div className="my-5">
            <Timer />
          </div>
          <div className="mb-5">
            <span className="company-dark-btn border-round px-3 py-2">
              Comming Soon!
            </span>
          </div>
          <div className="mb-5 text-4xl font-bold">
            RAVES: THE NEXT BIG THING IN WORKFOURCE MANAGEMENT WILL BE HERE SOON
          </div>
          <div className="text-lg my-3 font-bold">
            Get notified as soon as it's ready for launch!
          </div>
          <div>
            <Notify />
            <span className="text-gray-500 text-sm">No stamps, no waiting, just pure tech magic!</span>
          </div>
        </div>
        <div className="lg:col-4 col-12 p-5 flex align-items-center">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
