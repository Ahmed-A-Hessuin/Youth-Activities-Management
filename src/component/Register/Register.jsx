import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Register.module.css'
import axios from 'axios';
import Joi from 'joi';
import { useTranslation } from "react-i18next";
import { Button, TextField } from '@mui/material';

export default function Register() {
  let [errorMsg, setErrorMsg] = useState("");
  let [errorsList, setErrorsList] = useState([]);
  let [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();
  let [user, setUser] = useState({
    fullName: "", code: "", email: "", phone: "", Specialization: "", password: "", repassword: ""
  });

  function getFormValue(e) {
    let myUser = { ...user };  // Deep Copy  
    myUser[e.target.name] = e.target.value;
    setUser(myUser);

    console.log(myUser);
  }
  const navigate = useNavigate();
  function goToLogin() {
    navigate("/login")
  }

  function validate() {
    const schema = Joi.object({



      fullName: Joi.string().required(),
      code: Joi.number().required(),
      phone: Joi.number().required(),
      email: Joi.string().required().email({ tlds: { allow: ["com", "net"] } }),
      password: Joi.string().required(),
      repassword: Joi.string().required(),
      Specialization: Joi.string().required(),
    });
    return schema.validate(user, { abortEarly: false });
  }
  async function submitFromData(e) {
    e.preventDefault(e);
    setLoading(true);
    let validatResponse = validate();
    console.log(validatResponse);
    goToLogin();
    if (validatResponse.error) {
      setErrorsList(validatResponse.error.details);
      console.log(errorsList)
      goToLogin();

    } else {
      let { data } = await axios.post("https://actitvityv1.onrender.com/students/signUp", user);
      if (data.message === 'success') {
        goToLogin();
        console.log(data.message);
        console.log(data.status);

      } else {
        setErrorMsg(data.message)
        console.log(data.message);
        console.log(data.message);
        goToLogin();
        alert('111111111')

      }
      // goToLogin();
      console.log(data.message);
      console.log(data.status);
    }
    goToLogin();

    setLoading(false);
    alert('888888')

  }



  return (
    // <>

    // {/* /////////////////////////////////////////// */}
    // {/* <div className='my-4 w-50 m-auto'>
    //   <h1 cl
    <React.Fragment>
      <div className="container">
        <form
          autoComplete="off"
          onSubmit={submitFromData}
          action="#"
          method="post"
        >
          <h2
            style={{
              color: "#294292",
              margin: " 10px 45% 15px",
              fontWeight: "bold",
            }}
          >
            {t('Register')}
          </h2>
          <TextField
            label="fullName"
            name="fullName"
            required
            onChange={getFormValue}
            variant="outlined"
            color="primary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
          />
          <TextField
            label="Code"
            onChange={getFormValue}
            name="code"
            required
            variant="outlined"
            color="primary"
            type="number"
            sx={{ mb: 3 }}
            fullWidth
          />
          <TextField
            label="email"
            onChange={getFormValue}
            name="email"
            required
            variant="outlined"
            color="primary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
          />
          <TextField
            label="Phone"
            onChange={getFormValue}
            name="phone"
            required
            variant="outlined"
            color="primary"
            type="number"
            sx={{ mb: 3 }}
            fullWidth
          />
          <TextField
            label="Specialization"
            onChange={getFormValue}
            name="Specialization"
            required
            variant="outlined"
            color="primary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
          />

          <TextField
            label="Password"
            onChange={getFormValue}
            name="password"
            required
            variant="outlined"
            color="primary"
            type="password"
            fullWidth
            sx={{ mb: 3 }}
          />
          <TextField
            label="repassword"
            onChange={getFormValue}
            name="repassword"
            required
            variant="outlined"
            color="primary"
            type="confirm-password"
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            style={{
              fontSize: "17px",
              width: "300px",
              background: "#294292",
              marginBottom: "10px",
              color: "white",
            }}
            onClick={submitFromData}
          >
            {t("Register")}
          </Button>
        </form>
        <small style={{ fontSize: '20px' }}>
          {t('Have an Account')}{"؟"} <Link to="/login">{t('Login')}</Link>
        </small>
      </div>
    </React.Fragment>
  );
}
