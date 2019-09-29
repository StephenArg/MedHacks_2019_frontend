import React from 'react';
import ImageDrop from './ImageDrop';

const Dashboard = props => {
  return (
    <div>
      <head>
        <title>MedHacks 2019</title>
      </head>
      <body>
        <div id="dash-header"></div>
        <div id="content">
            <div class="row">
                <div  id="history" class="col-lg-2 col-md-12 sm-12">
                    <div class="xray_prev">
                        <h3>9/28/19 - 11:28 AM</h3>
                        <img src="https://via.placeholder.com/150C/" />
                    </div>
                    <div class="xray_prev">
                        <h3>9/28/19 - 11:28 AM</h3>
                        <img src="https://via.placeholder.com/150C/" />
                    </div>
                    <div class="xray_prev">
                        <h3>9/28/19 - 11:28 AM</h3>
                        <img src="https://via.placeholder.com/150C/" />
                    </div>
                    <div class="xray_prev">
                        <h3>9/28/19 - 11:28 AM</h3>
                        <img src="https://via.placeholder.com/150C/" />
                    </div>
                    <div class="xray_prev">
                        <h3>9/28/19 - 11:28 AM</h3>
                        <img src="https://via.placeholder.com/150C/" />
                    </div>
                </div>
                <div class="col-lg-10 col-md-12">
                  {/* <h2 id="upload">Add a New XRAY</h2> */}
                    <div class="row justify-content-lg-center">
                      <div class="col-lg-6 col-md-12">
                        <h2 id="result">Diagnosis: Acute Bronchitis - Accuracy 92%</h2>
                        <img id="resultImg" src='./bronchitis.jpg' />
                      </div>
                      {/* <ImageDrop /> */}
                    </div>
                </div>
              </div>
            </div>
      </body>
    </div>
  )
}
 
export default Dashboard
