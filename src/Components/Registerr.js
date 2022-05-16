import React from 'react';  
import axios from 'axios';  
import './reg.css';
import { useParams,useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  

class Addstudent extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
id:'',  
FirstName:'',  
LastName:'',  
Email:'',
Password:'',
ConfirmPassword:''
}  
}   
Addstudent=()=>{  
  axios.post('https://localhost:44356/Api/Registers', {id:this.state.id,FirstName:this.state.FirstName,LastName:this.state.LastName,Email:this.state.Email,Password:this.state.Password,ConfirmPassword:this.state.ConfirmPassword,})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/Studentlist')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/Studentlist')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  <br></br>
    <h4 className="PageHeading">Enter Informations</h4>  
    <Form className="form1">  
      <Col>  
        <FormGroup row>  
          <Label for="id" sm={2}>id</Label>  
          <Col sm={10}>  
            <Input type="text" name="id" onChange={this.handleChange} value={this.state.id} placeholder="Enter id" />  
          </Col>  
        </FormGroup>  
        <FormGroup row> <br></br> 
          <Label for="FirstName" sm={2}>FirstName</Label>  
          <Col sm={10}>  
            <Input type="text" name="FirstName" onChange={this.handleChange} value={this.state.FirstName} placeholder="Enter FirstName" />  
          </Col>  
        </FormGroup>  
        <FormGroup row> <br></br>  
          <Label for="LastName" sm={2}>LastName</Label>  
          <Col sm={10}>  
            <Input type="text" name="LastName" onChange={this.handleChange} value={this.state.LastName} placeholder="Enter LastName" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  <br></br> 
          <Label for="Email" sm={2}>Email</Label>  
          <Col sm={10}>  
            <Input type="text" name="Email" onChange={this.handleChange} value={this.state.Email} placeholder="Enter Email" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  <br></br> 
          <Label for="Password" sm={2}>Password</Label>  
          <Col sm={10}>  
            <Input type="Password" name="Password" onChange={this.handleChange} value={this.state.Password} placeholder="Enter Password" />  
          </Col>  
        </FormGroup>  
        <FormGroup row> <br></br>  
          <Label for="ConfirmPassword" sm={2}>ConfirmPassword</Label>  
          <Col sm={10}>  
            <Input type="Password" name="ConfirmPassword" onChange={this.handleChange} value={this.state.ConfirmPassword} placeholder="Enter ConfirmPassword" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row> 
          <Col sm={5}>  
          </Col>  
          <Col sm={1}> <br></br>  
          <button type="button" onClick={this.Addstudent} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  <br></br> 
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  <br></br>
      <Link className="btn btn-primary" to="/Getputpost">Back </Link>
    </Form>   <br></br> 
  </Container> 

  
);  
}  
   
}  
   
export default Addstudent; 


// import axios from 'axios';
// import react, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";

// const Addstudent = (props) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchdata()

//   }, [])
//   const fetchdata = async () => {
//     const response = await axios.get("https://localhost:44356/Api/Registers");
//     setData(response.data)
//   }

//   const deleteuser = async (id) => {
//     await axios.delete(`https://localhost:44356/Api/Registers`);
//     fetchdata()
//   }
//   const [mode, setmode] = useState('light');
//   return (
//     <>
//       <div className='container-fluid mb-5'>

    
//         <div>
//           <h1 className='text-center'>Customers who trust FairFinance Funding</h1>
//         </div>
//         <table className={`table border shadow table-bordered text-center  ${props.mode}`}>
//           <thead className='table-dark' >
//             <tr>
//               <th scope="col">Id</th>
//               <th scope="col">FirstName</th>
              
//               <th scope="col">LastName</th>
//               <th scope="col">Email</th>
//               <th scope="col">Password</th>
             
//               <th scope="col">ConfirmPassword</th>
//               <th scope="col">Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((x, index) => (
//               <tr>
//                 <th scope="row">{index + 1} </th>
//                 <td>{x.FirstName}</td>
//                 <td>{x.LastName}</td>
//                 <td>{x.Email}</td>
//                 <td>{x.Password}</td>
//                 <td>{x.ConfirmPassword}</td>
                
                
//                 <td>
//                   {/* <Link className='btn btn-outline-primary m-2 ' to={`/user/${x.id}`}>view</Link>
//                   <Link className='btn btn-outline-warning m-2' to={`/edit/${x.id}`} >edit</Link> */}
//                   <button className='btn btn-outline-danger' onClick={(e) => deleteuser(x.id)}>delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//       </div>
//     </>
//   )

// }
