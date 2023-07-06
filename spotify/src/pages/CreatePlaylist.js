import React from "react";
import "../index.css";
import "../pages/asserts/css/Createplaylist.css";


const CreatePlaylist = () => {

    return (
        <div className="page-wrapper toggled">
            <div className="section-one">
                <div className="row">
                    <div className="col-3">
                        <img src="https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg?w=2000" className="stn-one" alt="" />
                    </div>
                    <div className="col-9">
                        <div className="text">
                            <p className="p">PlayList</p>
                            <h1 className="p">Playlist #1</h1>
                            <p className="p"><span>Priscilla Bonsu </span><span>. 3 songs, 9mins 46sec</span></p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="section-two">
                <div className="row">
                    <div className="col-1">
                        <div className="play">
                            <svg className="play-img" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>
                        </div>
                    </div>
                    <div className="col-1">
                        <svg className="more" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" /></svg>

                    </div>
                </div>
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Album</th>
                                <th scope="col">Date added</th>
                                <th scope="col"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg></th>
                            </tr>
                        </thead>
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
                            <tr>
                                <th scope="row">2</th>
                                <div className="row">
                                    <td>
                                        <img className="img" src="https://respect-mag.com/wp-content/uploads/2020/04/unnamed-2020-04-24T174355.953.jpg" alt="" />
                                        Nominate</td>

                                </div>
                                <td>Nominate</td>
                                <td>2 weeks ago</td>
                                <td>04:14</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>
                                    <img className="img" src="https://downgh.com/wp-content/uploads/2023/03/Stonebwoy-scaled.jpg" alt="" />
                                    Blessing</td>
                                <td>Blessing</td>
                                <td>1 weeks ago</td>
                                <td>03:48</td>
                            </tr>

                        </tbody>
                    </table>
                    <div className="">
                        <div className="col-9">
                            <p className="find">Find more</p>
                        </div>
                        <div className="txt">
                            <h3>Recommended</h3>
                            <p>Based on what's in this playlist</p>
                        </div>
                        <div className="row">
                            <div>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <div className="row">
                                                <td>
                                                    <img className="img" src="https://cdns-images.dzcdn.net/images/cover/0436cef2e10fcf4d5dcce73f435ad622/264x264.jpg" alt="" />
                                                    Active</td>
                                            </div>
                                            <td>Active</td>
                                            <td><button type="button" class="btn btn-outline-dark">Add</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <div className="row">
                                                <td>
                                                    <img className="img" src="https://respect-mag.com/wp-content/uploads/2020/04/unnamed-2020-04-24T174355.953.jpg" alt="" />
                                                    Nominate</td>

                                            </div>
                                            <td>Nominate</td>
                                            <td><button type="button" class="btn btn-outline-dark">Add</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>
                                                <img className="img" src="https://downgh.com/wp-content/uploads/2023/03/Stonebwoy-scaled.jpg" alt="" />
                                                Blessing</td>

                                            <td>Blessing</td>
                                            <td><button type="button" class="btn btn-outline-dark">Add</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>
                                                <img className="img" src="https://i0.wp.com/www.dcleakers.com/wp-content/uploads/2021/02/stonebwoy-1gad.jpg?fit=2048%2C2048&ssl=1" alt="" />
                                                1GAD</td>

                                            <td>1GAD</td>
                                            <td><button type="button" class="btn btn-outline-dark">Add</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>
                                                <img className="img" src="https://i.scdn.co/image/ab67616d0000b273300db611e8b321feb2363c3b" alt="" />
                                                Shuga</td>

                                            <td>Shuga</td>
                                            <td><button type="button" class="btn btn-outline-dark">Add</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>
                                                <img className="img" src="https://i0.wp.com/www.dcleakers.com/wp-content/uploads/2018/09/Stonebwoy-most-original-500x500.jpg?resize=500%2C500" alt="" />
                                                Most original</td>

                                            <td>Most original</td>
                                            <td><button type="button" class="btn btn-outline-dark">Add</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>Jacob</td>

                                            <td>@fat</td>
                                            <td><button type="button" class="btn btn-outline-dark">Add</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>Jacob</td>

                                            <td>@fat</td>
                                            <td><button type="button" class="btn btn-outline-dark">Add</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}
export default CreatePlaylist;
