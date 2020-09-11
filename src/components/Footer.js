import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* <!-- Footer --> */}
        <footer className="page-footer font-small mdb-color lighten-3 pt-4">

          {/* <!-- Footer Links --> */}
          <div className="container text-center text-md-left">

            {/* <!-- Grid row --> */}
            <div className="row">

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">

                {/* <!-- Content --> */}
                <h5 className="font-weight-bold text-uppercase mb-4">THOUGHT OF THE DAY</h5>
                <p>What is now proved was once only imagined.</p>
                <p>The best way to predict the future is to create it.</p>
                <p>The world needs dreamers and the world needs doers. But above all what the world needs most are dreamers that do.</p>
              </div>
              {/* <!-- Grid column --> */}

              <hr className="clearfix w-100 d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">

                {/* <!-- Links --> */}
                <h5 className="font-weight-bold text-uppercase mb-4">About</h5>

                <ul className="list-unstyled">
                  <li>
                    <p className="text-capitalize">
                      Projects
                      </p>
                  </li>
                  <li>
                    <p className="text-capitalize">
                      Events

                      </p>
                  </li>
                  <li>
                    <p className="text-capitalize">
                      Images
                      </p>
                  </li>
                  <li>
                    <p className="text-capitalize">
                      Blogs
                      </p>
                  </li>
                </ul>

              </div>
              {/* <!-- Grid column --> */}

              <hr className="clearfix w-100 d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">

                {/* <!-- Contact details --> */}
                <h5 className="font-weight-bold text-uppercase mb-4">Contact Us</h5>

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
              {/* <!-- Grid column --> */}

              <hr className="clearfix w-100 d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 text-center mx-auto my-4">

                {/* <!-- Social buttons --> */}
                <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>

                {/* <!-- Facebook --> */}
                <div className="row rowFooter my-3">
                  <div className=" rowFooterIn">
                    <i className="fab fa-facebook-f fooicons"></i>
                  </div>
                </div>

                {/* <!-- Twitter --> */}
                <div className="row rowFooter my-3">
                  <div className=" rowFooterIn">
                    <i class="fab fa-instagram fooicons"></i>
                  </div>
                </div>

                <div className="row rowFooter my-3">
                  <div className=" rowFooterIn">
                    <i className="fab fa-twitter fooicons"></i>
                  </div>
                </div>
                <div className="row rowFooter my-3">
                  <div className=" rowFooterIn">
                    <i className="fab fa-dribbble fooicons"></i>

                  </div>
                </div>

                {/* <!-- Google +--> */}
                {/* <!-- Dribbble --> */}

              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
          {/* <!-- Footer Links --> */}
          <hr />
          {/* <!-- Copyright --> */}
          <div className="footer-copyright text-center py-3 font-weight-bold">© 2020 Copyright:
          InnovationGarage.com
                </div>
          {/* <!-- Copyright --> */}
          <br />
          <br />
        </footer>
        {/* <!-- Footer --></div> */}
      </div>
    )
  }
}
