import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <InputForm />
        {/* <Route path="/add" element={<Add />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route> */}
      </BrowserRouter>
    </>
  );
}

export default App;
