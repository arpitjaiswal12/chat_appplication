import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
