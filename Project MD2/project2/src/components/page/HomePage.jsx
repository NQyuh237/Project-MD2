import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import axios from "axios";
import "./HomePage.css";
import Spinner from "react-bootstrap/Spinner";
function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(loading);
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
  // {
  //   console.log(movies);
  // }
  if (movies.length === 0) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div>
      <div className="slide">
        <div className="slide-content">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980wx448h-min_4.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_-sneak_show-min_2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/h/o/horror_movie_run_980x448.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </div>
      </div>
      <>
        <div className="movie-selection" id="movie-selection">
          <h1>-MOVIE SELECTION-</h1>
          <div className="container-fluid movieselec">
            <div items={5} className="owl-theme" loop nav margin={5}>
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
            </div>
          </div>
        </div>
        {/* event */}
        <div className="event" id="event">
          <h1>-EVENT-</h1>
        </div>
        <div className="content-bot">
          <div className="container text-center">
            <div className="row align-items-start">
              <div className="col">
                <img
                  src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/a/d/adapt_cgv_banner_web_980x448.jpg"
                  alt=""
                />
              </div>

              <div className="col">
                <img
                  src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_1__49.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="bright">
          <img
            src="https://www.cgv.vn/media/wysiwyg/2023/092023/CGV-Q2_120x600.jpg"
            alt=""
          />
        </a>
        <a href="#" className="bleft">
          <img
            src="https://www.cgv.vn/media/wysiwyg/2023/092023/CGV-Q2_120x600.jpg"
            alt=""
          />
        </a>
      </>
    </div>
  );
}

export default HomePage;
