import React, { useState } from 'react'
import style from './Repassword.module.css'
import PersonSideBar from '../PersonSideBar/PersonSideBar'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios';
import { headers } from '../../locale/Header.api';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

// <===========Icons=============>
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import KeyOffOutlinedIcon from '@mui/icons-material/KeyOffOutlined';

export default function Repassword(props) {
  const [token, setToken] = useState('');
  let [errorMsg, setErrorMsg] = useState("");
  let [errorsList, setErrorsList] = useState([]);
  let [error, setError] = useState('');
  let [changed, setChanged] = useState('');
  const [t, i18n] = useTranslation()

  // alert(token)
  let [user, setUser] = useState({
    // password:"",repassword:"",
    oldPassword: "", newPassword: "",
  });
  function getFormValue(e) {
    let myUser = { ...user };  // Deep Copy  
    myUser[e.target.name] = e.target.value;
    setUser(myUser);

    console.log(myUser);
  }
  // async function submitFromData(e){
  //   e.preventDefault(e);

  //     let {data}=await axios.put("https://actitvityv1.onrender.com/students/myProfile/changePassword",user);
  //     // alert('go to home')
  //     if(data.message=='success'){ 

  //       const retrievedToken = data.token;

  // setToken(retrievedToken);
  // console.log(token);
  // setError(error.response.data.message);

  //       localStorage.setItem("userToken",data.token);
  //       props.saveUserData();
  //       console.log('gggg');
  //       console.log(user);


  //     }else{
  //       alert(token)
  //     console.log('gggg');
  //     setError(data.message);
  //     alert(data.message)

  //     }
  //   }

  async function submitFromData(e) {
    e.preventDefault();
    await axios.put("https://actitvityv1.onrender.com/students/myProfile/changePassword", user, headers())
      .then((response) => {
        const retrievedToken = token;

        setToken(retrievedToken);
        console.log(token);
        console.log(response);
        console.log(response.data.message);
        setChanged(response.data.message)
        console.log(changed);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.message);
        // alert(error.response.data.message)

      });


  }


  return (
    <>
      {i18n.language === "en" && (
        <div>
          <PersonSideBar />
          <div style={{ flex: "5" }}>
            <div className={`${style.sidebar} col-md-12 container  `} >
              <div className={`${style.form_block}  mx-auto`} >
                {error ? (
                  <div
                    className={`w-50  d-flex justify-content-center text-align-center alert alert-danger  mb-1 m-auto`}
                  >
                    {error}
                  </div>
                ) : (
                  ""
                )}
                {errorsList.map((error, index) => (
                  <div key={index} className="alert alert-danger text-align-center">
                    {error.message}
                  </div>
                ))}
                {errorMsg ? (
                  <div className="alert alert-danger text-align-center">
                    {errorMsg}
                  </div>
                ) : (
                  ""
                )}
                {changed ? (
                  <div
                    className={`w-50  d-flex justify-content-center text-align-center alert alert-success  mb-1 m-auto`}
                  >
                    {changed}
                  </div>
                ) : (
                  ""
                )}

                <Row className={`${style.row}`} style={{ margin: "0px 15% 0px 20%" }} dir="ltr">
                  <Col sm="8">
                    <form onSubmit={submitFromData}>
                      <div className="input-gp my-3 ">
                        <KeyOutlinedIcon />
                        <label className={`${style.label} `} htmlFor="password" style={{ marginLeft: "10px" }}>
                          {" "}
                          {t("OldPassword")}
                        </label>
                        <input
                          onChange={getFormValue}
                          type="password"
                          className={`${style.input} form-control`}
                          name="oldPassword"
                        />
                      </div>
                      <div className="input-gp my-3" >
                        <KeyOffOutlinedIcon />
                        <label className={`${style.label} `} htmlFor="password" style={{ marginLeft: "10px" }}>
                          {t("NewPassword")}{" "}
                        </label>
                        <input
                          onChange={getFormValue}
                          type="password"
                          className={`${style.input} form-control`}
                          name="newPassword"
                        />
                      </div>

                      <Button
                        variant="contained"
                        sx={{
                          background: "#294292",
                          color: "white",
                          margin: "8px 10px 0 0",
                          fontSize: "16px",
                          marginLeft: "10px"
                        }}
                      >
                        {t("save")}
                      </Button>
                      <div className={`${style.button}`}>
                        <button
                          className={`${style.btn} btn-info mx-5 mt-2`}
                          type="submit"
                        >
                          <Link
                            className={`${style.forget} ml-auto`}
                            to="/profile/updateperson"
                          >
                            {t('EditPersonalInformation')}
                            {/* تعديل المعلومات الشخصيه */}
                          </Link>
                        </button>
                        <button
                          className={`${style.btn} btn-info mx-5 mt-5`}
                          type="submit"
                        >
                          <Link
                            className={`${style.forget} ml-auto`}
                            to="/profile/person"
                          >
                            {t('personalInformation')}
                            {/* المعلومات الشخصيه */}
                          </Link>
                        </button>
                      </div>
                    </form>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      )}
      {i18n.language === "ar" && (
        <div>
          <PersonSideBar />
          <div style={{ flex: "5" }}>
            <div className={`${style.sidebar} col-md-12 container  `} >
              <div className={`${style.form_block}  mx-auto`} >
                {error ? (
                  <div
                    className={`w-50  d-flex justify-content-center text-align-center alert alert-danger  mb-1 m-auto`}
                  >
                    {error}
                  </div>
                ) : (
                  ""
                )}
                {errorsList.map((error, index) => (
                  <div key={index} className="alert alert-danger text-align-center">
                    {error.message}
                  </div>
                ))}
                {errorMsg ? (
                  <div className="alert alert-danger text-align-center">
                    {errorMsg}
                  </div>
                ) : (
                  ""
                )}
                {changed ? (
                  <div
                    className={`w-50  d-flex justify-content-center text-align-center alert alert-success  mb-1 m-auto`}
                  >
                    {changed}
                  </div>
                ) : (
                  ""
                )}

                <Row className={`${style.row}`}>
                  <Col sm="8">
                    <form onSubmit={submitFromData}>
                      <div className="input-gp my-3 ">
                        <KeyOutlinedIcon />
                        <label className={`${style.label} `} htmlFor="password">
                          {" "}
                          {t("OldPassword")}
                        </label>
                        <input
                          onChange={getFormValue}
                          type="password"
                          className={`${style.input} form-control`}
                          name="oldPassword"
                        />
                      </div>
                      <div className="input-gp my-3 ">
                        <KeyOffOutlinedIcon />
                        <label className={`${style.label} `} htmlFor="password">
                          {t("NewPassword")}{" "}
                        </label>
                        <input
                          onChange={getFormValue}
                          type="password"
                          className={`${style.input} form-control`}
                          name="newPassword"
                        />
                      </div>

                      <Button
                        variant="contained"
                        sx={{
                          background: "#2a2185",
                          color: "white",
                          margin: "8px 10px 0 0",
                          fontSize: "16px",
                        }}
                      >
                        {t("save")}
                      </Button>
                      <div className={`${style.button}`}>
                        <button
                          className={`${style.btn} btn-info mx-5 mt-2`}
                          type="submit"
                        >
                          <Link
                            className={`${style.forget} ml-auto`}
                            to="/profile/updateperson"
                          >
                            {t('EditPersonalInformation')}
                            {/* تعديل المعلومات الشخصيه */}
                          </Link>
                        </button>
                        <button
                          className={`${style.btn} btn-info mx-5 mt-5`}
                          type="submit"
                        >
                          <Link
                            className={`${style.forget} ml-auto`}
                            to="/profile/person"
                          >
                            {t('personalInformation')}
                            {/* المعلومات الشخصيه */}
                          </Link>
                        </button>
                      </div>
                    </form>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
