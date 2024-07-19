import React, { useEffect, useState } from "react";
// import "./Input.css";
import "./ScooterPage.css";
import InputForm from "./InputForm";
import Scooter from "./Scooter";
import Header from "./Header";
import AddForm from "./AddForm";
import GetForm from "./GetForm";
import ReportList from "./ReportList";

const ScooterPage = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [getMake, setGetMake] = useState("");
  const [getModel, setGetModel] = useState("");
  const [name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [range, setRange] = useState("");
  const [scooterData, setScooterData] = useState(null);
  const [message, setMessage] = useState("");
  const [currentForm, setCurrentForm] = useState<string>("");
  const [currentScooterInfo, setCurrentScooterInfo] = useState<string>("");
  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);

  const handleGetScooter = (event) => {
    event.preventDefault();
    getScooter();
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/scooters/makes")
      .then((response) => response.json())
      .then((data) => setMakes(data))
      .catch((error) => console.error("Error fetching makes: ", error));
  }, [make, password, currentForm]);

  useEffect(() => {
    if (getMake) {
      fetch(`http://localhost:8080/api/scooters/models?make=${getMake}`)
        .then((response) => response.json())
        .then((data) => setModels(data))
        .catch((error) => console.error("Error fetching models: ", error));
    } else {
      setModels([]);
    }
  }, [getMake, currentForm]);

  function emptyLog() {
    setMessage("");
  }

  async function getScooter() {
    if (!getMake || !getModel) {
      setMessage("Please select scooter make & model");
      setTimeout(emptyLog, 2500);
      return;
    }
    // if (!message) {
    //   setMessage("Getting scooter");
    // }
    try {
      const response = await fetch(
        `http://localhost:8080/api/scooters?scooterMake=${getMake}&scooterModel=${getModel}`
      );
      if (!response.ok) {
        throw new Error("Scooter not found");
      }
      const data = await response.json();
      setScooterData(data);
      setCurrentScooterInfo("scooter");
      // setMessage("");
    } catch (error) {
      console.error("Error getting scooter: ", error.message);
      setMessage("Error getting scooter");
      setTimeout(emptyLog, 2500);
    }
  }

  const handleAddScooter = (event) => {
    event.preventDefault();
    addScooter();
  };

  async function addScooter() {
    setCurrentForm("addScooter");
    setCurrentScooterInfo("");
    const missingFields = [
      !make && "make",
      !model && "model",
      !name && "username",
      !range && "range",
    ].filter(Boolean);
    if (missingFields.length > 0) {
      setMessage(`Please fill out: ${missingFields.join(", ")}`);
      setTimeout(emptyLog, 3500);
      return;
    }
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
      const data = await response.json();
      setMessage(`${make} ${model} was added to database`);
      setScooterData(data);
      setTimeout(emptyLog, 2000);
      setGetMake(make);
      setGetModel(model);
      // getScooter();
    } catch (error) {
      console.error("Error adding scooter: ", error.message);
      setMessage("Error adding scooter");
      setTimeout(emptyLog, 2500);
    } finally {
      setMake("");
      setModel("");
      setUserName("");
      setRange("");
      setCurrentForm("");
      setCurrentScooterInfo("scooter");
    }
  }

  useEffect(() => {
    if (currentForm === "updateScooter") {
      setMake(scooterData.make);
      setModel(scooterData.model);
      setRange(scooterData.claimedRange);
    }
  }, [currentForm]);

  const handleUpdateScooter = (event) => {
    event.preventDefault();
    updateScooter();
  };

  async function updateScooter() {
    // setCurrentForm("updateScooter");
    const missingFields = [
      !make && "make",
      !model && "model",
      !name && "username",
      !range && "range",
    ].filter(Boolean);
    if (missingFields.length > 0) {
      setMessage(`Please fill out: ${missingFields.join(", ")}`);
      setTimeout(emptyLog, 3500);
      return;
    }
    if (
      make === scooterData.make &&
      model === scooterData.model &&
      range === scooterData.claimedRange
    ) {
      setMessage(`You didn't update scooter info`);
      setTimeout(emptyLog, 3500);
      return;
    }
    setMessage("Updating scooter");
    try {
      const response = await fetch(
        `http://localhost:8080/api/scooters/${scooterData.id}?username=${name}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ make, model, range }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add scooter to the database");
      }
      const data = await response.json();
      setMessage(`${scooterData.make} ${scooterData.model} was updated`);
      setScooterData(data);
      setTimeout(emptyLog, 2000);
      setGetMake(make);
      setGetModel(model);
    } catch (error) {
      console.error("Error adding scooter: ", error.message);
      setMessage("Error adding scooter");
    } finally {
      setMake("");
      setModel("");
      setUserName("");
      setRange("");
      setCurrentForm("");
    }
  }

  const handleDeleteScooter = (event) => {
    event.preventDefault();
    deleteScooter();
  };

  async function deleteScooter() {
    setCurrentForm("deleteScooter");
    const missingFields = [!name && "username", !password && "password"].filter(
      Boolean
    );
    if (missingFields.length > 0) {
      setMessage(`Please fill out: ${missingFields.join(", ")}`);
      setTimeout(emptyLog, 3500);
      return;
    }
    setMessage("Deleting scooter");

    try {
      const response = await fetch(
        `http://localhost:8080/api/scooters?username=${name}&password=${password}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ make: getMake, model: getModel, range }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete scooter from database");
      }
      setMessage(`${getMake} ${getModel} was removed from database`);
      setTimeout(emptyLog, 2000);
      setScooterData(null);
      setGetMake("");
      setGetModel("");
    } catch (error) {
      console.error("Error adding scooter: ", error.message);
    } finally {
      setUserName("");
      setPassword("");
      setCurrentForm("");
    }
  }

  const handleAddRange = (event) => {
    event.preventDefault();
    addRange();
  };

  async function addRange() {
    setCurrentForm("addRange");
    const missingFields = [!name && "username", !range && "range"].filter(
      Boolean
    );
    if (missingFields.length > 0) {
      setMessage(`Please fill out: ${missingFields.join(", ")}`);
      setTimeout(emptyLog, 3500);
      return;
    }
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
      getScooter();
    } catch (error) {
      console.error("Error adding scooter range: ", error.message);
      setMessage("Error adding range");
      setTimeout(emptyLog, 3500);
    } finally {
      setRange("");
      setUserName("");
      setCurrentForm("");
    }
  }

  return (
    <>
      <Header />
      <div className="text-div">
        {message && (
          <p className="text-center">
            <strong>{message}</strong>
          </p>
        )}
      </div>
      <GetForm
        inputName1="Make"
        inputField1={getMake}
        setInputField1={setGetMake}
        inputName2="Model"
        inputField2={getModel}
        setInputField2={setGetModel}
        makes={makes}
        setMakes={setMakes}
        models={models}
        setModels={setModels}
        onSubm={handleGetScooter}
      />
      {!currentForm && (
        <div className="add-scooter-btn">
          <button
            type="submit"
            className="btn btn-secondary mt-0"
            onClick={() => setCurrentForm("addScooter")}
          >
            add scooter
          </button>
        </div>
      )}
      {currentForm === "addRange" && (
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
      {currentForm === "addScooter" && (
        <AddForm
          inputName1="Make"
          inputField1={make}
          setInputField1={setMake}
          inputName2="Model"
          inputField2={model}
          setInputField2={setModel}
          inputName3="Username"
          inputField3={name}
          setInputField3={setUserName}
          inputName4="Claimed Range"
          inputField4={range}
          setInputField4={setRange}
          onSubm={handleAddScooter}
          buttonName="add"
        />
      )}
      {currentForm === "updateScooter" && (
        <AddForm
          inputName1="Make"
          inputField1={make}
          setInputField1={setMake}
          inputName2="Model"
          inputField2={model}
          setInputField2={setModel}
          inputName3="Username"
          inputField3={name}
          setInputField3={setUserName}
          inputName4="Claimed Range"
          inputField4={range}
          setInputField4={setRange}
          onSubm={handleUpdateScooter}
          buttonName="update"
        />
      )}
      {currentForm === "deleteScooter" && (
        <InputForm
          inputName1="User name"
          inputField1={name}
          setInputField1={setUserName}
          inputName2="Password"
          inputField2={password}
          setInputField2={setPassword}
          onSubm={handleDeleteScooter}
          buttonName="delete scooter"
        />
      )}
      <div className="go-back-btn">
        {currentForm && (
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => {
              setCurrentForm("");
            }}
          >
            go back
          </button>
        )}
      </div>

      {scooterData && currentScooterInfo === "scooter" && (
        <Scooter
          make={scooterData.make}
          model={scooterData.model}
          claimedRange={scooterData.claimedRange}
          realRange={scooterData.realRange}
          users={scooterData.users}
          onClk={() => setCurrentForm("addRange")}
          getReportsBtn={() => setCurrentScooterInfo("reports")}
          updateBtn={() => setCurrentForm("updateScooter")}
          deleteBtn={() => setCurrentForm("deleteScooter")}
        />
      )}

      {scooterData && currentScooterInfo === "reports" && (
        <ReportList
          make={scooterData.make}
          model={scooterData.model}
          reportList={scooterData.users}
          setCurrentScooterInfo={setCurrentScooterInfo}
        />
      )}
    </>
  );
};

export default ScooterPage;
