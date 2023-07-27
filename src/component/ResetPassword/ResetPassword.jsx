import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './ResetPassword.module.css'
import { useState } from 'react';
import axios from 'axios';
import { headers } from '../../locale/Header.api';
import { useTranslation } from "react-i18next";
// import { MarkEmailReadOutlinedIcon } from "@mui/icons-material";
import MarkEmailReadOutlinedIcon from '@mui/icons-material/EmailOutlined';
export default function ResetPassword() {
  const [token, setToken] = useState('');
  const { t, i18n } = useTranslation();
  const [success, setSuccess] = useState('');
  let [errorMsg, setErrorMsg] = useState("");
  let [errorsList, setErrorsList] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState('');
  let [user, setUser] = useState({ email: "" });

  function getFormValue(e) {
    let myUser = { ...user };  // Deep Copy  
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }
  const navigate = useNavigate();

  async function submitFromData(e) {
    e.preventDefault();
    await axios.post("https://actitvityv1.onrender.com/students/resetPass", user, headers())
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        const x = response.data.message
        setSuccess(x);
        function goToHome() {
          navigate("/verifycode")
        }
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
                  <h3 className={`${style.tittle}`}>{t("Forgot Password")}</h3>
                </div>
                <form onSubmit={submitFromData} action="#" method="post">
                  {success ? <div className={`${style.errorMsg} alert alert-danger  mb-3 m-auto`}>{success}</div> : ""}
                  <div className="form-group last mb-3">
                    <MarkEmailReadOutlinedIcon />
                    <label className={`${style.labell} `} >{t("email")} </label>
                    <input onChange={getFormValue} name='email' type="email" dir="ltr" className={`${style.inputt} form-control`} placeholder="Your email" id="email" />
                  </div>
                  <button className={`${style.btn} btn-info my-3`} type='submit'>
                    {t("send")}
                  </button>
                  <p>
                    <Link className={`${style.forget} ml-auto`} to="verifycode">
                      {t("VerifyCode")}
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

