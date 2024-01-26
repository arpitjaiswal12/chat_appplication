import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
