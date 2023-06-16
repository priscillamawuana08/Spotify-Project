import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import "../index.css";

function Navbar() {
    return (
        <div className="page-wrapper toggled">
            <div className="page-content bg-light">
                <div className="top-header shadow">
                    <div className="header-bar d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <Link to="#" className="logo-icon me-3">
                                <img src="assets/images/logo-icon.png" height="30" className="small" alt="" />
                                <span className="big">
                                    <img src="../../assets/images/logo/spotify.png" height="24" className="logo-light-mode" alt="" />
                                    <img src="assets/images/logo-light.png" height="24" className="logo-dark-mode" alt="" />
                                </span>
                            </Link>
                            <Link className="btn btn-icon btn-soft-light me-1" to="/">
                                <i className="mdi mdi-arrow-left"></i>
                            </Link>
                            <Link className="btn btn-icon btn-soft-light" to="/">
                            <i className="mdi mdi-arrow-right"></i>
                            </Link>

                            <div className="search-bar p-0 d-none d-md-block ms-2">
                                <i class="ti ti-angle-right"></i>
                            </div>
                        </div>

                        <ul class="list-unstyled mb-0">
                            {/* <li class="list-inline-item mb-0 ms-1">
                                <div class="dropdown dropdown-primary">
                                    <button type="button" class="btn btn-soft-light signup">Sign up</button>
                                </div>
                            </li> */}

                            <li class="list-inline-item mb-0 mt-0 ms-1">
                                <div class="dropdown dropdown-primary">
                                    <SignIn/>
                                    {/* <button type="button" class="btn btn-soft-light">Log in</button> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;