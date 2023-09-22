import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../user/Register.css";
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
          <br />
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Tên:
            </label>
            <br />
            <Form.Control
              type="text"
              className="form-control"
              id="inputName"
              value={name}
              onChange={(e) => handleChangeName(e)}
            />
          </div>
          <br />
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email:
            </label>
            <br />
            <Form.Control
              required
              type="email"
              className="form-control"
              id="inputEmail4"
              value={email}
              onChange={(e) => handleChangeEmail(e)}
            />
          </div>
          <br />
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Mật Khẩu:
            </label>
            <br />
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
          <br />
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Địa chỉ:
            </label>
            <br />
            <Form.Control
              type="text"
              className="form-control"
              id="inputAddress"
              value={address}
              onChange={(e) => handleChangeAddress(e)}
            />
          </div>
          <br />
          <div className="col-12">
            <label htmlFor="inputDob" className="form-label">
              Ngày tháng năm sinh:
            </label>
            <br />
            <Form.Control
              type="date"
              className="form-control"
              id="inputDob"
              value={dob}
              onChange={(e) => handleChangeDob(e)}
            />
          </div>
          <br />
          <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label">
              Số điện thoại:
            </label>
            <br />
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
          <br />
          <div className="col-md-4">
            <label htmlFor="inputGender" className="form-label">
              Giới tính:
            </label>
            <br />
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
          <br />
          <div className="col-12">
            <div className="form-check">
              <label className="form-check-label" htmlFor="gridCheck">
                Tôi đồng ý với điều khoản sử dụng:
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                onChange={() => setAgreement(!agreement)}
              />
            </div>
            <br />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-danger">
              Đăng ký
            </button>
          </div>
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
    </div>
  );
}

export default Register;
