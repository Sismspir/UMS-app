import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import './App.css';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import LogUser from "./LogUser";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(()=>{
      const localstorageGetInformation = localStorage.getItem('isLoggedIn')

       if(localstorageGetInformation == '1'){
         setIsLoggedIn(true)
         localStorage.setItem('isLoggedIn','1')
       }
     },[isLoggedIn])

  const Logout = () => {
    localStorage.setItem('isLoggedIn','0')
    setIsLoggedIn(false)
  }

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
      {isLoggedIn && (
      <BrowserRouter>
        <nav style={navBarr}>
              <Link style={navItem} to="/">List Users</Link>
              <Link style={navItem} to="user/create">Create User</Link>
              <Link style={navItem} onClick={Logout}>Log Out</Link>
        </nav>
        <div className="Login">
          <Routes>
            <Route index element={<ListUser />} />
            <Route path="user/create" element={<CreateUser />} />
            <Route path="user/:id/edit" element={<EditUser />} />
          </Routes>
        </div>
      </BrowserRouter> ) || <LogUser logged={setIsLoggedIn}/> 
      }
    </div>
  );
}

export default App;