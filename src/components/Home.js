import React, { Component } from 'react'
import Form from './Form'
import Events from './Events'
import Info from './Info'
import Gallery from './Gallery'
import Footer from './Footer'
import VerticleTimeline from './VerticleTimeline'

export default class AboutUs extends Component {
  render() {
    // const mystyle = {

    //   padding: "10px",
    //     ▪️Innovate
    //     ▪️Incubate
    // Wanna know more ? Come and visit us!
    // };
    return (
      <div>
        <div className="jumbotron jumbotron-fluid responsiveJumbo pt-5">
          <div className="container">
            <h1 className="display-4 my-4 pt-5">“There is an <span className="inno">innovator</span> inside of all of us.”</h1>
            <hr />
            <p className=" my-4">With us Learning and innovation go hand in hand. The arrogance of success is to think that what you did yesterday will be sufficient for tomorrow.</p>
            <div className="text-center mt-5 pt-2">
              <ul id="menu">
                <li className="mx-5"><i class="fas fa-lightbulb colorText mr-2"></i>Ideate
              </li>
                <li className="mx-5"><i class="fas fa-tools colorText mr-2"></i>Innovate
              </li>
                {/* <i class="fas fa-robot"></i><i class="fas fa-laptop-code "></i> */}
                <li className="mx-5"><i class="fas fa-rocket colorText mr-2"></i>Incubate
              </li>
              </ul>
            </div>
            <div className="text-center mt-5">
              <p className="test">Wanna know more ? Come and visit us!</p>
            </div>
            <div className="text-center mt-2 ">
              <button type="button" class="btn btn-warning btn-lg">Connect With Us<i class="fas fa-arrow-circle-right ml-2"></i></button>
            </div>
          </div>
        </div>

        <Info />
        <VerticleTimeline />
        <Events />
        <Gallery />
        <Form />
        <Footer />

      </div >
    )
  }
}
