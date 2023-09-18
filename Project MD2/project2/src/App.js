import "./App.css";
import Header from "./components/layout/Header";
import HomePage from "./components/page/HomePage";
import Footer from "./components/layout/Footer";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./components/page/MovieDetail";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Booking from "./components/page/Booking";
import History from "./components/page/History";
import UserDetail from "./components/page/UserDetail";
import NotFound from "./components/page/NotFound";

function App() {
  return (
    <>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/detail/:id" element={<MovieDetail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/booking/:id" element={<Booking />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/userdetail" element={<UserDetail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
