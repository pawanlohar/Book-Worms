import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/home";
import Login from "./components/main/login";
import Signup from "./components/main/signup";
import Header from "./components/main/header";
import ResetPassword from "./components/main/resetPassword";
import User from "./components/user";
import AddNovel from "./components/user/addNovels";
import Admin from "./components/admin";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
            <Route element={<Login />} path="login" />
            <Route element={<Signup />} path="signup" />
            <Route element={<Header />} path="header" />
            <Route element={<ResetPassword />} path="resetpassword" />
          </Route>

          <Route element={<User />} path="user">
            <Route element={<AddNovel />} path="addnovel" />
            <Route element={<Header />} path="header" />
          </Route>


          <Route element={<Admin />} path="admin">
           <Route element={<Header />} path="header" />

          </Route>

          <Route exact path="" element={<Navigate to="/main/login/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
