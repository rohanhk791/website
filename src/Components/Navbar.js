import React from 'react';
import { Link } from "react-router-dom";

function Navbarc(props)
{
return (
    <div>
    <nav class="navbar navbar-inverse navbar-fixed-top App" >  
 <div class="container-fluid">  
   <div class="navbar-header">
     <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>                        
   </button>
     <a class="navbar-brand" href="#">FairFinance</a>  
   </div>       
     <div class="collapse navbar-collapse nav" id="myNavbar">
   <ul class="nav navbar-nav">  
     <li class="active"><Link to="home">Home</Link></li>
     <li class="dropdown"><a class="dropdown-toggle navv" data-toggle="dropdown" href="#">Services <span class="caret"></span></a>  
              <ul class="dropdown-menu">  
                <li><Link to="Homeloan">Home loan</Link></li> 
                <li><Link to="Vehicleloan">Vehicle loan</Link></li>
                <li><Link to="Personalloan">Personal loan</Link></li>   
                <li><Link to="Getputpost">Get Put Post</Link></li> 
                
            
              </ul>  
            </li> 

            <li><Link to="payment">Payment</Link></li> 
     <li><Link to="contact">Contact</Link></li> 
     <li><Link to="about">About Us</Link></li>  
   </ul> 
   
   <ul class="nav navbar-nav navbar-right">  
     <li><Link to="register"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>  
     <li><Link to="login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>  
   </ul>   
 </div> 
 </div>  
</nav>
     </div>
     )
     }
export default Navbarc;