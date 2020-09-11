import React, { Component } from 'react'

export default class VerticleTimeline extends Component {
  render() {
    return (
      <div>
        {/* https://bootsnipp.com/snippets/Q0ppE */}
        <div className="jumbotron jumbotron-fluid mt-5  pt-5">
          <div className="container">

            <div className="text-center">
              <h2 className="mb-4">Our Events</h2>
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
                <div className="main-timeline7">
                  <div className="timeline">
                    <div className="timeline-icon"><i className="fa fa-globe"></i></div>
                    <span className="year">2020</span>
                    <div className="timeline-content">
                      <h5 className="title">Webathon</h5>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                                </p>
                    </div>
                  </div>
                  <div className="timeline">
                    <div className="timeline-icon"><i className="fa fa-rocket"></i></div>
                    <span className="year">2019</span>
                    <div className="timeline-content">
                      <h5 className="title">Makerswave</h5>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                                </p>
                    </div>
                  </div>
                  <div className="timeline">
                    <div className="timeline-icon"><i className="fas fa-trophy"></i></div>
                    <span className="year">2018</span>
                    <div className="timeline-content">
                      <h5 className="title">Machine learning Workshop</h5>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                                </p>
                    </div>
                  </div>
                  <div className="timeline">
                    <div className="timeline-icon"><i className="fa fa-mobile"></i></div>
                    <span className="year">2017</span>
                    <div className="timeline-content">
                      <h5 className="title">Artificial intelligence Workshop</h5>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                                </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >

    )
  }
}
