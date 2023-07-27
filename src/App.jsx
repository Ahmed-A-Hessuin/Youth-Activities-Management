import logo from './logo.svg';
import Home from './component/Home/Home';
import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import PrimarySearchAppBar from "./component/Navbar/newNav";
import Footer from './component/Footer/Footer'

import About from './component/About/About';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import AdminSideBar from './component/Admin/AdminSideBar/AdminSideBar';
import Details from './component/Details/Details';
import DetailsActivity from './component/DetailsActivity/DetailsActivity';
import AddActivity from './component/Admin/AddActivity/AddActivity';
import AddCategory from './component/Admin/AddCategory/AddCategory';
import Person from './component/Person/Person';
import PersonSideBar from './component/PersonSideBar/PersonSideBar';
import Repassword from './component/Repassword/Repassword';
import ResetPassword from './component/ResetPassword/ResetPassword';
import UpdatePerson from './component/UpdatePerson/UpdatePerson';
import VerifyCode from './component/VerifyCode/VerifyCode';
import ChatBoot from './component/ChatBoot/ChatBoot';
import Logout from './Logout/Logout';
import { useEffect } from 'react';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import HomeEn from './component/HomeEn/HomeEn';
import DetailsEn from './component/DetailsEn/DetailsEn';
import DetailsActivityEn from './component/DetailsActivityEn/DetailsActivityEn';
import { Container } from '@mui/material';
import NewFooter from './component/Footer/NewFooter';



function App() {

  const [userData,setUserData]=useState();
  let navigate =useNavigate();
  function saveUserData() {
    let encodedToken = localStorage.getItem('token');
    let decodeToken = jwtDecode(encodedToken);
    setUserData(decodeToken);
    // console.log(decodeToken);
  }
  // to handel refresh
  useEffect(() => {
    if(localStorage.getItem('token')!=null){
      saveUserData();
    } 
  }, [])
  function logout() {
    localStorage.removeItem('token');
    setUserData(null);
    navigate('/login');
    
  }

  function ProtectedRoute(props){
    if (localStorage.getItem('token')==null){
        return <Navigate to='/login'/>
    }
    else{
        return props.children;
    }
  }


  return (
    <>
      <PrimarySearchAppBar userData={userData} logout={logout} />

      <div>
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/homeEn" element={<HomeEn />}></Route>

          <Route path="about" element={<About />}></Route>
          <Route
            path="login"
            element={<Login saveUserData={saveUserData} />}
          ></Route>
          <Route path="login/register" element={<Register />}></Route>
          <Route path="login/resetPassword" element={<ResetPassword />}></Route>
          <Route
            path="login/resetPassword/verifycode"
            element={<VerifyCode />}
          ></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="register/login" element={<Login />}></Route>
          <Route path="login/admin" element={<AdminSideBar />}></Route>
          <Route path="admin" element={<AdminSideBar />}></Route>
          <Route path={`/details`} element={<Details />}></Route>
          <Route path={`/detailsEn`} element={<DetailsEn />}></Route>
          <Route
            path={`/detailsActivityEn`}
            element={<DetailsActivityEn />}
          ></Route>
          <Route
            path={`/detailsActivity`}
            element={<DetailsActivity />}
          ></Route>
          <Route path={`/admin/addActivity`} element={<AddActivity />}></Route>
          <Route path={`admin/addCategory`} element={<AddCategory />}></Route>
          {/* <Route path={`profile`} element={<PersonSideBar />}></Route> */}
          <Route path={`profile`} element={<Person />}></Route>
          <Route path={`/profile/person`} element={<Person />}></Route>
          <Route
            path={`/profile/updateperson`}
            element={<UpdatePerson />}
          ></Route>
          <Route path={`/repassword`} element={<Repassword />}></Route>
          <Route path={`/profile/repassword`} element={<Repassword />}></Route>
          <Route path={`/chatboot`} element={<ChatBoot />}></Route>
          <Route path={`/logout`} element={<Logout />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
