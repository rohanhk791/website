import React, { Component } from "react";
function Register() {
    return(
      <div className="form">
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
      <div class="footer">
              <button type="submit" class="btn">Submit</button>
          </div> 
      </div>     
      </div>
    )     
}
export default Register;