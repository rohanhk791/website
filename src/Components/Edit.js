import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Edit = () => {
let navigate = useNavigate();
const {id} = useParams();


  const [user, setUser] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  }
  )
  const {FirstName,LastName, Email,Password,ConfirmPassword } = user

const handleChange = (e) => {
  setUser({...user, [e.target.name]: e.target.value });
};
const onSubmit =async (e) =>{
  e.preventDefault();
  await axios.put(`https://localhost:44356/Api/Registers/${id}`, user);
  alert('data submited successfully');
  navigate('/services');
}
const loadUser=async() =>{
  const response = await axios.get(`https://localhost:44356/Api/Registers/${id}`);
  setUser(response.data)
}
useEffect(()=>{
  loadUser()
},[]);
return (
  <Container className="App111">
    <div className=''>

    </div>
    <br></br>
    <center><h4 className="PageHeading1">Edit User</h4><br></br></center>
    <Form className="form11" >
      <Col>
        <FormGroup row>
          <Label for="id" sm={2}>User id</Label>
          <Col sm={10}>
            <Input type="text" name="id" onChange={e => handleChange(e)} value={id} placeholder="Enter id" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="FirstName" sm={2}>FirstName</Label>
          <Col sm={10}>
            <Input type="text" name="FirstName" onChange={e => handleChange(e)} value={FirstName} placeholder="Enter FirstName" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="LastName" sm={2}>LastName</Label>
          <Col sm={10}>
            <Input type="text" name="LastName" onChange={e => handleChange(e)} value={LastName} placeholder="Enter LastName" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="Email" name="Email" onChange={e => handleChange(e)} value={Email} placeholder="Enter Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Password" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="text" name="Password" onChange={e => handleChange(e)} value={Password} placeholder="Enter password" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="ConfirmPassword" sm={2}>ConfirmPassword</Label>
          <Col sm={10}>
            <Input type="text" name="ConfirmPassword" onChange={e => handleChange(e)} value={ConfirmPassword} placeholder="Enter ConfirmPassword" />
          </Col>
        </FormGroup>
      </Col>
      <Col><br></br>
        <FormGroup row>
          <Col sm={5}>
          </Col>
          <Col sm={1}>
            <button type="button" onClick={e=> onSubmit(e)} className="btn btn-success">Submit</button>
          </Col>
          <Col sm={1}>
            <Button color="danger" to="/Getputpost">Cancel</Button>{' '}
          </Col>
          <Col sm={5}>
          </Col>

        </FormGroup>
      </Col>
      <Link className="btn btn-primary" to="/Getputpost">Back </Link>
    </Form><br></br>
  </Container>
);
  

}

export default Edit; 