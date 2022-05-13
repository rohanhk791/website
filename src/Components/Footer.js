import React from "react";
import { Link } from "react-router-dom";
function Footer()
{
    return(
    <div className="App">
    <div class="container-fluid1" id="footer">
      <div class="container my-5">
      <footer class="text-center text-lg-start text-white">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <br>
              </br>
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4 hh">
                  <i class="fas fa-gem me-3"></i>FairFinance 
                </h6>
                <p>
                Sakruthi Complex, 2rd Cross A block, Vivekananda Nagar, Mandya, Karnataka state, PIN-571401,
                </p>
                <p>Ph no : 6362994070</p>
                <br></br>
                <div class="social">
                  <Link to="www.facebook.com" class="me-4 text-reset">
                    <i class="fa fa-facebook" ></i>
                  </Link>
                  <Link to="www.twitter.com" class="me-4 text-reset">
                    <i class="fa fa-twitter"></i>
                  </Link>
                  <Link to="www.google.com" class="me-4 text-reset">
                    <i class="fa fa-google"></i>
                  </Link>
                  <Link to="www.instagram.com" class="me-4 text-reset">
                    <i class="fa fa-instagram"></i>
                  </Link>
                </div>
                <br></br>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 fstt">
                <h6 class="text-uppercase fw-bold mb-4">
                  About
                </h6>
                <p>
                <Link to="about" class="text-reset">About Us</Link>
                </p>
                <p>
                  <Link to="" class="text-reset">Our Team</Link>
                </p>
            
                <p>
                <Link to="" class="text-reset">Terms and Condition</Link>
                </p>
                <p>
                  <Link to="" class="text-reset">Privacy Policy</Link>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 fst1">
                <h6 class="text-uppercase fw-bold mb-4">
                  Services
                </h6>
                <p>
                <Link to="homeloan" class="text-reset">Home Loan</Link>
                </p>
                <p>
                <Link to="personalloan" class="text-reset">Personal Loan</Link>
                </p>
                <p>
                <Link to="vehicleloan" class="text-reset">Vehicle Loan</Link>
                </p>
                <p>
                <Link to="#" class="text-reset">Educational Loan</Link>
                </p>

              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 fst2">
                <h6 class="text-uppercase fw-bold mb-4">
                  Other
                </h6>
                <p>
                <Link to="contact" class="text-reset">Contact Us</Link>
                </p>
                <p>
                <Link to="" class="text-reset">Help</Link>
                </p>
                <p>
                <Link to="" class="text-reset">Privacy</Link>
                </p>
                <p>
                <Link to="Getputpost" class="text-reset">Getputpost</Link>
                </p>
              </div>
            </div>
          </div>
      </footer>
    </div>
    </div> 
    </div>
    )
}
export default Footer;