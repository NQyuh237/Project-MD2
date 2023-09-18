import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Admin from "./components/Admin";
import FormAdd from "./components/FormAdd";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./components/PrivateRouter";
import NotFound from "./components/NotFound";
import TicketManeger from "./components/TicketManeger";

function App() {
  return (
    <div className="App">
      <Routes element={<PrivateRouter />}>
        <Route path="/" element={<Login />} />
        <Route path="/admin/formadd" element={<FormAdd />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin/tickmane" element={<TicketManeger />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
