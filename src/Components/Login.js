import React, { Component } from "react";
function Register() {
    return(
        <div>
            <br></br>
            <br></br>
       
      <div className="form">
          <h1><center>Login</center></h1>
          <div className="form-body">
              
            
              <div className="username">
               
                  <label className="form__label" for="firstName">User Name </label>
                  <input className="form__input" type="text" id="userName" placeholder="User Name"/>
              </div>
              
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              
          </div>
          <div class="">
              <center><button type="submit" class="btn">Login</button></center>
              
          </div>
     
  
      </div> 
      <br></br> 
      </div>  
       
    )       
}
export default Register;