import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ScooterPage from "./components/ScooterPage";
import { useState } from "react";
import Scooter from "./components/Scooter";

function App() {
  // const [scooterData, setScooterData] = useState(null);
  return (
    <>
      <BrowserRouter>
        <ScooterPage />
        {/* {scooterData && <Scooter scooterData={scooterData} />} */}
        {/* <Route path="/add" element={<Add />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route> */}
      </BrowserRouter>
    </>
  );
}

export default App;
