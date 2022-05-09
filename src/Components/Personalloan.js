import React, { Component } from "react";
import Img3 from './assets/8.png';
import { Link } from "react-router-dom";

class Services3 extends Component {
  render() {
    return (
      <div className='bike'>
      <br></br>
      <center><h1>Personal Loan </h1></center>
      <br></br>
      <center><img className="pic" src={Img3} />
      <br></br>
      <br></br>
      <p>
      Financial woes can arise at any time. You may need funds to pay for educational expenses for your children or a wedding in the house. There could also be unexpected medical bills to deal with. Availing an instant personal loan online as an additional back-up is something you could consider if you find yourself in a tough spot. A Personal Loan is an unsecured loan provided by banks and financial institutions to meet personal exigencies.
      </p> 
      <h2>
      Features & Benefits of Personal Loan
      </h2>
      <p>
      1) The rate of Interest: The Rate of Interest on Personal Loans/ Annual Percentage Rate (APR) is between 9.6%-24% depending on your credit score, income and so forth.</p>
      <p>2) Loan amount: You can get a loan online for as low as 10,000 and as high as  50 Lakhs depending on your requirement and eligibility.</p>
        <p>3) Loan tenure: Personal loans are available for periods as short as 12 months. The average tenure for a Personal Loan is between 12 and 60 months,depending on the loan amount.</p>
<p>4) Security: Due to its unsecured nature, collateral is not required.</p>
<p>5) Loan turnaround time: A Personal Loan typically has the fastest turnaround time in the industry. Many banks personal loans online approval within 48 hours after submission of the online application.</p>
<p>6) Processing fees: It depends on the individual bank. It usually ranges between  500 to - 2.5% of the loan amount.</p>
<p>7) Prepayment penalty: Banks charge prepayment penalty if you repay your Personal Loan before the determined period. The charges range between 1-2% of the outstanding amount on the date of closure.</p></center>
 
 
 
 <a href="Personalloanform" class="btn btn-warning text-white btn-lg Button1">Apply Now</a>
<br></br>
<br></br>
        </div>
    );
  }
}

export default Services3;