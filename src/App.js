import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import './App.css';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import LogUser from "./LogUser";

function App() {

  const [isLogged, setIsLogged] = useState(false);

  const navBarr = {
    display: "flex",
    flexDirection: "row",
    margin: "5vh",
  }

  const navItem = {
    margin: "2vw",
    color: "white",
    textDecoration: "none",
    fontSize: "3vh",
  }

  return (
    <div>
      {isLogged && (
      <BrowserRouter>
        <nav style={navBarr}>
              <Link style={navItem} to="/">List Users</Link>
              <Link style={navItem} to="user/create">Create User</Link>
        </nav>
        <div className="Login">
          <Routes>
            <Route index element={<ListUser />} />
            <Route path="user/create" element={<CreateUser />} />
            <Route path="user/:id/edit" element={<EditUser />} />
          </Routes>
        </div>
      </BrowserRouter> ) || <LogUser logged={setIsLogged}/> 
      }
    </div>
  );
}

export default App;