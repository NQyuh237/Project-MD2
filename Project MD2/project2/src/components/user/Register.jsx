import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../user/Register.css";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { toast } from "react-toastify";
function Register() {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeDob = (e) => {
    setDob(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Kiểm tra các trường input có đầy đủ thông tin
    if (password.includes(" ")) {
      toast.error("Không được để khoảng trắng trong mật khẩu");
      return;
    }

    if (
      name == "" ||
      email == "" ||
      password == "" ||
      address == "" ||
      dob == "" ||
      phone == "" ||
      gender == "" ||
      agreement == false
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }

    try {
      const response = await axios.get("http://localhost:8000/user");

      const users = response.data;
      {
        console.log(users);
      }
      if (users && users.some((user) => user.email === email)) {
        toast.error("Email đã được đăng ký trước đó");
      } else {
        const userData = {
          name: name,
          email: email,
          password: password,
          address: address,
          dob: dob,
          phone: phone,
          gender: gender,
        };

        await axios.post("http://localhost:8000/user", userData);
        toast.success("Đăng ký thành công");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      toast.error("Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
  };
  return (
    <div>
      <div className="dkqc">
        {/*Register*/}
        <Form className="row g-3 register" onSubmit={(e) => handleSubmit(e)}>
          <div className="log-btn">
            <span>
              {" "}
              <Link to="/register" id="in">
                Đăng ký
              </Link>{" "}
            </span>
            <span>
              <Link to="/login" id="reg">
                Đăng Nhập
              </Link>
            </span>
          </div>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Tên
            </label>
            <Form.Control
              type="text"
              className="form-control"
              id="inputName"
              value={name}
              onChange={(e) => handleChangeName(e)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <Form.Control
              required
              type="email"
              className="form-control"
              id="inputEmail4"
              value={email}
              onChange={(e) => handleChangeEmail(e)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Mật Khẩu
            </label>
            <Form.Control
              type="password"
              className="form-control"
              id="inputPassword4"
              minLength={8}
              placeholder="Tối thiểu 8 ký tự không chứa ký tự rỗng"
              value={password}
              onChange={(e) => handleChangePass(e)}
            />
            <Form.Control.Feedback type="invalid">
              Vui lòng điền tên mật khẩu!
            </Form.Control.Feedback>
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Địa chỉ
            </label>
            <Form.Control
              type="text"
              className="form-control"
              id="inputAddress"
              value={address}
              onChange={(e) => handleChangeAddress(e)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputDob" className="form-label">
              Ngày tháng năm sinh
            </label>
            <Form.Control
              type="date"
              className="form-control"
              id="inputDob"
              value={dob}
              onChange={(e) => handleChangeDob(e)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label">
              Số điện thoại
            </label>
            <Form.Control
              type="tel"
              className="form-control"
              id="inputPhone"
              name="phone"
              pattern="[0]{1}[0-9]{3}[0-9]{3}[0-9]{3}"
              placeholder="0xxxxxxxxx"
              value={phone}
              onChange={(e) => handleChangePhone(e)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputGender" className="form-label">
              Giới tính
            </label>
            <select
              id="inputGender"
              className="form-select"
              value={gender}
              onChange={(e) => handleChangeGender(e)}
            >
              <option>Chọn...</option>
              <option value="nam">Nam</option>
              <option value="nu">Nữ</option>
            </select>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                onChange={() => setAgreement(!agreement)}
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Tôi đồng ý với điều khoản sử dụng
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-danger">
              Đăng ký
            </button>
          </div>
        </Form>
        <Carousel fade interval={null}>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.cgv.vn/media/wysiwyg/2020/3.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.cgv.vn/media/wysiwyg/2020/1.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100
            "
              src="https://www.cgv.vn/media/wysiwyg/2020/2.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Register;
