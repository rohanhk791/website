import React, { Component } from "react";
import { Link } from "react-router-dom";
import Img1 from './assets/3.jpg'

class Aboutus extends Component {
  render() {
    return (
      <div className='abt'>
        <br></br>
        <center><h1>About us</h1></center>
        <br></br>
        <center><img src={Img1} /></center>
        <br></br>
        <p>
        Welcome! We’re glad you found us.

We’re a trusted enterprise resource planning (ERP) resource center for business and IT decision makers.

SearchERP was built to help startups, small and mid-sized businesses, and large corporations better leverage ERP technologies and strategies to eliminate legacy platforms that cause data silos, improve business processes, boost profitability, improve financial reporting, and gain more visibility.

Need news, best practices, tutorials, unbiased insights, and essential buyer’s guides?

We have a roster of experienced editorial reporters, industry leaders and IT experts available to tap for the latest ERP trends and developments, and precautions to know.

We cover all pockets of ERP, including: software selections and implementations, on-premise and cloud infrastructures, integration, financials, manufacturing management, supply chain management, digital transformation, analytics, inventory management, asset management, product lifecycles, internet of things (IoT), artificial intelligence (AI), sales and operational planning, and much more.   
        </p>
        <br></br>
        </div>
    );
  }
}

export default Aboutus;