import React from "react";
import "./InputForm.css";

interface Props {
  inputName1: string;
  inputField1: string;
  setInputField1: (field1State: string) => void;
  inputName2: string;
  inputField2: string;
  setInputField2: (field2State: string) => void;
  inputName3: string;
  inputField3: string;
  setInputField3: (field2State: string) => void;
  inputName4: string;
  inputField4: string;
  setInputField4: (field2State: string) => void;
  onSubm: () => void;
  buttonName: string;
}

const AddForm = ({
  inputName1,
  inputField1,
  setInputField1,
  inputName2,
  inputField2,
  setInputField2,
  inputName3,
  inputField3,
  setInputField3,
  inputName4,
  inputField4,
  setInputField4,
  onSubm,
  buttonName,
}) => {
  return (
    <div className="add-form">
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
        <div className="text-input">
          <label htmlFor="inputField2" className="form-label">
            {inputName3}
          </label>
          <input
            className="form-control"
            type="text"
            id="inputField2"
            value={inputField3}
            onChange={(e) => setInputField3(e.target.value)}
          />
        </div>
        <div className="text-input">
          <label htmlFor="inputField2" className="form-label">
            {inputName4}
          </label>
          <input
            className="form-control"
            type="text"
            id="inputField4"
            value={inputField4}
            onChange={(e) => setInputField4(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          {buttonName}
        </button>
      </form>
    </div>
  );
};

export default AddForm;
