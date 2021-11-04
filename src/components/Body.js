import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import img1 from "../img/c-img1.jpg";
import img2 from "../img/c-img2.jpg";
import img3 from "../img/c-img3.jpg";
import s1 from "../img/s-1.jpg";
import r1 from "../img/r1.jpg";
import p1 from "../img/p1.jpg";
import b1 from "../img/b1.jpg";
import b2 from '../img/b2.jpg'
import b3 from '../img/b3.jpg'
import a1 from "../img/a1.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OutlinedCard from "./OutLinedCard";

const Body = () => {
  return (
    <div className="overflow-hidden">
      {/* //   First Section Start  */}
      <div className="row mt-5">
        <div className="col-11 m-auto shadow">
          <div className="row">
            <div className="col-3">
              <div
                className="list-head d-flex justify-content-center"
                style={{}}
              >
                My Market
              </div>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {/* item 1 start  */}
                <ListItem style={{ padding: "0px", margin: "10px 0px" }}>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={r1} alt="pic not loaded" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Consumer Electronics" />
                  <ArrowForwardIosIcon
                    style={{ marginLeft: "20px", fontSize: "0.8rem" }}
                  />
                </ListItem>

                {/* item 1 end  */}

                <ListItem style={{ padding: "0px", margin: "10px 0px" }}>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={r1} alt="pic not loaded" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Consumer Electronics" />
                  <ArrowForwardIosIcon
                    style={{ marginLeft: "20px", fontSize: "0.8rem" }}
                  />
                </ListItem>

                <ListItem style={{ padding: "0px", margin: "10px 0px" }}>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={r1} alt="pic not loaded" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Consumer Electronics" />
                  <ArrowForwardIosIcon
                    style={{ marginLeft: "20px", fontSize: "0.8rem" }}
                  />
                </ListItem>

                <ListItem style={{ padding: "0px", margin: "10px 0px" }}>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={r1} alt="pic not loaded" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Consumer Electronics" />
                  <ArrowForwardIosIcon
                    style={{ marginLeft: "20px", fontSize: "0.8rem" }}
                  />
                </ListItem>

                <ListItem style={{ padding: "0px", margin: "10px 0px" }}>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={r1} alt="pic not loaded" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Consumer Electronics" />
                  <ArrowForwardIosIcon
                    style={{ marginLeft: "20px", fontSize: "0.8rem" }}
                  />
                </ListItem>

                <ListItem style={{ padding: "0px", margin: "10px 0px" }}>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={r1} alt="pic not loaded" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Consumer Electronics" />
                  <ArrowForwardIosIcon
                    style={{ marginLeft: "20px", fontSize: "0.8rem" }}
                  />
                </ListItem>

                <ListItem style={{ padding: "0px", margin: "10px 0px" }}>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={r1} alt="pic not loaded" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Consumer Electronics" />
                  <ArrowForwardIosIcon
                    style={{ marginLeft: "20px", fontSize: "0.8rem" }}
                  />
                </ListItem>
              </List>
            </div>
            <div className="col-6">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100 h-100"
                      src={img1}
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={img2} alt="Second slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={img3} alt="Third slide" />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-3">
              <button
                type="button"
                class=""
                style={{
                  backgroundColor: "#ff6a00 ",
                  width: "90%",
                  color: "white",
                  fontWeight: "bold",
                  margin: "20px",
                }}
              >
                Block level button
              </button>
              <div>
                <h5>Wood Working Machinary</h5>
                <div
                  className=" d-flex justify-content-between align-items-center"
                  style={{ width: "90%", borderBottom: "1px solid grey" }}
                >
                  <button
                    style={{
                      height: "30px",
                      borderRadius: "30px",
                      width: "100px",
                      backgroundColor: "#ff6a00 ",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Source Now
                  </button>
                  <img
                    src={s1}
                    style={{ width: "60px", height: "60px" }}
                    alt="pic not loaded"
                  />
                </div>
              </div>
              <div>
                <h5>Wood Working Machinary</h5>
                <div
                  className=" d-flex justify-content-between align-items-center"
                  style={{ width: "90%", borderBottom: "1px solid grey" }}
                >
                  <button
                    style={{
                      height: "30px",
                      borderRadius: "30px",
                      width: "100px",
                      backgroundColor: "#ff6a00 ",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Source Now
                  </button>
                  <img
                    src={s1}
                    style={{ width: "60px", height: "60px" }}
                    alt="pic not loaded"
                  />
                </div>
              </div>
              <div>
                <h5>Wood Working Machinary</h5>
                <div
                  className=" d-flex justify-content-between align-items-center"
                  style={{ width: "90%", borderBottom: "1px solid grey" }}
                >
                  <button
                    style={{
                      height: "30px",
                      borderRadius: "30px",
                      width: "100px",
                      backgroundColor: "#ff6a00 ",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Source Now
                  </button>
                  <img
                    src={s1}
                    alt="pic not loaded"
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //  Secound Section Start  */}
      <div className="row mt-5">
        <div className="col-11 m-auto shadow bg-light">
          <div
            className="d-flex justify-content-between"
            style={{ flexWrap: "wrap", margin: "10px" }}
          >
            <div
              style={{
                border: "1px solid gray",
                borderRadius: "5px ",
                margin: "10px 2px",
              }}
            >
              <div>
                <h5>New Arrivals</h5>
              </div>
              <OutlinedCard />
            </div>
            <div
              style={{
                border: "1px solid gray",
                borderRadius: "5px ",
                margin: "10px 2px",
              }}
            >
              <div>
                <h5>New Arrivals</h5>
              </div>
              <OutlinedCard />
            </div>
            <div
              style={{
                border: "1px solid gray",
                borderRadius: "5px ",
                margin: "10px 2px",
              }}
            >
              <div>
                <h5>New Arrivals</h5>
              </div>
              <OutlinedCard />
            </div>
            <div
              style={{
                border: "1px solid gray",
                borderRadius: "5px ",
                margin: "10px 2px",
              }}
            >
              <div>
                <h5>New Arrivals</h5>
              </div>
              <OutlinedCard />
            </div>
            <div
              style={{
                border: "1px solid gray",
                borderRadius: "5px ",
                margin: "10px 2px",
              }}
            >
              <div>
                <h5>New Arrivals</h5>
              </div>
              <OutlinedCard />
            </div>
            <div
              style={{
                border: "1px solid gray",
                borderRadius: "5px ",
                margin: "10px 2px",
              }}
            >
              <div>
                <h5>New Arrivals</h5>
              </div>
              <OutlinedCard />
            </div>
          </div>
        </div>
      </div>

      {/* Third Section Start  */}

      <div className="row mt-5">
        <div className="col-11 m-auto shadow ">
          <div className="row m-2 bg-light ">
            <div className="col-6 mr-1 border border-4 ">
              <div className="row ">
                <div className="col-7 p-3">
                  <h2> Customized products</h2>
                  <p>
                    Partner with one of 60,000 experienced manufacturers with
                    design & production
                  </p>
                </div>
                <div className="col-5">
                  <img src={p1} alt="pic not loaded" />
                </div>
                <div className="row">
                  <div className="col-6">
                    <div
                      style={{
                        border: "1px solid gray",
                        borderRadius: "5px ",
                        margin: "10px 2px",
                      }}
                    >
                      <div>
                        <h5>New Arrivals</h5>
                      </div>
                      <OutlinedCard />
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      style={{
                        border: "1px solid gray",
                        borderRadius: "5px ",
                        margin: "10px 2px",
                      }}
                    >
                      <div>
                        <h5>New Arrivals</h5>
                      </div>
                      <OutlinedCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mr-1 border border-4 ">
              <div className="row ">
                <div className="col-7 p-3">
                  <h2> Customized products</h2>
                  <p>
                    Partner with one of 60,000 experienced manufacturers with
                    design & production
                  </p>
                </div>
                <div className="col-5">
                  <img src={p1} alt="pic not loaded" />
                </div>
                <div className="row">
                  <div className="col-6">
                    <div
                      style={{
                        border: "1px solid gray",
                        borderRadius: "5px ",
                        margin: "10px 2px",
                      }}
                    >
                      <div>
                        <h5>New Arrivals</h5>
                      </div>
                      <OutlinedCard />
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      style={{
                        border: "1px solid gray",
                        borderRadius: "5px ",
                        margin: "10px 2px",
                      }}
                    >
                      <div>
                        <h5>New Arrivals</h5>
                      </div>
                      <OutlinedCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth Section Start */}
      <div className="row mt-5">
        <div className="col-11 m-auto shadow ">
          <div className="row">
            <div className="col-3  text-uppercase fw-bold">
              <h4>Consumer Electronics</h4>
            </div>
            <div className="col-9">
              <hr className="p-1 rounded-pill rounded-pill" />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <img src={b1} alt="pic not loaded" />
            </div>
            <div className="col-9">
              <div className="d-flex  flex-wrap justify-content-around">
                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fifth Section Start */}
      <div className="row mt-5">
        <div className="col-11 m-auto shadow ">
          <div className="row">
            <div className="col-3  text-uppercase fw-bold">
              <h4>Apparel</h4>
            </div>
            <div className="col-9">
              <hr className="p-1 rounded-pill rounded-pill" />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <img src={b2} alt="pic not loaded" />
            </div>
            <div className="col-9">
              <div className="d-flex  flex-wrap justify-content-around">
                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sixth Section Start */}
      <div className="row mt-5">
        <div className="col-11 m-auto shadow ">
          <div className="row">
            <div className="col-3  text-uppercase fw-bold">
              <h4>Vehicles and accesories</h4>
            </div>
            <div className="col-9">
              <hr className="p-1 rounded-pill rounded-pill" />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <img src={b3} alt="pic not loaded" />
            </div>
            <div className="col-9">
              <div className="d-flex  flex-wrap justify-content-around">
                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                <div style={{ width: "200px", height: "180px" }}>
                  <h6>Premium Quality</h6>
                  <div className="row">
                    <div className="col-7">
                      <p>Custmization Service</p>
                    </div>
                    <div className="col-5">
                      <img class="d-block w-100" src={a1} alt="Second slide" />
                    </div>
                  </div>
                </div>

                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
