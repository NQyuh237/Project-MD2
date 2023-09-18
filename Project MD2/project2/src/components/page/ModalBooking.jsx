import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Booking.css";

const ModalBooking = ({ selectedSeats, setSelectedSeats }) => {
  const [boxData, setBoxData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/databox");
        const data = await response.json();
        setBoxData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSeatClick = (seatContent) => {
    const updatedSelectedSeats = [...selectedSeats];

    if (updatedSelectedSeats.includes(seatContent)) {
      // Nếu ghế đã được chọn, hủy bỏ chọn
      const index = updatedSelectedSeats.indexOf(seatContent);
      updatedSelectedSeats.splice(index, 1);
    } else {
      // Nếu ghế chưa được chọn, thêm vào danh sách
      updatedSelectedSeats.push(seatContent);
    }

    setSelectedSeats(updatedSelectedSeats);
  };

  const handleConfirmClick = () => {
    // Xử lý khi người dùng xác nhận
    handleClose();
  };

  const getSeatNumber = (rowIndex, cellIndex) => {
    const seatLetter = String.fromCharCode(65 + rowIndex);
    const seatNumber = cellIndex + 1;
    return `${seatLetter}${seatNumber}`;
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        CHỌN GHẾ
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vui lòng chọn ghế</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {boxData.map((row, rowIndex) => (
            <div className={`row${rowIndex + 1}`} key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const seatContent = getSeatNumber(rowIndex, cellIndex);
                const isSelected = selectedSeats.includes(seatContent);

                return (
                  <span
                    key={cellIndex}
                    onClick={() => handleSeatClick(seatContent)}
                    className={isSelected ? "mySpan" : "SPAN"}
                  >
                    {cell}
                  </span>
                );
              })}
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirmClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalBooking;
