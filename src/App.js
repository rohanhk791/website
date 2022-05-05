import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbarc from "./Components/Navbar";

import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import About from "./Components/Aboutus";
import Service from "./Components/Homeloan";
import Services from "./Components/Personalloan";
import Servic from "./Components/Vehicleloan";
import Footer1 from "./Components/Footer";

  class App extends Component {
  render() {
    return (
      <div class="">
        <Navbarc/>
       
       
      
        <br></br>

        <br>
        </br>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="Homeloan" element={<Service />} />
          <Route path="Personalloan" element={<Services />} />
          <Route path="Vehicleloan" element={<Servic />} />
      
          {/* <Route path="/" element={<Home />} />  */}
        </Routes>
        <Footer1/>
      </div>
    );
      
}
  }
export default App;