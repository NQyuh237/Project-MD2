import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SideBar from "./SideBar";
function FormAdd() {
  const [check, setCheck] = useState(false);
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [actor, setActor] = useState("");
  const [genre, setGenre] = useState("");
  const [duration, setDuration] = useState("");
  const [release, setRelease] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [rating, setRating] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (
      (form.checkValidity() === false && title === "") ||
      director === "" ||
      actor === "" ||
      genre === "" ||
      duration === "" ||
      release === "" ||
      description === "" ||
      language === "" ||
      rating === "" ||
      posterUrl === "" ||
      trailerUrl === ""
    ) {
      toast.error("Điền đầy đủ nội dung phim", { icon: "⚠️" });
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios.post(`http://localhost:8000/movies`, newMovie);
      navigate("/admin");
      toast.success("Thêm phim thành công", { icon: "👍" });
    }
    setValidated(true);
  };

  const newMovie = {
    title: title,
    director: director,
    actors: actor,
    genre: genre,
    releaseDate: release,
    duration: duration,
    language: language,
    rating: rating,
    posterUrl: posterUrl,
    trailerUrl: trailerUrl,
    description: description,
  };
  const handleChange = (e, setValue) => {
    setValue(e.target.value);
  };

  return (
    <>
      <SideBar />
      <div className="manegForm">
        <h1>THÊM PHIM</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-6">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label>Tên phim</Form.Label>

              <Form.Control
                required
                type="text"
                value={title}
                onChange={(e) => handleChange(e, setTitle)}
              />

              <Form.Control.Feedback type="invalid">
                Vui lòng điền tên phim!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Đạo diễn</Form.Label>
              <Form.Control
                required
                type="text"
                value={director}
                onChange={(e) => handleChange(e, setDirector)}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng điền tên đạo diễn!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Diễn viên</Form.Label>
              <Form.Control
                required
                type="text"
                value={actor}
                onChange={(e) => handleChange(e, setActor)}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng điền tên các diễn viên!
              </Form.Control.Feedback>
            </Form.Group>{" "}
            <Form.Group as={Col} md="3" controlId="validationCustomUsername">
              <Form.Label>Thể loại</Form.Label>

              <Form.Control
                type="text"
                value={genre}
                required
                onChange={(e) => handleChange(e, setGenre)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-6">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Ngày khởi chiếu</Form.Label>
              <Form.Control
                type="date"
                required
                value={release}
                onChange={(e) => handleChange(e, setRelease)}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng điền ngày khởi chiếu!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Thời lượng</Form.Label>
              <Form.Control
                required
                type="text"
                value={duration}
                onChange={(e) => handleChange(e, setDuration)}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng điền thời lượng!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Mô tả</Form.Label>
              <Form.Control
                required
                type="text"
                value={description}
                onChange={(e) => handleChange(e, setDescription)}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng điền mô tả phim
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Ngôn ngữ</Form.Label>
              <Form.Control
                required
                type="text"
                value={language}
                onChange={(e) => handleChange(e, setLanguage)}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng điền ngôn ngữ phim
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-6">
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>TrailerUrl</Form.Label>
              <Form.Control
                required
                type="text"
                value={trailerUrl}
                onChange={(e) => handleChange(e, setTrailerUrl)}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng gán link Trailer phim
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Xếp loại</Form.Label>
              <Form.Control
                required
                type="text"
                value={rating}
                onChange={(e) => handleChange(e, setRating)}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng điền xếp loại phim
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>PosterUrl</Form.Label>
              <Form.Control
                type="text"
                value={posterUrl}
                required
                onChange={(e) => handleChange(e, setPosterUrl)}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng gán Link Poster
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              style={{
                width: "150px",
                height: "38px",
                marginTop: "40px",
                marginLeft: "40px",
              }}
              type="submit"
            >
              <i className="fa-solid fa-upload">+</i>
            </Button>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default FormAdd;
