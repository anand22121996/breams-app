import { Link } from "react-router-dom";
import React from "react";
import logo from  '../../../../src/log.jpg'
// import HomePage from "../pages/Homepage";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import NotFound from "../pages/NotFound";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes} from "react-router-dom";
class Navbar extends React.Component
{
   
    render()
    { 
        return (
            <><header class="headerWrapper">
                <div class="container"> 
                    <div class="row">
                        <div class="col-sm-12 col-md-5 col-lg-5 logo">
                            {/* <Link <img src="./assets/img/logo.png" alt="logo brems"></Link> */}
                            <Link>
                                <img src={logo} alt='logo brems' />
                            </Link>
                            <h1>Book Reserve System Management</h1>

                        </div>
                        <div class="col-sm-6 col-md-2 col-lg-3 col-md-offset-2 col-lg-offset-9">
                            <div id="search-input">
                                <div class="input-group col-md-18">
                                    <input type="text" class="form-control input-lg" name="mySearch" placeholder="search" />
                                    <span class="input-group-btn"><button> &gt;</button></span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </header><nav className="navbar navbar-expand-lg navbar-dark bg-primary">

                    <div className="container">
                        {/* <Link className="navbar-brand" href="/">
Recat User
</Link> */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* <div className="collapse navbar-collapse"> */}
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>

                        </ul>

                        {/* </div> */}

</div>

                    </nav></>
        )
    
        }
}
export default Navbar;