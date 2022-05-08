import React, { Component } from "react";
function Register() {
    return(
      <div className="form">
          <div className="form-body">
            
              <div className="username">
               
                  <label className="form__label" for="firstName">User Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              
          </div>
          <div class="footer">
              <button type="submit" class="btn">Login</button>
          </div>
     
  
      </div>      
    )       
}
export default Register;