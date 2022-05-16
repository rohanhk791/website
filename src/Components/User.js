import react, { useEffect,useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../App.css';

const User = () => {
    const [user, setUser] = useState({
        id: '',
        FirstName: '',
        LastName: '',
        Email: '',
        Password: '',
        ConfirmPassword: ''
    }
    )
    const { id } = useParams();
    const loadUser = async () => {
        const response = await axios.get(`https://localhost:44356/Api/Registers/${id}`);
        setUser(response.data)
    }
    useEffect(()=>{
        loadUser()
    })

    return (
        <div>
 
            <div className='container use'>
                <h1 className='display-4'>Userid___{user.id}</h1>
                <hr/>
                <ul className='list-group w-50 use1'>
            
                    <li className='list-group-item'>User FirstName : {user.FirstName}</li>
                    <li className='list-group-item'>User LastName : {user.LastName}</li>
                    <li className='list-group-item'>User Email : {user.Email}</li>
                    <li className='list-group-item'>User Password : {user.Password}</li>
                    <li className='list-group-item'>User ConfirmPassword : {user.ConfirmPassword}</li>
                    
                </ul>

                <Link className="btn btn-primary" to="/Getputpost">Back </Link>
<br></br>
                
            </div>
            


        </div>
    )
}
export default User;
// import React from 'react'; 
// function User() {
//     return(
//     <div>
//         <h1>hiiiiiiiiiiiiiiiiiiiiiiiii fire</h1>
//    </div>      
//         )       
//     }
//     export default User;