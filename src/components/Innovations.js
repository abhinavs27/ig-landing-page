import React, { Component } from 'react'
import VerticleTimeline from './VerticleTimeline'
import Events from './Events'
export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid responsiveJumbo ">
          <div className="container">

            <VerticleTimeline />
            <Events />
          </div>
        </div>
      </div>
    )
  }
}
