import React, { useState, useEffect } from "react";
import "./History.css";
import axios from "axios";
import { Link } from "react-router-dom";

function History() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const userLoginEmail = userLogin.email;
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsPerPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/bookedTickets?email=${userLoginEmail}`)
      .then((response) => {
        const ticketData = response.data;
        setTickets(ticketData);
      })
      .catch((error) => {
        console.error("Không tải được vé", error);
      });
  }, []);

  // Logic for pagination
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const formatCurrency = (amount) => {
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  return (
    <div>
      <div className="infHis">
        <div className="switch">
          <Link to="/userdetail">
            <div className="info" style={{ color: "white" }}>
              Thông tin tài khoản
            </div>
          </Link>
          <div className="history" style={{ backgroundColor: "red" }}>
            Lịch sử đặt vé
          </div>
        </div>

        <div className="invoice">
          <h4>LỊCH SỬ ĐẶT VÉ</h4>
          <hr />
          {currentTickets.map((ticket, index) => (
            <div key={index}>
              <div className="movie-info">
                <p className="label">
                  Rạp: <b>{ticket.theater}</b>
                </p>
              </div>
              <div className="movie-info">
                <p className="label">
                  Phim: <b>{ticket.movie}</b>
                </p>
                <p className="value" id="movie-name" />
              </div>
              <div className="movie-info">
                <p className="label">
                  Ngày xem: <b>{ticket.date}</b>
                </p>
              </div>
              <div className="movie-info">
                <p className="label">
                  Giờ xem: <b>{ticket.time}</b>
                </p>
              </div>
              <div className="ticket-info">
                <p className="label">
                  Ghế: <b>{ticket.seat.toString()}</b>
                </p>
              </div>
              <div className="ticket-info">
                <p className="label">
                  Số tiền cần thanh toán:{" "}
                  <b>{formatCurrency(ticket.seat.length * 80000)} </b>
                </p>
              </div>
              <div className="ticket-info">
                <p className="label">
                  Trạng thái:{" "}
                  {ticket.status ? (
                    <b>Đã được xác nhận</b>
                  ) : (
                    <b>Đang chờ xác nhận</b>
                  )}
                </p>
              </div>
              <div className="total" id="total-price" />
              <hr />
            </div>
          ))}
          <div className="detailinfo">
            <h4>CHI TIẾT TÀI KHOẢN</h4>
            <hr />
            <h5>Liên hệ </h5>
            <div className="detail">
              <div className="name">
                <b>Tên</b>{" "}
              </div>
              <div>${userLogin.name}</div>
              <div>
                <b>Email</b>{" "}
              </div>
              <div className="mail">${userLogin.email}</div>
              <div className="phone">
                <b>Số điện thoại</b>{" "}
              </div>
              <div>${userLogin.phone}</div>
              <div className="address">
                <b>Địa chỉ</b>{" "}
              </div>
              <div>${userLogin.address}</div>
              <button className="btn btn-primary btn-update">Thay đổi</button>
            </div>
          </div>
          <ul className="pagination">
            {Array.from(
              Array(Math.ceil(tickets.length / ticketsPerPage)),
              (item, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default History;
