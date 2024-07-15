import React, { useState } from "react";
import "./InputForm.css";

const InputForm = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [username, setUserName] = useState("");
  const [range, setRange] = useState("");
  const [scooterData, setScooterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addScooterForm, setAddScooterForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    getScooter();
    // alert(`make: ${make}, model: ${model}`);
  };

  async function getScooter() {
    setLoading(true);
    setAddScooterForm(false);
    try {
      const response = await fetch(
        `http://localhost:8080/api/scooters?scooterMake=${make}&scooterModel=${model}`
      );
      if (!response.ok) {
        if (
          window.confirm(
            "Scooter not found. Would you like to add it to the database?"
          )
        ) {
          // addScooter();
          setAddScooterForm(true);
          console.log("adding a scooter");
        }
        setScooterData(null);
        throw new Error("Scooter not found");
      }
      const data = await response.json();
      console.log(data.range);
      setScooterData(data);
    } catch (error) {
      console.error("Error getting scooter: ", error.message);
    }
    // setAddScooterForm(false);
    setLoading(false);
  }

  return (
    <>
      <div className="input-form">
        <form onSubmit={handleSubmit} className="form-content">
          <div className="text-input">
            <label htmlFor="make" className="form-label">
              Make
            </label>
            <input
              className="form-control"
              type="text"
              id="make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
          </div>
          <div className="text-input">
            <label htmlFor="model" className="form-label">
              Model
            </label>
            <input
              className="form-control"
              type="text"
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      {loading && <p>Data is loading</p>}
      {scooterData && (
        <div className="scooter-data">
          <h3>Scooter Details</h3>
          <p>Make: {scooterData.make}</p>
          <p>Model: {scooterData.model}</p>
          <p>Range: {scooterData.range} km</p>
        </div>
      )}
      {addScooterForm && (
        <div className="input-form">
          <form onSubmit={handleSubmit} className="form-content">
            <div className="text-input">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                className="form-control"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="text-input">
              <label htmlFor="range" className="form-label">
                Range
              </label>
              <input
                className="form-control"
                type="text"
                id="range"
                value={range}
                onChange={(e) => setRange(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add scooter
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default InputForm;
