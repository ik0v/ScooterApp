import React, { useState } from "react";
import "./Input.css";
import "./ScooterPage.css";
import InputForm from "./InputForm";
import Scooter from "./Scooter";
import Header from "./Header";

const ScooterPage = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [name, setUserName] = useState("");
  const [range, setRange] = useState("");
  const [scooterData, setScooterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addScooterForm, setAddScooterForm] = useState(false);
  const [message, setMessage] = useState("");
  const [addRangeForm, setAddRangeForm] = useState(false);

  const handleGetScooter = (event) => {
    event.preventDefault();
    getScooter();
  };

  async function getScooter() {
    setScooterData(null);
    setMessage("Getting scooter");
    setLoading(true);
    setAddScooterForm(false);
    try {
      const response = await fetch(
        `http://localhost:8080/api/scooters?scooterMake=${make}&scooterModel=${model}&_=${new Date().getMilliseconds()}`
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
        // setScooterData(null);
        throw new Error("Scooter not found");
      }
      const data = await response.json();
      setScooterData(data);
    } catch (error) {
      console.error("Error getting scooter: ", error.message);
    }
    // setAddScooterForm(false);
    setLoading(false);
    setMessage("");
  }

  const handleAddScooter = (event) => {
    event.preventDefault();
    addScooter();
  };

  function emptyLog() {
    setMessage("");
  }

  async function addScooter() {
    setMessage("Adding scooter");
    try {
      const response = await fetch(
        `http://localhost:8080/api/scooters?username=${name}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ make, model, range }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add scooter to the database");
      }
      setMessage(`${make} ${model} was added to database`);
      setTimeout(emptyLog, 2000);
    } catch (error) {
      console.error("Error adding scooter: ", error.message);
    } finally {
      setAddScooterForm(false);
      getScooter();
    }
  }

  const handleAddRange = (event) => {
    event.preventDefault();
    addRange();
  };

  async function addRange() {
    setMessage("Adding range");
    try {
      const response = await fetch(
        `http://localhost:8080/api/scooters/${scooterData.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, range }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add scooter range to database");
      }
      setMessage(`${make} ${model} range was registered in database`);
      setTimeout(emptyLog, 2500);
    } catch (error) {
      console.error("Error adding scooter range: ", error.message);
    } finally {
      setAddRangeForm(false);
      getScooter();
    }
  }

  return (
    <>
      <Header />
      <div className="text-div">
        {message && <p className="text-center">{message}</p>}
      </div>
      <InputForm
        inputName1="Make"
        inputField1={make}
        setInputField1={setMake}
        inputName2="Model"
        inputField2={model}
        setInputField2={setModel}
        onSubm={handleGetScooter}
        buttonName="check scooter"
      />
      {addRangeForm && (
        <InputForm
          inputName1="User name"
          inputField1={name}
          setInputField1={setUserName}
          inputName2="Real Range"
          inputField2={range}
          setInputField2={setRange}
          onSubm={handleAddRange}
          buttonName="add range"
        />
      )}
      {scooterData && (
        <Scooter
          make={scooterData.make}
          model={scooterData.model}
          claimedRange={scooterData.claimedRange}
          realRange={scooterData.realRange}
          users={scooterData.users}
          onClk={() => setAddRangeForm(true)}
        />
      )}
      {addScooterForm && (
        <InputForm
          inputName1="User name"
          inputField1={name}
          setInputField1={setUserName}
          inputName2="Claimed Range"
          inputField2={range}
          setInputField2={setRange}
          onSubm={handleAddScooter}
          buttonName="add scooter"
        />
      )}
    </>
  );
};

export default ScooterPage;
