import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid mt-5">
          <div className="container">
            <div className="text-center">
              <h3 className="mb-4">Subscribe Us</h3>
              <p>There is an innovator inside of all of us. Subscribe us to explore yours.</p>

              <br />
            </div>
            <div className="text-center ">
              <form className="form-inline">
                <input type="text" className="form-control mb-2 mr-sm-2" id="subscribe" placeholder="Email Address" />
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


