import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './VerifyCode.module.css'
import { useState } from 'react';
import axios from 'axios';
import { headers } from '../../locale/Header.api';
import { useTranslation } from "react-i18next";

import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function VerifyCode() {
  const [token, setToken] = useState('');
  const { t, i18n } = useTranslation();
  const [success, setSuccess] = useState('');

  let [errorMsg, setErrorMsg] = useState("");
  let [errorsList, setErrorsList] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState('');
  let [user, setUser] = useState({
    email: "", password: "", code: ""
  });
  function getFormValue(e) {
    let myUser = { ...user };  // Deep Copy  
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }
  async function submitFromData(e) {
    e.preventDefault();
    await axios.post("https://actitvityv1.onrender.com/students/verifyCode", user, headers())
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        const x = response.data.message
        setSuccess(x);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response);


      });


  }




  return (
    <>
      <div className="contents">

        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <div className={`${style.form_block}  mx-auto`}>

                <div className="text-center mb-5">
                  <h3 className={`${style.tittle}`}>{t("VERIFICATION")}</h3>
                </div>
                <form onSubmit={submitFromData} action="#" method="post">
                  {success ? <div className={`${style.message} alert alert-success  mb-3 m-auto`}>{success}</div> : ""}

                  <div className="form-group last mb-3">
                    <MarkEmailReadOutlinedIcon />
                    <label className={`${style.labell} `} >{t("email")}</label>
                    <input onChange={getFormValue} name='email' type="email" className={`${style.inputt} form-control`} placeholder="Your email" id="email" dir="ltr" />

                  </div>
                  <div className="form-group first">
                    <CodeOutlinedIcon />
                    <label className={`${style.labell} `}  > {t("code")}</label>
                    <input onChange={getFormValue} name='code' type="text" className={`${style.inputt} form-control`} placeholder="*******" id="username" dir="ltr" />
                  </div>
                  <div className="form-group last mb-3">
                    <LockOutlinedIcon />
                    <label className={`${style.labell} `} >{t("password")}</label>
                    <input onChange={getFormValue} name='password' type="password" placeholder="Your Password" id="password" dir="ltr" className={`${style.inputt} form-control`} />
                  </div>
                  <button className={`${style.btn} btn-info my-3`} type='submit'>
                    {t("send")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

