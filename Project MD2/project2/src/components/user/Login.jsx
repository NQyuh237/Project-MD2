import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        if (response.data[0].role == 1) {
          navigate("/admin");
        } else {
          navigate("/");
        }
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
            <label htmlFor="floatingInput">Email:</label>
            <br />
            <input
              type="email"
              className="form-control mail"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="form-floating">
            <label htmlFor="floatingPassword">Mật khẩu:</label>
            <br />
            <input
              type="password"
              className="form-control pass"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div className="checkbox mb-3">
            <label>
              Lưu mật khẩu:
              <input type="checkbox" defaultValue="remember-me" />
            </label>
          </div>
          <br />
          <button
            className="w-100 btn btn-lg btn-primary btn-danger"
            type="submit"
          >
            Đăng Nhập
          </button>
        </Form>
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
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;
