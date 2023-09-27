import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "../page/HomePage.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));

  useEffect(() => {
    // Gọi API để lấy thông tin phim
    axios
      .get(`http://localhost:8000/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi load phim:", error);
        setLoading(false);
      });
  }, [id]);

  const bookTicket = () => {
    if (userLogin === null) {
      toast.warning("Bạn phải đăng nhập để mua vé");
      navigate("/login");
    } else {
      navigate(`/booking/${movie.id}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Outlet />
      <div className="detail">
        <div>
          <img src={movie.posterUrl} alt="" />
        </div>
        <div className="mdetail">
          <h3>{movie.title}</h3>
          <hr />
          <div>
            <b>Đạo diễn:</b> {movie.director}
          </div>
          <div>
            <b>Diễn viên:</b> {movie.actors}
          </div>
          <div>
            <b>Thể loại:</b> {movie.genre}
          </div>
          <div>
            <b>Khởi chiếu:</b> {movie.releaseDate}
          </div>
          <div>
            <b>Thời lượng:</b> {movie.duration}
          </div>
          <div>
            <b>Ngôn ngữ:</b> {movie.language}
          </div>
          <div>
            <b>Rated:</b> {movie.rating}
          </div>
          <div>
            <b>Chi tiết:</b> {movie.description}
          </div>
          <div>
            <a href={movie.trailerUrl}>Trailer</a>
          </div>
          <button
            key={movie.id}
            className="btn btn-primary"
            onClick={bookTicket}
            // style={{
            //   color: "red",
            //   fontWeight: "600",
            //   background: "none",
            //   border: "none",
            // }}
          >
            Mua Vé
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
