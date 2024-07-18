import React, { useEffect, useState } from "react";
import "./InputForm.css";
import Select from "react-select";

interface Props {
  inputName1: string;
  inputField1: string;
  setInputField1: (field1State: string) => void;
  inputName2: string;
  inputField2: string;
  setInputField2: (field2State: string) => void;
  makes: string[];
  setMakes: (makes: string[]) => void;
  models: string[];
  setModels: (makes: string[]) => void;
  onSubm: () => void;
  buttonName: string;
}

const GetForm = ({
  inputName1,
  inputField1,
  setInputField1,
  inputName2,
  inputField2,
  setInputField2,
  makes,
  setMakes,
  models,
  setModels,
  onSubm,
}) => {
  return (
    <div className="input-form">
      <form onSubmit={onSubm} className="form-content">
        <div className="text-input">
          <label htmlFor="inputField1" className="form-label">
            {inputName1}
          </label>
          <select
            className="form-control"
            id="inputField1"
            value={inputField1}
            onChange={(e) => setInputField1(e.target.value)}
          >
            <option disabled value="">
              Select Make
            </option>
            {makes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>
        <div className="text-input">
          <label htmlFor="inputField2" className="form-label">
            {inputName2}
          </label>
          <select
            className="form-control"
            id="inputField2"
            value={inputField2}
            onChange={(e) => setInputField2(e.target.value)}
            disabled={!inputField1}
          >
            <option value="">Select Model</option>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-secondary">
          Get scooter
        </button>
      </form>
    </div>
  );
};

export default GetForm;
