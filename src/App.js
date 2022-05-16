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
import Paymen from "./Components/Payment";
import Form from "./Components/Personalloanform";
import Get from "./Components/Getputpost";
import Use from "./Components/User";
import Edi from "./Components/Edit";
import Reg from "./Components/Registerr";
import Clist from "./Components/Contactlist";

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
          <Route path="Payment" element={<Paymen />} />
          <Route path="Personalloanform" element={<Form />} />
          <Route path="Getputpost" element={<Get/>} />
          <Route path="User/:id" element={<Use/>} />
          <Route path="Edit/:id" element={<Edi/>} />
          <Route path="reg" element={<Reg/>} />
          <Route path="Contactlist" element={<Clist/>} />
          {/* <Route path="/" element={<Home />} />  */}
        </Routes>
        <Footer1/>
      
      </div>
    );
      
}
  }
export default App;