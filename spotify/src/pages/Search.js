import React, { useState } from "react";
// import color1 from './asserts/images/color1.png';
import { imagesData } from "./data";


import "../index.css";
import "../pages/asserts/css/Search.css"

const Search = () => {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    return (

        <div className="page-wrapper toggled">



            <div className="sh">
                <input
                    type="search"
                    placeholder="Search here"
                    onChange={handleChange}
                    value={searchInput} />

                <div className="row">
                    {imagesData.map((data)=>(
                             <div class="card bg-dark text-white shc">
                             <img src={data.Image} class="card-img" alt="..." />
                             <div class="card-img-overlay">
                                 <h5 class="card-title">Card title</h5>
     
                             </div>
                         </div>
                        
                    ))}
                   
                   <div>
                    <h3>vgddkhvehgfjsdjkbfhbvvbglerfjljh  dcdvchdvcnh</h3>
                   </div>
                </div>
            </div>

        </div>



    );
}

export default Search;