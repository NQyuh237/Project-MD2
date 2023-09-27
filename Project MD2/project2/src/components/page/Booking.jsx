import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ModalBooking from "./ModalBooking";
import { toast } from "react-toastify";
import "./Booking.css";

function Booking() {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [movie, setMovie] = useState({});
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTheater, setSelectedTheater] = useState("");

  const navigate = useNavigate();
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const userLoginEmail = userLogin.email;
  useEffect(() => {
    // Gọi API để lấy thông tin phim
    axios
      .get(`http://localhost:8000/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
        setSelectedMovie(response.data.title);
      })
      .catch((error) => {
        console.error("Không tải được phim", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý việc đặt vé ở đây (nếu cần)
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTheaterChange = (event) => {
    setSelectedTheater(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const bookedTicket = {
    movie: selectedMovie,
    date: selectedDate,
    theater: selectedTheater,
    time: selectedTime,
    seat: selectedSeats,
    email: userLoginEmail,
    status: false,
  };

  const handleOrder = async () => {
    const response = await axios.get(
      `http://localhost:8000/bookedTickets?movie=${selectedMovie}&date=${selectedDate}&theater=${selectedTheater}&seat_like=${selectedSeats}`
    );

    if (response.data.length > 0) {
      toast.error("Ghế đã được đặt trước");
    } else {
      await axios.post("http://localhost:8000/bookedTickets", bookedTicket);
      toast.success("Đặt vé thành công");
      navigate("/history");
    }
  };

  return (
    <div>
      <h1>CGV Booking Form</h1>
      <form className="formBooking" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="movie">Phim</label>
          <select id="movie" name="movie" value={selectedMovie}>
            <option>{movie.title}</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Giờ xem</label>
          <select
            id="time"
            name="time"
            value={selectedTime}
            onChange={handleTimeChange}
          >
            <option>Chọn</option>
            <option value="10:00">10:00</option>
            <option value="12:30">12:30</option>
            <option value="15:00">15:00</option>
            <option value="17:30">17:30</option>
            <option value="20:00">20:00</option>
            <option value="22:30">22:30</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="theater">Rạp</label>
          <select
            id="theater"
            name="theater"
            value={selectedTheater}
            onChange={handleTheaterChange}
          >
            <option>Chọn</option>
            <option value="CGV Xuân Diệu">CGV Xuân Diệu</option>
            <option value="CGV Sungrand Thuỵ Khê">CGV Sungrand Thuỵ Khê</option>
            <option value="CGV Vincom Bà Triệu">CGV Vincom Bà Triệu</option>
            <option value="CGV Vincom Royal City">CGV Vincom Royal City</option>
            <option value="CGV Vincom Trần Duy Hưng">
              CGV Vincom Trần Duy Hưng
            </option>
            <option value="CGV Crescent Mall">CGV Crescent Mall</option>
          </select>
        </div>

        <ModalBooking
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />

        <div id="amount">
          <b>Ghế đã chọn: </b>
          {selectedSeats.toString()}
        </div>
        <br />
        <button className="btn btn-success" onClick={handleOrder}>
          ĐẶT VÉ
        </button>
      </form>
    </div>
  );
}

export default Booking;
