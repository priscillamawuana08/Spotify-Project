import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Sidebar(){
    return(
        <div className="page-wrapper toggled">
            <nav id="sidebar" class="sidebar-wrapper">
                <div class="sidebar-content" data-simplebar>
                    <div class="sidebar-brand">
                        <Link to="index-2.html">
                            <img src="../../assets/images/logo/spotify.png" height="38" class="logo-light-mode" alt="" />
                            <img src="assets/images/logo-light.png" height="24" class="logo-dark-mode" alt="" />
                            <span class="sidebar-colored">
                                <img src="assets/images/logo-light.png" height="24" alt="" />
                            </span>
                        </Link>
                    </div>
        
                    <ul class="sidebar-menu">
                        <li class="sidebar">
                            <Link to="#!"><i class="ti ti-home me-2"></i>Home</Link>
                        </li>
                        <li class="sidebar">
                            <Link to="#!"><i class="ti ti-search me-2"></i>Search</Link>
                        </li>
                        <li class="sidebar">
                            <Link to="#!"><i class="ti ti-apps me-2"></i>Your Library</Link>
                        </li>
                        <li class="sidebar">
                            <Link to="#!"><i class="ti ti-plus me-2"></i>Create Playlist</Link>
                        </li>
                        <li class="sidebar">
                            <Link to="#!"><i class="ti ti-heart me-2"></i>Like Songs</Link>
                        </li>
                    </ul>
                    {/* <!-- sidebar-menu  --> */}
                </div>
                {/* <!-- Sidebar Footer --> */}
                <ul class="sidebar-footer list-unstyled mb-0">
                    <li class="list-inline-item mb-0">
                        {/* <small>Respect</small> */}
                    </li>
                </ul>
                {/* <!-- Sidebar Footer --> */}
            </nav>
        </div>
    )
}
export default Sidebar;