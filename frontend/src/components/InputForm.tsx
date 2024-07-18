import React from "react";
import "./InputForm.css";

interface Props {
  inputName1: string;
  inputField1: string;
  setInputField1: (field1State: string) => void;
  inputName2: string;
  inputField2: string;
  setInputField2: (field2State: string) => void;
  onSubm: () => void;
  buttonName: string;
}

const InputForm = ({
  inputName1,
  inputField1,
  setInputField1,
  inputName2,
  inputField2,
  setInputField2,
  onSubm,
  buttonName,
}) => {
  return (
    <div className="input-form">
      <form onSubmit={onSubm} className="form-content">
        <div className="text-input">
          <label htmlFor="inputField1" className="form-label">
            {inputName1}
          </label>
          <input
            className="form-control"
            type="text"
            id="inputField1"
            value={inputField1}
            onChange={(e) => setInputField1(e.target.value)}
          />
        </div>
        <div className="text-input">
          <label htmlFor="inputField2" className="form-label">
            {inputName2}
          </label>
          <input
            className="form-control"
            type="text"
            id="inputField2"
            value={inputField2}
            onChange={(e) => setInputField2(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          {buttonName}
        </button>
      </form>
    </div>
  );
};

export default InputForm;
