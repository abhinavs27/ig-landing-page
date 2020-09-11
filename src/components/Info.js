import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    const mystyle = {

    }
    return (
      <div>
        {/* <hr /> */}
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center ">
            <div className="row mx-5 ">
              <div className="col-md-6 col-sm-12">
                <h2 className="mb-4">Who we are?</h2>
                <p className="text-justify font-weight-light" style={mystyle}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto, ex veritatis tempora aliquid labore natus autem iusto magni dicta incidunt nostrum odit veniam voluptas provident minus saepe reiciendis nulla dolore delectus molestias.</p>
                <p className="text-justify font-weight-light">

                  Numquam architecto, ex veritatis tempora aliquid labore natus autem iusto magni dicta incidunt nostrum odit veniam voluptas provident
                </p>
                <p className="text-justify font-weight-light">

                  Pomquam architecto, ex veritatis tempora aliquid labore natus autem iusto magni dicta incidunt nostrum odit veniam voluptas provident
                </p>
              </div>

              <div className="col-md-6 col-sm-12">
                <img src={`${process.env.PUBLIC_URL}/img/ig building.png`} alt="Innovation garage logo" className="img-fluid" width="300px" height="250px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
