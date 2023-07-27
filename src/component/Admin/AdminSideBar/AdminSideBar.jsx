import React from 'react'
import { Link } from 'react-router-dom'
import style from './AdminSideBar.module.css'

const AdminSideBar = () => {
    return (
      
        <div className={`${style.sidebar} `}>
          
            <Link to="/admin/addCategory" style={{ textDecoration: "none" }}>
              <div
                className={`${style.tittle} admin-side-text my-1  p-2 mx-auto text-center fs-4`}
              >
                اداره الفئات
              </div>
            </Link>
            <Link to="/admin/addActivity" style={{ textDecoration: "none" }}>
              <div
                className={`${style.tittle} admin-side-text my-1  p-2 mx-auto text-center fs-4`}
              >
                اداره الانشطه
              </div>
            </Link>

            <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
              <div
                className={`${style.tittle} admin-side-text my-1  p-2 mx-auto text-center fs-4`}
              >
                اداره الفئات
              </div>
            </Link>
            <Link to="/admin/addCategory" style={{ textDecoration: "none" }}>
              <div
                className={`${style.tittle} admin-side-text my-1  p-2 mx-auto text-center fs-4`}
              >
                <i className="fa-regular fa-message "></i>
                الرسائل
              </div>
            </Link>
            <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
              <div
                className={`${style.tittle} admin-side-text my-1  p-2 mx-auto text-center fs-4`}
              >
                <i className="fa-sharp fa-solid fa-question"></i>
                مساعده
              </div>
            </Link>

            <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
              <div
                className={`${style.tittle} admin-side-text my-1  p-2 mx-auto text-center fs-4`}
              >
                <i className="fa-sharp fa-solid fa-gear"></i>
                الاعدادات
              </div>
            </Link>
            <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
              <div
                className={`${style.tittle} admin-side-text my-1  p-2 mx-auto text-center fs-4`}
              >
                <i className="fa-solid fa-lock"></i>
                كلمه المرور
              </div>
            </Link>
            <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
              <div
                className={`${style.tittle} admin-side-text my-1  p-2 mx-auto text-center fs-4`}
              >
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                تسجيل خروج
              </div>
            </Link>
        
        </div>
      
    );
}

export default AdminSideBar
