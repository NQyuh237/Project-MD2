import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Kiểm tra trường trống
    if (!email || !password) {
      toast.warning("Vui lòng điền đầy đủ thông tin đăng nhập");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8000/user?email=${email}&password=${password}`
      );

      if (response.data.length > 0) {
        localStorage.setItem("userLogin", JSON.stringify(response.data[0]));
        navigate("/");
        toast.success("Đăng nhập thành công!");
      } else {
        // Sai email hoặc password
        toast.error("Sai mật khẩu hoặc email!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="dkqc ">
        <div className="form-signin w-100 m-auto ">
          <Form className="row g-3 login" id="login" onSubmit={handleLogin}>
            <div className="log-btn ">
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
            <br />
            <div className="form-floating">
              <input
                type="email"
                className="form-control mail"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email </label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control pass"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Mật khẩu</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Lưu mật
                khẩu
              </label>
            </div>
            <button
              className="w-100 btn btn-lg btn-primary btn-danger"
              type="submit"
            >
              Đăng Nhập
            </button>
          </Form>
        </div>
        <Carousel interval={null}>
          <Carousel.Item
            className="carousel-item"
            style={{ margin: "auto !important" }}
          >
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
              className="d-block w-100"
              src="https://www.cgv.vn/media/wysiwyg/2020/2.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;
