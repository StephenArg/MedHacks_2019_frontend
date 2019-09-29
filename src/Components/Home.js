import React from 'react'
 
const Home = props => {
  return (
    <div id="content">
      <div id="hero" className="row">
        <div className="col-md-12">
            <div id="hero-content"  className="text-center">
              <h1>DELIVERING XRAY DIAGNOSIS YOU AND YOUR PATIENTS CAN RELY ON</h1>
            <a href="signup"><button type="button" id="home-signup" class="btn btn-primary center">Sign Up</button></a>
            <a href="login"><button type="button" id="home-login" class="btn btn-primary center">Login</button></a>
            </div>
        </div>
      </div>
      <div id="main">
        <div className="row">
          <div className="col-md-4 service-col">
              <h3 className="text-center">Diagnosis</h3>
              <p>Our robust machine learning model is capable of detecting several chronic diseases.</p>
          </div>
          <div className="col-md-4 service-col">
              <h3 className="text-center">Certainty</h3>
              <p>We are able to deliver a diagnosis with up to 97% certainty, which rivals that of even the most talented radiologists.</p>
          </div>
          <div className="col-md-4 service-col">
              <h3 className="text-center">Treatment</h3>
              <p>Not only do we detect diseases, but we deliver actionable information and recommendations.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Home
