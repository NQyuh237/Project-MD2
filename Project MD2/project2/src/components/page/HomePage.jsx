import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "./HomePage.css";
import Spinner from "react-bootstrap/Spinner";
function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Gọi API để lấy danh sách phim
    axios
      .get("http://localhost:8000/movies")
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
        setLoading(false);
      });
  }, []);

  {
    console.log(movies);
  }
  if (movies.length == 0) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div>
      <div className="slide">
        <Carousel className="slide-content">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/d/o/doraemon_2023_rolling.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448-min_f10.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_88.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <>
        <div className="movie-selection" id="movie-selection">
          <h1>-MOVIE SELECTION-</h1>
          <div className="container-fluid movieselec">
            <OwlCarousel items={5} className="owl-theme" loop nav margin={5}>
              {movies.map((movie) => (
                <div key={movie.id}>
                  <div className="item">
                    <img src={movie.posterUrl} alt="" />
                    <Link to={`/detail/${movie.id}`}>
                      <div className="overlay">
                        <button className="btndetail">Xem chi tiết</button>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
        {/* event */}
        <div className="event" id="event">
          <h1>-EVENT-</h1>

          {/**event */}
          <div className="container-fluid member ">
            <OwlCarousel className="owl-theme" loop nav margin={8}>
              <div>
                <div className="item">
                  {" "}
                  <img
                    src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/0/2023_u22_n_o_240x201.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="item">
                  {" "}
                  <img
                    src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/b/i/birthday_popcorn_box_240x201.png"
                    alt=""
                  />{" "}
                </div>
              </div>
              <div>
                <div className="item">
                  {" "}
                  <img
                    src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/0/2023_happy_wed-02.png"
                    alt=""
                  />{" "}
                </div>
              </div>
              <div>
                <div className="item">
                  {" "}
                  <img
                    src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/0/2023_culture_day_n_o_240x201.png"
                    alt=""
                  />{" "}
                </div>
              </div>
              <div>
                <div className="item">
                  {" "}
                  <img
                    src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201_7.png"
                    alt=""
                  />{" "}
                </div>
              </div>
              <div>
                <div className="item">
                  {" "}
                  <img
                    src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/0/2023_u22_n_o_240x201.png"
                    alt=""
                  />
                </div>
              </div>
            </OwlCarousel>
          </div>
          {/**event */}

          {/* <div id="owl-example" className="owl-carousel offer ">
            <div className="item">
              {" "}
              <img
                src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/s/c/scb_cgv_240x201_vn_1.jpg"
                alt=""
              />{" "}
            </div>
            <div className="item">
              {" "}
              <img
                src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv-q2_240x201_2.jpg"
                alt=""
              />{" "}
            </div>
            <div className="item">
              {" "}
              <img
                src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv-q2_240x201_3.jpg"
                alt=""
              />{" "}
            </div>
            <div className="item">
              {" "}
              <img
                src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv-240-x-201_1.png"
                alt=""
              />{" "}
            </div>
            <div className="item">
              {" "}
              <img
                src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201_40.jpg"
                alt=""
              />{" "}
            </div>
            <div className="item">
              {" "}
              <img
                src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240_4.jpg"
                alt=""
              />{" "}
            </div>
            <div className="item">
              {" "}
              <img
                src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201_7.png"
                alt=""
              />{" "}
            </div>
          </div> */}
        </div>
        <div className="content-bot">
          <div className="container text-center">
            <div className="row align-items-start">
              <div className="col">
                <img
                  src="https://www.cgv.vn/media/wysiwyg/packages/214x245.jpg"
                  alt=""
                />
              </div>
              <div className="col">
                <img
                  src="https://www.cgv.vn/media/wysiwyg/2023/042023/U22_N_O_Apr_496x267.png"
                  alt=""
                />
              </div>
              <div className="col">
                <img
                  src="https://www.cgv.vn/media/wysiwyg/2021/CGV-DIGITAL-HALL-RENTAL-214x245.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* fixed banner */}
        <a href="#" className="bright">
          <img
            src="https://www.cgv.vn/media/wysiwyg/2023/042023/BM-120x600.jpg"
            alt=""
          />
        </a>
        <a href="#" className="bleft">
          <img
            src="https://www.cgv.vn/media/wysiwyg/2023/042023/BM-120x600.jpg"
            alt=""
          />
        </a>
      </>
    </div>
  );
}

export default HomePage;
