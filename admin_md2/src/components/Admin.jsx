import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Pagination from "./Pagination";
import SideBar from "./SideBar";

function Admin() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5);
  const [editMode, setEditMode] = useState({});

  useEffect(() => {
    // Sử dụng useEffect để gọi API lấy danh sách phim từ máy chủ
    axios
      .get(`http://localhost:8000/movies`)
      .then((response) => setMovies(response.data));
  }, []); // useEffect chỉ chạy một lần sau khi component được render

  // Hàm xử lý khi ấn nút "Lưu" sau khi chỉnh sửa phim
  const handleEdit = async (id, editedMovie) => {
    try {
      // Gọi API để cập nhật phim dựa trên ID và dữ liệu chỉnh sửa
      const response = await axios.patch(
        `http://localhost:8000/movies/${id}`,
        editedMovie
      );

      // Cập nhật danh sách phim trong state với phim đã được cập nhật
      setMovies((prevMovies) => {
        const updatedMovies = prevMovies.map((movie) =>
          movie.id === id ? response.data : movie
        );
        return updatedMovies;
      });

      // Kết thúc chế độ chỉnh sửa (đóng form chỉnh sửa)
      setEditMode({});
    } catch (error) {
      console.log(error);
    }
  };

  // Hàm xử lý khi thay đổi giá trị input trong form chỉnh sửa phim
  const handleInputChange = (event, id) => {
    const { name, value } = event.target;

    // Cập nhật thông tin chỉnh sửa của phim trong state editMode
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [id]: { ...prevEditMode[id], [name]: value },
    }));
  };

  // Hàm xử lý khi ấn nút "Sửa" để bắt đầu chỉnh sửa phim
  const enterEditMode = (id) => {
    // Lấy thông tin phim hiện tại dựa trên ID và đưa vào chế độ chỉnh sửa
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [id]: { ...movies.find((movie) => movie.id === id) },
    }));
  };

  // Hàm xử lý khi ấn nút "Hủy" để thoát khỏi chế độ chỉnh sửa
  const exitEditMode = (id) => {
    // Xóa thông tin phim đang chỉnh sửa khỏi chế độ chỉnh sửa
    setEditMode((prevEditMode) => {
      const updatedEditMode = { ...prevEditMode };
      delete updatedEditMode[id];
      return updatedEditMode;
    });
  };

  // Hàm xử lý khi ấn nút "Xóa" để xóa phim
  const handleDelete = async (id) => {
    try {
      // Gọi API để xóa phim dựa trên ID
      await axios.delete(`http://localhost:8000/movies/${id}`);

      // Cập nhật danh sách phim trong state bằng cách loại bỏ phim đã xóa
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // Xác định vị trí phim cuối và phim đầu trên từng trang
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Hàm xử lý khi chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                      Lưu
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      onClick={() => exitEditMode(movie.id)}
                    >
                      Hủy
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
                      variant="warning"
                      onClick={() => enterEditMode(movie.id)}
                    >
                      Sửa
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(movie.id)}
                    >
                      Xóa
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
