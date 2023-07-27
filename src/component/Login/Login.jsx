import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, FormControl, Button, Checkbox, Container } from "@mui/material";
import Joi from "joi";
import axios from "axios";
import { useTranslation } from 'react-i18next'
import { headers } from "../../locale/Header.api";

export default function Login(props) {
  const [token, setToken] = useState("");
  let [errorMsg, setErrorMsg] = useState("");
  let [errorsList, setErrorsList] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [t, i18n] = useTranslation()
  let [user, setUser] = useState({
    email: "",
    password: "",
  });


  function getFormValue(e) {
    let myUser = { ...user }; // Deep Copy
    myUser[e.target.name] = e.target.value;
    setUser(myUser);

    console.log(myUser);
  }
  const navigate = useNavigate();
  function goToHome() {
    navigate("/home");
  }
  function validateForm() {
    const schema = Joi.object({
      // .pattern(new RegExp(/^[a-z][0-9]{3}$/))
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: Joi.string().required(),
    });
    return schema.validate(user, { abortEarly: false });
  }

  async function submitFromData(e) {
    e.preventDefault();
    await axios
      .post("https://actitvityv1.onrender.com/students/signin", user, headers())
      .then((response) => {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        props.saveUserData();
        goToHome();
        setToken(token);
        // console.log(setToken);
        alert(response.data.token);
        console.log(response.data.token);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response);
        alert(error.response);
      });
  }
  function getlogin() {
    console.log('you are loged in ')
  }

  return (
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
              width: "300px",
            }}
          >
            {t('Login')}

          </h2>
          <TextField
            label="Email"
            required
            variant="outlined"
            color="primary"
            type="email"
            sx={{ mb: 3 }}
            fullWidth
            error={emailError}
            onChange={getFormValue}
            name="email"
          />
          <TextField
            label="Password"
            onChange={getFormValue}
            name="password"
            required
            variant="outlined"
            color="primary"
            type="password"
            error={passwordError}
            fullWidth
            sx={{ mb: 3 }}
          />
          <Container
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0",
              margin: '0',
            }}
          >

            <p>
              <Link className={`ml-auto`} to="resetPassword">
                {t('Forgot Password')}
              </Link>
            </p>
          </Container>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            sx={{
              fontSize: "17px",
              width: "300px",
              background: "#294292",
              marginBottom: "10px",
              color: 'white',
              "&:hover": {
                color: "#294292",
              },
            }}
          >
            {t('Login')}
          </Button>
        </form>
        <small style={{ fontSize: '20px' }}>
          {t("I don't have Account")}{"   "}<Link to="/register">{t('Register')} </Link>
        </small>
      </div>
    </React.Fragment>
  );

}