import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from './assets/1.jpg'

class Home extends Component {
  render() {
    return (
      // <div className="wrapper">
      //   <img src={img} className="img1"></img>
      <div className='hero'>
            <div className='content'>
                <h1>Bank that understands the value of your time</h1>
                
                <p className='search-text'> One of India's leading non-banking financial companies, FairFinance offers personal loans that are packed with benefits. </p>
                <button class="btn btn-warning text-white btn-lg Button">Explore Now</button>
            </div>
        </div>
        // </div>
    );
  }
}

export default Home;