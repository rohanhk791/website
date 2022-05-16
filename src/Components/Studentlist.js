// import React, { Component } from 'react';  
// import axios from 'axios';  
// import Table from './Table'; 
// //import 'bootstrap/dist/css/bootstrap.css'; 
  
// export default class Studentlist extends Component {  
  
//   constructor(props) {  
//       super(props);  
//       this.state = {business: []};  
//     }  
//     componentDidMount(){  
//       debugger;  
//       axios.get('https://localhost:44356/Api/Registers')  
//         .then(response => {  
//           this.setState({ business: response.data });  
//           debugger;  
  
//         })  
//         .catch(function (error) {  
//           console.log(error);  
//         })  
//     }  
      
//     tabRow(){  
//       return this.state.business.map(function(object, i){  
//           return <Table obj={object} key={i} />;  
//       });  
//     }  
  
//     render() {  
//       return (  
//         <div>  
//           <h4 align="center">User List</h4>  
//           <table className="table table-striped" style={{ marginTop: 10 }}>  
//             <thead>  
//               <tr>  
//                 <th>ID</th>  
//                 <th>FirstName</th>  
//                 <th>LastName </th>  
//                 <th>Email</th> 
//                 <th>Password</th> 
//                 <th>ConfirmPassword</th>
//                 <th>get</th> 
//                 <th>put</th> 
//                 <th>delete</th>  

//                 {/* <th colSpan="4">Action</th>   */}
//               </tr>  
//             </thead>  
//             <tbody>  
//              { this.tabRow() }   
//             </tbody>  
//           </table>  
//         </div>  
//       );  
//     }  
//   }  

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



const Addstudent = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchdata()

  }, [])
  const fetchdata = async () => {
    const response = await axios.get("https://localhost:44356/Api/Registers");
    setData(response.data)
  }

  const deleteuser = async (id) => {
    await axios.delete(`https://localhost:44356/api/Registers/${id}`);
    fetchdata()
  }
  const [mode, setmode] = useState('light');
  return (
    <>
      <div className='container-fluid mb-5'>

    
        <div>
          <h1 className='text-center'>Customers who trust FairFinance Funding</h1>
        </div>
        <table className={`table border shadow table-bordered text-center  ${props.mode}`}>
          <thead className='table-dark' >
            <tr>
              <th scope="col">No</th>
              <th scope="col">FirstName</th>
              
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
             
              <th scope="col">ConfirmPassword</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x, index) => (
              <tr>
                <th scope="row">{index + 1} </th>
                <td>{x.FirstName}</td>
                <td>{x.LastName}</td>
                <td>{x.Email}</td>
                <td>{x.Password}</td>
                <td>{x.ConfirmPassword}</td>
                
                
                <td>
                <Link className='btn btn-outline-primary m-2 ' to={`/User/${x.id}`}>Vision</Link>
                  <Link className='btn btn-outline-warning m-2 ' to={`/Edit/${x.id}`} > Rescript</Link>
                  <Link className='btn btn-outline-warning m-2 ' to={`/reg`} > post</Link>
                  <button className='btn btn-outline-danger m-2 ' onClick={(e) => deleteuser(x.id)}>Take Out</button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  )

}
export default Addstudent;