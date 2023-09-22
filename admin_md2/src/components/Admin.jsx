import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Form";
import axios from "axios";
import Pagination from "./Pagination";
import SideBar from "./SideBar";
import FormAdd from "./FormAdd";
function Admin() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5);
  const [editMode, setEditMode] = useState({});

  // Thêm state để lưu phim mới thêm vào

  useEffect(() => {
    axios
      .get(`http://localhost:8000/movies`)
      .then((response) => setMovies(response.data));
  }, []); // Khi newMovie thay đổi, gọi API để lấy danh sách phim mới

  const handleEdit = async (id, editedMovie) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/movies/${id}`,
        editedMovie
      );
      console.log(response.data);
      setMovies((prevMovies) => {
        const updatedMovies = prevMovies.map((movie) =>
          movie.id === id ? response.data : movie
        );
        return updatedMovies;
      });
      setEditMode({});
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event, id) => {
    const { name, value } = event.target;
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [id]: { ...prevEditMode[id], [name]: value },
    }));
  };

  const enterEditMode = (id) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [id]: { ...movies.find((movie) => movie.id === id) },
    }));
  };

  const exitEditMode = (id) => {
    setEditMode((prevEditMode) => {
      const updatedEditMode = { ...prevEditMode };
      delete updatedEditMode[id];
      return updatedEditMode;
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/movies/${id}`);
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // Lấy movies hiện tại dựa trên trang hiện tại
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Chuyển đổi trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [show, setShow] = useState(false);

  return (
    <div>
      <SideBar />

      <br />
      <br />
      <h1>QUẢN LÝ PHIM</h1>
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Poster</th>
            <th>Tên phim</th>
            <th>Đạo diễn</th>
            <th>Diễn viên</th>
            <th>Thể loại</th>
            <th>Ngày khởi chiếu</th>
            <th>Thời lượng</th>
            <th>Xếp loại</th>
            <th>Ngôn ngữ</th>
            <th>Mô tả</th>
            <th>TrailerUrl</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentMovies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              {editMode[movie.id] ? (
                <>
                  <td>
                    <Form.Control
                      className="inputEdit"
                      type="text"
                      name="posterUrl"
                      value={editMode[movie.id].posterUrl}
                      onChange={(event) => handleInputChange(event, movie.id)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      className="inputEdit"
                      type="text"
                      name="title"
                      value={editMode[movie.id].title}
                      onChange={(event) => handleInputChange(event, movie.id)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      className="inputEdit"
                      type="text"
                      name="director"
                      value={editMode[movie.id].director}
                      onChange={(event) => handleInputChange(event, movie.id)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      className="inputEdit"
                      type="text"
                      name="actors"
                      value={editMode[movie.id].actors}
                      onChange={(event) => handleInputChange(event, movie.id)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      className="inputEdit"
                      type="text"
                      name="genre"
                      value={editMode[movie.id].genre}
                      onChange={(event) => handleInputChange(event, movie.id)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      className="inputEdit"
                      type="date"
                      name="releaseDate"
                      value={editMode[movie.id].releaseDate}
                      onChange={(event) => handleInputChange(event, movie.id)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      className="inputEdit"
                      type="text"
                      name="duration"
                      value={editMode[movie.id].duration}
                      onChange={(event) => handleInputChange(event, movie.id)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      className="inputEdit"
                      type="text"
                      name="rating"
                      value={editMode[movie.id].rating}
                      onChange={(event) => handleInputChange(event, movie.id)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      className="inputEdit"
                      type="text"
                      name="language"
                      value={editMode[movie.id].language}
                      onChange={(event) => handleInputChange(event, movie.id)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      className="inputEdit"
                      type="text"
                      name="description"
                      value={editMode[movie.id].description}
                      onChange={(event) => handleInputChange(event, movie.id)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      className="inputEdit"
                      type="text"
                      name="trailerUrl"
                      value={editMode[movie.id].trailerUrl}
                      onChange={(event) => handleInputChange(event, movie.id)}
                    />
                  </td>
                  <td>
                    <Button
                      variant="outline-success"
                      onClick={() => handleEdit(movie.id, editMode[movie.id])}
                    >
                      <i className="fa-solid fa-floppy-disk"></i>
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      onClick={() => exitEditMode(movie.id)}
                    >
                      <i className="fa-solid fa-rectangle-xmark"></i>
                    </Button>
                  </td>
                </>
              ) : (
                <>
                  <td>
                    <img src={movie.posterUrl} alt="" />
                  </td>
                  <td>{movie.title}</td>
                  <td>{movie.director}</td>
                  <td>{movie.actors}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.releaseDate}</td>
                  <td>{movie.duration}</td>
                  <td>{movie.rating}</td>
                  <td>{movie.language}</td>
                  <td>{movie.description}</td>
                  <td>
                    <iframe
                      width="300"
                      height="200"
                      src={movie.trailerUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </td>
                  <td>
                    <Button
                      variant="outline-warning"
                      onClick={() => enterEditMode(movie.id)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="outline-danger"
                      onClick={() => handleDelete(movie.id)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </Button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Admin;
