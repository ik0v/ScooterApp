import React from "react";
import "./Input.css";

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
        <button type="submit" className="btn btn-primary">
          {buttonName}
        </button>
      </form>
    </div>
  );
};

export default InputForm;

// <div className="input-form">
//   <form onSubmit={handleAddScooter} className="form-content">
//     <div className="text-input">
//       <label htmlFor="username" className="form-label">
//         Username
//       </label>
//       <input
//         className="form-control"
//         type="text"
//         id="username"
//         value={username}
//         onChange={(e) => setUserName(e.target.value)}
//       />
//     </div>
//     <div className="text-input">
//       <label htmlFor="range" className="form-label">
//         Range
//       </label>
//       <input
//         className="form-control"
//         type="text"
//         id="range"
//         value={range}
//         onChange={(e) => setRange(e.target.value)}
//       />
//     </div>
//     <button type="submit" className="btn btn-primary">
//       Add scooter
//     </button>
//   </form>
// </div>
