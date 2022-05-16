import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



const Contactlist = (props) => {
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
          <h1 className='text-center'>Customers Feedback</h1>
        </div>
        <table className={`table border shadow table-bordered text-center  ${props.mode}`}>
          <thead className='table-dark' >
            <tr>

              <th scope="col">UserName</th>
              
              
              <th scope="col">Email</th>
              
              <th scope="col">Message</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x, index) => (
              <tr>
                <th scope="row">{index + 1} </th>
                <td>{x.UserName}</td>
               
                <td>{x.Email}</td>
                
                <td>{x.Message}</td>
                
                
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
export default Contactlist;