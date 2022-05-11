import React, { Component } from "react";
import Img2 from './assets/5.png';
import './Styles/Homeloan.css';
import Table from './Styles/table.js';


class Services1 extends Component {
  render() {
    return (
      <div className='hom'>
        <br></br>
        <center><h1>Home Loan</h1></center>
        <br></br>
        <center><img className="pic" src={Img2} />
        <br></br>
        <br></br>
        <p>
        Home Loan Interest Rates
Compare the lowest home loan interest rate starting from 6.40% p.a. and apply for the best home loan. Get the complete list of current housing loan rate of interest in India from all leading banks and financial institutions.
        </p> 
        <h2>
        Home Loan Interest Rate 2022
        </h2></center>
        <Table/>
        <a href="Personalloanform" class="btn btn-warning text-white btn-lg Button1">Apply Now</a>
        <br></br>
        <br></br>
        </div>
        
    );
  }
}
// function Display() 
// {
//   const Display = det.map(
//     (records) => {
//       return (
//         <tr>
//           <td>{records.No}</td>
//           <td>{records.Name}</td>
//           <td>{records.Loan}</td>
//           <td>{records.period_of_years}</td>
//           <td>{records.interest_rate}</td>
//         </tr>
//       )
//     }
//   )

//   return (
//     <div>
//       <table class="table table-dark">
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>Name</th>
//             <th>Loan</th>
//             <th>period_of_years</th>
//             <th>Interest_rate</th>
//           </tr>
//         </thead>
//         <tbody class= "table table-light">
//           {Display}
//         </tbody>
//       </table>
//     </div>
//   )
// }
export default Services1;