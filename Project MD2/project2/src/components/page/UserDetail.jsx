import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./History.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function UserDetail() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState(userLogin);

  const handleEditClick = () => {
    setIsEditMode(true);
  };
  const handleCancel = () => {
    setIsEditMode(false);
  };
  const handleSaveClick = (id) => {
    axios.patch(`http://localhost:8000/user/${id}`, editedUser);
    // Gọi API hoặc xử lý lưu thông tin người dùng ở đây
    // Sau khi lưu thành công, cập nhật lại thông tin người dùng trong localStorage
    localStorage.setItem("userLogin", JSON.stringify(editedUser));

    setIsEditMode(false);
    window.location.reload();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const displayValue = (fieldName) => {
    if (isEditMode && fieldName !== "email") {
      return (
        <Form.Control
          type="text"
          name={fieldName}
          value={editedUser[fieldName]}
          onChange={handleInputChange}
        />
      );
    } else {
      return <span>{userLogin[fieldName]}</span>;
    }
  };

  const displayButtons = isEditMode ? (
    <>
      <Button variant="success" onClick={() => handleSaveClick(userLogin.id)}>
        Lưu
      </Button>
      <Button variant="secondary" onClick={handleCancel}>
        Huỷ
      </Button>
    </>
  ) : (
    <Button variant="warning" onClick={handleEditClick}>
      Thay đổi
    </Button>
  );

  return (
    <div>
      <div className="infHis">
        <div className="switch">
          <div
            className="info"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Thông tin tài khoản
          </div>
          <Link to="/history">
            <div className="history" style={{ backgroundColor: "grey" }}>
              Lịch sử đặt vé
            </div>
          </Link>
        </div>
        <div className="invoice">
          <div className="detailinfo" style={{ display: "block" }}>
            <h4>CHI TIẾT TÀI KHOẢN</h4>
            <hr />
            <h5>Liên hệ </h5>
            <div className="detail">
              <div>
                <b>Tên: </b>
                {displayValue("name")}
              </div>

              <div>
                <b>Email: </b>
                {isEditMode ? (
                  displayValue("email")
                ) : (
                  <span>{userLogin.email}</span>
                )}
              </div>

              <div className="phone">
                <b>Số điện thoại:</b> {displayValue("phone")}
              </div>

              <div className="address">
                <b>Địa chỉ:</b> {displayValue("address")}
              </div>

              <div className="button-container">{displayButtons}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
