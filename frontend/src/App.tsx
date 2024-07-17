import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScooterPage from "./components/ScooterPage";
import Home from "./components/Home";
import About from "./components/LeaderBoard";
import { useState } from "react";
import LeaderBoard from "./components/LeaderBoard";

function App() {
  // const [scooterData, setScooterData] = useState(null);
  return (
    <>
      <Routes>
        <Route path="/" element={<ScooterPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/scooters" element={<ScooterPage />}></Route>
        <Route path="/leaderboard" element={<LeaderBoard />}></Route>
      </Routes>
    </>
  );
}

export default App;
