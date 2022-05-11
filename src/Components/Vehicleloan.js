import React, { Component } from "react";
import Img3 from './assets/6.png';
import Table from './Styles/tablev1';

class Services2 extends Component {
  render() {
    return (
      <div className='bike'>
      <br></br>
      <center><h1>Vehicle Loan </h1></center>
      <br></br>
      <center><img className="pic" src={Img3} />
      <br></br>
      <br></br>
      <p>
      Vehicle Loan Interest Rates
Compare the lowest home loan interest rate starting from 6.40% p.a. and apply for the best home loan. Get the complete list of current housing loan rate of interest in India from all leading banks and financial institutions.
      </p> 
      <h2>
      Vehicle Loan Interest Rate 2022
      </h2></center>
      <Table/>
      <a href="Personalloanform" class="btn btn-warning text-white btn-lg Button1">Apply Now</a>
        <br></br>
        <br></br>
        </div>
    );
  }
}

export default Services2;