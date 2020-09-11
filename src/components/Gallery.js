import React, { Component } from 'react'

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid  pt-3">
          <div className="container">
            <div className="text-center mt-5">
              <h2>Gallery</h2></div>
            <div id="" className="carousel slide carousel-multi-item carousel-multi-item-2 mt-5 mb-3 mx-5" data-ride="carousel">

              {/* <!--Slides--> */}
              <div className="carousel-inner" role="listbox">

                {/* <!--First slide--> */}
                <div className="carousel-item active">

                  <div className="col-md-3 mb-3">
                    <div className="card">
                      <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(38).jpg"
                        alt="Card image cap" />
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="card">
                      <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(19).jpg"
                        alt="Card image cap" />
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="card">
                      <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(42).jpg"
                        alt="Card image cap" />
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="card">
                      <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(8).jpg"
                        alt="Card image cap" />
                    </div>
                  </div>

                </div>
                {/* <!--/.First slide--> */}

                {/* <!--Second slide--> */}
                <div className="carousel-item">

                  <div className="col-md-3 mb-3">
                    <div className="card">
                      <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                        alt="Card image cap" />
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="card">
                      <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(25).jpg"
                        alt="Card image cap" />
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="card">
                      <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
                        alt="Card image cap" />
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="card">
                      <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(26).jpg"
                        alt="Card image cap" />
                    </div>
                  </div>

                </div>
                {/* <!--/.Second slide--> */}

                {/* <!--Third slide--> */}
                <div className="carousel-item">

                  <div className="col-md-3 mb-3">
                    <div className="card">
                      <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(64).jpg"
                        alt="Card image cap" />
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="card">
                      <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(51).jpg"
                        alt="Card image cap" />
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="card">
                      <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(59).jpg"
                        alt="Card image cap" />
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="card">
                      <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(63).jpg"
                        alt="Card image cap" />
                    </div>
                  </div>

                </div>
                {/* <!--/.Third slide--> */}

              </div>
              {/* <!--/.Slides--> */}

            </div>
            {/* <!--/.Carousel Wrapper--> */}
            <div className="controls-top text-center">
              <a className="black-text" href="#multi-item-example" data-slide="prev"><i className="fas fa-angle-left fa-3x pr-3"></i></a>
              <a className="black-text" href="#multi-item-example" data-slide="next"><i className="fas fa-angle-right fa-3x pl-3"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
