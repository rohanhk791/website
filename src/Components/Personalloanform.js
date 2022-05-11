import React from 'react';
 

  function Personalloanform() {

    return (
      
        <div className="form">
              <center><h1>Enter the details</h1></center>
        <div className="form-body">
            <div className="username">
                <label className="form__label" for="firstName">First Name </label>
                <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
            </div>
            <div className="lastname">
                <label className="form__label" for="lastName">Last Name </label>
                <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
            </div>
            <div className="email">
                <label className="form__label" for="email">Email </label>
                <input  type="email" id="email" className="form__input" placeholder="Email"/>
            </div>
            <div className="address">
                <label className="form__label" for="address">Address</label>
                <input  type="address" id="address" className="form__input" placeholder="address"/>
            </div>
            <div className="age">
                <label className="form__label" for="age">Age</label>
                <input  type="age" id="age" className="form__input" placeholder="age"/>
            </div>
            <div className="addhar">
                <label className="form__label" for="addhar">Addhar No</label>
                <input  type="addhar" id="addhar" className="form__input" placeholder="addhar no"/>
            </div>
            <div className="occupation">
                <label className="form__label" for="occupation">Occupation</label>
                <input  type="occupation" id="occupation" className="form__input" placeholder="occupation"/>
            </div>
            <div className="income">
                <label className="form__label" for="income">Income</label>
                <input  type="income" id="income" className="form__input" placeholder="income"/>
            </div>
            <div className="password">
                <label className="form__label" for="password">Password </label>
                <input className="form__input" type="password"  id="password" placeholder="Password"/>
            </div>
            <div className="confirm-password">
                <label className="form__label" for="confirmPassword">Confirm Password </label>
                <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
            </div>
        </div>
        <div class="">
            <center><button type="submit" class="btn">Submit</button></center>
        </div>
    </div>    

    );
  }
export default Personalloanform;