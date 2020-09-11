import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid mt-5  pt-5">
          <div className="container">
            <h3>Contact Us</h3>

            <p>“The world needs dreamers and the world needs doers. But above all what the world needs most are dreamers that do.” –Sarah Ban Breathnach</p>


            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <br></br>

            <ul className="list-unstyled">
              <li>

                <p className="">
                  <i className="fas fa-home mr-3 "></i>
                     NIT Warangal, Telangana, India</p>
              </li>
              <li>
                <p>
                  <i className="fas fa-envelope mr-3"></i> ig@company.com</p>
              </li>
              <li>
                <p>
                  <i className="fas fa-phone mr-3"></i> +9 999 888 77 72</p>
              </li>
              <li>
                <p>
                  <i className="fas fa-print mr-3"></i> +9 999 888 77 74</p>
              </li>
            </ul>

          </div>

        </div>
      </div>
    )
  }
}
