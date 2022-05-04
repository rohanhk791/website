import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbarc from "./Components/Navbar";

import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Aboutus from "./Components/Aboutus";

  class App extends Component {
  render() {
    return (
      <div>
        <Navbarc/>
       
        <br>
        </br>
        <br>
        </br>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
      
}
  }
export default App;
