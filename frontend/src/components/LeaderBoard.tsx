import React, { useState } from "react";
import Header from "./Header";
import ScooterListRange from "./ScooterListRange";
import "./LeaderBoard.css";
import ScooterListRatio from "./ScooterListRatio";

const LeaderBoard = () => {
  const [activeList, setActiveList] = useState("ratio");

  const handleSwitchToList = (listType) => {
    setActiveList(listType);
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div
              className="btn-group custom-btn-group"
              role="group"
              aria-label="Scooter List Switch"
            >
              <button
                type="button"
                className={`btn custom-btn ${
                  activeList === "range" ? "btn-active" : "btn-inactive"
                }`}
                onClick={() => handleSwitchToList("range")}
              >
                By Range
              </button>
              <button
                type="button"
                className={`btn custom-btn ${
                  activeList === "ratio" ? "btn-active" : "btn-inactive"
                }`}
                onClick={() => handleSwitchToList("default")}
              >
                By Ratio
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-10">
            {activeList === "range" ? (
              <ScooterListRange />
            ) : (
              <ScooterListRatio />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
