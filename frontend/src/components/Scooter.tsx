import React from "react";
import "./Scooter.css";

type User = {
  name: string;
  range: number;
};

interface ScooterProps {
  make: string;
  model: string;
  claimedRange: number;
  realRange: number;
  users: User[];
  onClk: () => void;
  getReportsBtn: () => void;
  updateBtn: () => void;
  deleteBtn: () => void;
}

const Scooter = ({
  make,
  model,
  claimedRange,
  realRange,
  users,
  onClk,
  getReportsBtn,
  updateBtn,
  deleteBtn,
}: ScooterProps) => {
  return (
    <div className="container d-flex justify-content-center">
      <div
        className="card shadow p-4 mt-0 scooter-card"
        // style={{ width: "40%" }}
      >
        <h3 className="card-title text-center">Scooter Details</h3>
        <p className="card-text">
          <strong>Make:</strong> {make}
        </p>
        <p className="card-text">
          <strong>Model:</strong> {model}
        </p>
        <p className="card-text">
          <strong>Claimed range:</strong> {claimedRange}
        </p>
        <p className="card-text">
          <strong>Real range:</strong>{" "}
          {realRange && parseFloat(realRange.toFixed(2))}
        </p>
        <div className="d-flex justify-content-evenly mb-3 btn-container">
          <button className="btn btn-secondary" onClick={onClk}>
            add range
          </button>
          <button className="btn btn-secondary" onClick={getReportsBtn}>
            get all reports
          </button>
          <button className="btn btn-secondary" onClick={updateBtn}>
            update scooter
          </button>
          <button className="btn btn-secondary" onClick={deleteBtn}>
            delete scooter
          </button>
        </div>
        <ul className="list-group list-group-flush">
          {users.slice(0, 5).map((user, index) => (
            <li key={index} className="list-group-item text-center">
              <strong>{user.name}</strong>: {parseFloat(user.range.toFixed(2))}{" "}
              km
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Scooter;
