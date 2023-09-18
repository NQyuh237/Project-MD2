import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Style.css";
function    SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.setItem("adminLogin", false);
    toast.success("Đã đăng xuất!! Cảm ơn admin", { icon: "💓" });
    navigate("/");
  };
  return (
    <>
      <Button className="onSide" variant="success" onClick={handleShow}>
        <i className="fa-solid fa-bars-staggered"></i>
      </Button>

      <Offcanvas className="Offcanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: "white" }}>
            XIN CHÀO ADMIN !!<i className="fa-solid fa-hands-clapping"></i>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/admin/formadd"
          >
            <b>THÊM MỚI PHIM</b>
          </Link>
          <hr />
          <Link style={{ textDecoration: "none", color: "white" }} to="/admin">
            <b>QUẢN LÝ PHIM</b>
          </Link>
          <hr />

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/admin/tickmane"
          >
            <b>QUẢN LÝ VÉ</b>
          </Link>
          <hr />
          <Button
            variant="out-line"
            style={{ color: "white" }}
            onClick={handleLogOut}
          >
            <b>Đăng xuất</b>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
