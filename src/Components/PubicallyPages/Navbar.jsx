import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm ">
        <div className="container ">
          <a className="navbar-brand fw-bold fs-4" href="/">
         <img src="https://chisnghiax.com/ciseco/static/media/logo.95d47bbac8db6c1e8f997bbf26ca05cf.svg" alt=""/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                <i className="fa fa-male" aria-hidden="true"></i> Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                <i className="fa fa-female" aria-hidden="true"></i> Women
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                <i className="fa fa-child" aria-hidden="true"></i> Kids
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                <img src="https://img.icons8.com/ios-filled/50/null/trainers.png" height={20} alt=".."/>  Shoes
                </a>
              </li>
            </ul>
            <div className="button">
              <a href="/" className="btn btn-outline-info">
                {" "}
                <i className="fa fa-sign-in me-1"></i> Admin
              </a>
              <Link to="/UserSignup" className="btn btn-outline-info ms-2">
                {" "}
                <i className="fa fa-user-plus me-1 "></i> Signup
              </Link>
              <Link to="/userLogin" className="btn btn-outline-info ms-2">
                
                <i className="fa fa-shopping-cart me-1"></i> Cart
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>



    </>
  )
}
