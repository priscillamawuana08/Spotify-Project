import React from "react";
import "../index.css";
import "../pages/asserts/css/Playlist.css";




const PlayList = () => {
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
                    <h3 className="p">Peaceful Piano</h3>
                    <p className="p">This is the first playlist</p>
                    <p className="p"><span><img src="" alt="play" /> spotify 7,067,658 likes</span><span> 312 songs, about 11 hr</span></p>

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
                  <svg className="like" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                </div>
                <div className="col-1">
                  <svg className="more" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" /></svg>

                </div>
              </div>
              <div className="tb">
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
                      <div className="row">
                        <td>
                          <img className="img" src="https://cdns-images.dzcdn.net/images/cover/0436cef2e10fcf4d5dcce73f435ad622/264x264.jpg" alt="" />
                          Active</td>
                      </div>
                      <td>Active</td>
                      <td>27/05/2021</td>
                      <td><i class="ti ti-heart"></i>03:37<i class="fa-thin fa-ellipsis"></i></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <div className="row">
                      <td>
                        <img className="img" src="https://respect-mag.com/wp-content/uploads/2020/04/unnamed-2020-04-24T174355.953.jpg" alt="" />
                        Nominate</td>

                      </div>
                      <td>Nominate</td>
                      <td>27/05/2021</td>
                      <td>04:14</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                      <img className="img" src="https://downgh.com/wp-content/uploads/2023/03/Stonebwoy-scaled.jpg" alt="" />
                        Blessing</td>
                      <td>Blessing</td>
                      <td>27/05/2021</td>
                      <td>03:48</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>
                      <img className="img" src="https://i0.wp.com/www.dcleakers.com/wp-content/uploads/2021/02/stonebwoy-1gad.jpg?fit=2048%2C2048&ssl=1" alt="" />
                        1GAD</td>
                      <td>1GAD</td>
                      <td>27/05/2021</td>
                      <td>03:01</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>
                      <img className="img" src="https://i.scdn.co/image/ab67616d0000b273300db611e8b321feb2363c3b" alt="" />
                        Shuga</td>
                      <td>Shuga</td>
                      <td>27/05/2021</td>
                      <td>03:41</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>
                      <img className="img" src="https://i0.wp.com/www.dcleakers.com/wp-content/uploads/2018/09/Stonebwoy-most-original-500x500.jpg?resize=500%2C500" alt="" />
                        Most original</td>
                      <td>Most original</td>
                      <td>27/05/201</td>
                      <td>03:29</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@flexzy</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@flexzy</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@flexzy</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@flexzy</td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@flexzy</td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@flexzy</td>
                    </tr>
                    <tr>
                      <th scope="row">13</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@flexzy</td>
                    </tr>
                    <tr>
                      <th scope="row">14</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@flexzy</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
      {/* <div className="">
        <div className="">
          <div className="">

          </div>
        </div>
      </div> */}
    </div>
  );
}
export default PlayList;