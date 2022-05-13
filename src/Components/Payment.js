// import React from 'react'


// export default function Infocard() {
//   return (
//     <div>
// Infocard</div>
//   )
// }

import React from 'react'

import '../Components/infocard.css';
import { useNavigate } from 'react-router-dom';
import Info from '../Components/Infoloan.json';

const Payment =() => {
  

  const InfocardCards =(cards,index) =>
  {
    let navigate = useNavigate();
    return(
    
      <div className="col-md-3 ">
        <div className="card Infocard cardbg" key={index}>
          <div className="card-body">
            <br></br>
         <img src={cards.path} class="img" />
       <center>  <h1 className="card-title">{cards.type}</h1>
            <p className="card-text">{cards.msg}</p>
            <h4 className="card-title">{cards.time}</h4>
            <h4 className="card-title">{cards.time1}</h4>
            <h4 className="card-title">{cards.time2}</h4>
            <br></br>
        
            <a href="https://rzp.io/i/nc4yKIfOP"class="btn btn-primary">Pay Now</a>   
            <br></br>    
            <br></br>    
            </center> 
          </div>
        </div>
      </div>  
    )

  }

  return(
    <>
    <div className="container-fluid mutxt infocard">
    <center> <h1 className='infotxt' >Loan Payment</h1></center> 
    <br></br>
    <div className='row'>
      {Info.map(InfocardCards)}

      </div>
      <br></br>
      <br></br>
      <br></br>
    

  </div>
  </>
    
  )
}

export default Payment