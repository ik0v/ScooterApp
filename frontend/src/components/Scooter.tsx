import React from "react";
import "./Scooter.css";

type User = {
  name: string;
  range: number;
};

interface ScooterProps {
  make: string;
  model: string;
  range: number;
  users: User[];
  onClk: () => void;
}

const Scooter = ({ make, model, range, users, onClk }: ScooterProps) => {
  return (
    <div className="container d-flex justify-content-center">
      <div
        className="card shadow p-4 mt-5 scooter-card"
        style={{ width: "45%" }}
      >
        <h3 className="card-title text-center">Scooter Details</h3>
        <p className="card-text">
          <strong>Make:</strong> {make}
        </p>
        <p className="card-text">
          <strong>Model:</strong> {model}
        </p>
        <p className="card-text">
          <strong>Range:</strong> {range}
        </p>
        <div className="d-flex justify-content-center mb-3">
          <button className="btn btn-primary" onClick={onClk}>
            Add Range
          </button>
        </div>
        <ul className="list-group list-group-flush">
          {users.map((user, index) => (
            <li key={index} className="list-group-item">
              <strong>{user.name}</strong>: {user.range} km
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Scooter;
