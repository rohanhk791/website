import React, { Component } from "react";
function Register() {
    return(
        <div>
            <br>
            </br>
            <br></br>
      <div className="form">
          <center><h1>Contact</h1></center>
          <div className="form-body">
            
              <div className="username">
               
              <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
      <div>
      <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
      <div>
      <label className="form__label" for="email">Message </label>
        <textarea id="message" required />
      </div>
      <div class="">
              <center><button type="submit" class="btn">Submit</button></center>
          </div> 
      </div>     
      </div>
      <br></br>
      </div>
    )     
}
export default Register;