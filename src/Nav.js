import React from "react";
import {  Route, Routes, BrowserRouter } from "react-router-dom";
import Details from "./Components/Details/Details"; 
import App from './App'
import Home from "./Components/Home";

function Nav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:name" element={<Details/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Nav;
