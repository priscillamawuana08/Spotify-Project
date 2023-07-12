import React from "react";
import "../index.css";

const Profile = () => {

    return (
        <div className="page-wrapper toggled">
            <div className="section-one">
                <div className="row">
                    <div className="col-3">
                        <img src="https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg?w=2000" className="stn-one" alt="" />
                    </div>
                    <div className="col-9">
                        <div className="text">
                            <p className="p">Profile</p>
                            <h1 className="p">Priscilla Bonsu</h1>
                            <p className="p"><span>2 Public Playlists </span></p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="section-two">
                <div className="row">
                    <div className="col-1">
                        <svg className="more" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" /></svg>

                    </div>
                </div>
                <div className="tb">
                    <div className="txt">
                        <h3>Top tracks this month</h3>
                        <p>only visible to you</p>
                    </div>
                    <table class="table">

                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    <img className="img" src="https://i0.wp.com/www.dcleakers.com/wp-content/uploads/2021/02/stonebwoy-1gad.jpg?fit=2048%2C2048&ssl=1" alt="" />
                                    1GAD</td>
                                <td>1GAD</td>
                                <td>2 weeks ago</td>
                                <td>03:01</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="">
                        <div className="col-9">
                            <p className="find">Find more</p>
                        </div>
                        <div className="txt">
                            <h3>Public Playlist</h3>
                            
                        </div>
                        <div className="row">
                            <div class="card">
                                <img src="https://png.pngtree.com/background/20211217/original/pngtree-note-music-logo-watercolor-background-picture-image_1589075.jpg" className="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Instrumental</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>

                            <div class="card">
                                <img src="https://img.etimg.com/thumb/msid-71477539,width-650,height-488,imgsize-622277,,resizemode-75/music_thinkstockphotos.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Jazz</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                            <div>
                                <p>theme</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Profile;