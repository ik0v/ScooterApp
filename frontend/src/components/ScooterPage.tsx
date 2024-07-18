import React, { useEffect, useState } from "react";
// import "./Input.css";
import "./ScooterPage.css";
import InputForm from "./InputForm";
import Scooter from "./Scooter";
import Header from "./Header";
import AddForm from "./AddForm";
import GetForm from "./GetForm";

const ScooterPage = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [getMake, setGetMake] = useState("");
  const [getModel, setGetModel] = useState("");
  const [name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [range, setRange] = useState("");
  const [scooterData, setScooterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addScooterForm, setAddScooterForm] = useState(false);
  const [addRangeForm, setAddRangeForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);
  const [message, setMessage] = useState("");

  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);

  const handleGetScooter = (event) => {
    event.preventDefault();
    getScooter();
  };

  useEffect(() => {
    setGetMake(make);
  }, [makes, make]);

  useEffect(() => {
    setGetModel(model);
  }, [model, models]);

  useEffect(() => {
    fetch("http://localhost:8080/api/scooters/makes")
      .then((response) => response.json())
      .then((data) => setMakes(data))
      .catch((error) => console.error("Error fetching makes: ", error));
  }, [make]);

  useEffect(() => {
    if (getMake) {
      fetch(`http://localhost:8080/api/scooters/models?make=${getMake}`)
        .then((response) => response.json())
        .then((data) => setModels(data))
        .catch((error) => console.error("Error fetching models: ", error));
    } else {
      setModels([]);
    }
  }, [getMake]);

  useEffect(() => {
    if (addRangeForm) {
      setAddScooterForm(false);
    }
  }, [addRangeForm]);

  async function getScooter() {
    if (!getMake || !getModel) {
      setMessage("Please select scooter make & model");
      setTimeout(emptyLog, 2500);
      return;
    }
    setScooterData(null);
    setMessage("Getting scooter");
    setLoading(true);
    setAddScooterForm(false);
    try {
      const response = await fetch(
        `http://localhost:8080/api/scooters?scooterMake=${getMake}&scooterModel=${getModel}`
      );
      if (!response.ok) {
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
    setAddRangeForm(true);
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
      setGetMake(make);
      setGetModel(model);
    } catch (error) {
      console.error("Error adding scooter: ", error.message);
    } finally {
      setMake("");
      setModel("");
      setUserName("");
      setRange("");
      setAddScooterForm(false);
      setAddRangeForm(false);
      getScooter();
    }
  }

  const handleDeleteScooter = (event) => {
    event.preventDefault();
    deleteScooter();
  };

  async function deleteScooter() {
    const missingFields = [!name && "username", !password && "password"].filter(
      Boolean
    );
    if (missingFields.length > 0) {
      setMessage(`Please fill out: ${missingFields.join(", ")}`);
      setTimeout(emptyLog, 3500);
      return;
    }
    setMessage("Deleting scooter");
    setDeleteForm(true);
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
      setAddScooterForm(false);
      setAddRangeForm(false);
      setDeleteForm(false);
    }
  }

  const handleAddRange = (event) => {
    event.preventDefault();
    addRange();
  };

  async function addRange() {
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
    } catch (error) {
      console.error("Error adding scooter range: ", error.message);
    } finally {
      setAddRangeForm(false);
      getScooter();
      setRange("");
      setUserName("");
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
      {!addScooterForm && !addRangeForm && !deleteForm && (
        <div className="add-scooter-btn">
          <button
            type="submit"
            className="btn btn-secondary mt-0"
            onClick={() => setAddScooterForm(true)}
          >
            Add Scooter
          </button>
        </div>
      )}
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
      {addScooterForm && (
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
      {deleteForm && (
        <InputForm
          inputName1="User name"
          inputField1={name}
          setInputField1={setUserName}
          inputName2="Password"
          inputField2={password}
          setInputField2={setPassword}
          onSubm={handleDeleteScooter}
          buttonName="Delete scooter"
        />
      )}

      <div className="go-back-btn">
        {(addScooterForm || addRangeForm || deleteForm) && (
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => {
              setAddScooterForm(false);
              setAddRangeForm(false);
              setDeleteForm(false);
            }}
          >
            Go back
          </button>
        )}
      </div>

      {scooterData && (
        <Scooter
          make={scooterData.make}
          model={scooterData.model}
          claimedRange={scooterData.claimedRange}
          realRange={scooterData.realRange}
          users={scooterData.users}
          onClk={() => setAddRangeForm(true)}
          onClk2={() => setDeleteForm(true)}
        />
      )}
    </>
  );
};

export default ScooterPage;
