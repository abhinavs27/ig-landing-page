import React, { Component } from 'react'

export default class Events extends Component {
  render() {
    const mystyle = {
      // padding: "10px",
      // fontFamily: "Arial"
      // maxWidth: "350px"

    };
    return (
      <div className="jumbotron jumbotron-fluid pt-3">
        <div className="container">
          {/* start of main row contain whole container */}
          <div className="row">
            {/* Column 1(left)  */}

            <div className="col-md-6 col-sm-12 my-5">
              {/* Column 1(left) Row1 */}
              <div className="row">
                <div className="col-12 " style={mystyle}>
                  <div className="text-center">
                    <h3 className="mb-5 pb-2 events ">Latest Posts</h3></div>
                  <div className="  card  my-2" >
                    <div className="card-body">
                      {/* <img src="https://dummyimage.com/50x100/636363/000" className="inline d-inline" /> */}
                      <h5 className="card-title">Ideathon 2019</h5>
                      <h6 className="card-subtitle mb-2 text-muted"><i class="far fa-calendar-alt mr-3"></i>April 25, 2020</h6>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit architecto.</p>
                    </div>
                  </div>
                </div >
              </div >
              {/* Column 1(left) Row 2 */}
              <div className="row">
                <div className="col-12 " style={mystyle}>
                  <div className="  card  my-2" >
                    <div className="card-body">
                      {/* <img src="https://dummyimage.com/50x100/636363/000" className="inline d-inline" /> */}
                      <h5 className="card-title">Ideathon 2019</h5>
                      <h6 className="card-subtitle mb-2 text-muted"><i class="far fa-calendar-alt mr-3"></i>April 25, 2020</h6>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit architecto.</p>
                    </div>
                  </div>
                </div >
              </div >
              {/* Column 1(left) Row3 */}
              <div className="row">
                <div className="col-12 " style={mystyle}>
                  <div className="  card  my-2" >
                    <div className="card-body">
                      {/* <img src="https://dummyimage.com/50x100/636363/000" className="inline d-inline" /> */}
                      <h5 className="card-title">Ideathon 2019</h5>
                      <h6 className="card-subtitle mb-2 text-muted"><i class="far fa-calendar-alt mr-3"></i>April 25, 2020</h6>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit architecto.</p>
                    </div>
                  </div>
                </div >
              </div >

            </div> {/* end Column 1(left)  */}

            {/* Column 2(right)  */}
            <div className="col-md-6 col-sm-12 my-5">
              {/* Column 2 Row 1 */}
              <div className="row">
                <div className="col-12 " >
                  <div className="text-center">
                    <h3 className="mb-5 pb-2 events ">Upcoming Events</h3></div>
                  <div className="  card  my-2" >
                    <div className="card-body">
                      {/* <img src="https://dummyimage.com/50x100/636363/000" className="inline d-inline" /> */}
                      <h5 className="card-title">Artificial Intelligence Workshop </h5>
                      <h6 className="card-subtitle mb-2 text-muted"><i class="far fa-calendar-alt mr-3"></i>April 25, 2020</h6>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit architecto.</p>
                    </div>
                  </div>
                </div >
              </div >
              {/* Column 2 Row 2 */}
              <div className="row">
                <div className="col-12 " >
                  <div className="  card  my-2" >
                    <div className="card-body">
                      {/* <img src="https://dummyimage.com/50x100/636363/000" className="inline d-inline" /> */}
                      <h5 className="card-title">Artificial Intelligence Workshop </h5>
                      <h6 className="card-subtitle mb-2 text-muted"><i class="far fa-calendar-alt mr-3"></i>April 25, 2020</h6>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit architecto.</p>
                    </div>
                  </div>
                </div >
              </div >
              {/* Column 2 Row 3 */}
              <div className="row">
                <div className="col-12 " >
                  <div className="  card  my-2" >
                    <div className="card-body">
                      {/* <img src="https://dummyimage.com/50x100/636363/000" className="inline d-inline" /> */}
                      <h5 className="card-title">Artificial Intelligence Workshop </h5>
                      <h6 className="card-subtitle mb-2 text-muted"><i class="far fa-calendar-alt mr-3"></i>April 25, 2020</h6>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit architecto.</p>
                    </div>
                  </div>
                </div >
              </div >



            </div>
          </div> {/* end of main row contain whole container */}

        </div >

      </div >
    )
  }
}
