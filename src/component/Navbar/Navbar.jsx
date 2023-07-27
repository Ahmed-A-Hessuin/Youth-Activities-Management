
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import v from '../../images/Thebas Academy.jpg'
import { useTranslation, initReactI18next } from "react-i18next";
import Home from '../Home/Home';
import HomeEn from '../HomeEn/HomeEn';
import { Button } from "@mui/material";
import logo from '../../images/download.png';

const  Navbar=(props)=> {
  const [t,i18n] = useTranslation()
  return (
    <>
      <div className={`${style.container}`}>
        <div className={`${style.navbarright}  container-fluid`}>
          <ul className={`${style.navbarright} navbar-nav`}>
            <li>
              {i18n.language === "en" && (
                <Button
                  variant="outlined"
                  color="warning"
                  onClick={() => {
                    i18n.changeLanguage("ar");
                  }}
                >
                  Arabic
                </Button>
              )}
              {i18n.language === "ar" && (
                <Button
                  onClick={() => {
                    i18n.changeLanguage("en");
                  }}
                >
                  English
                </Button>
              )}
            </li>
          </ul>
          <p className={`${style.navbarmiddle}`}> {t("welcome")}</p>
          <div className={`${style.navbarleft}`}>
            <i className="fa-solid fa-building-columns"></i>
            <img className={`${style.img} mx-3 `} src={logo} alt="Logo" />
          </div>
        </div>
      </div>
      <div className={`${style.navbar1} container-fluid container`}>
        <div className={`${style.contact}`}>
          <Link className="navbar-brand" to="home">
            <div className={style.icon}>
              <p> {t("call")}</p>
              {/* <p>اتصل بنا</p> */}
              <i className="fa-solid fa-phone p-3"></i>
              <br />
            </div>
            <div className={style.number}>
              <p> 0552151021 - 21502051303</p>
            </div>
          </Link>
        </div>
        <div
          className="collapse navbar-collapse d-flex  justify-content-center "
          style={{ marginTop: "5px" }}
          id="navbarSupportedContent"
        >
          <ul className={`${style.navbar_nav} navbar-nav mx-auto mb-2 mb-lg-0`}>
            <li>
              <img className={style.mainLogo} src={v} alt="" />
            </li>
          </ul>
        </div>
        <div className={`${style.formMessage} me-auto`}>
          <div className={`${style.message}`}>
            {/* <span>راسلنا</span> */}
            <span>{t("Email")}</span>
            <i className={`${style.x}  fa-regular fa-envelope`}></i>
          </div>
          <span></span>
        </div>
      </div>
      {/* </nav>  */}



      <nav className={`${style.test} navbar navbar-expand-lg navbar-light `}>
        <div className="container-fluid container">
          {/* <a className="navbar-brand" href="#">Noxe</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {props.userData ? (
                <>
                  <li>
                    <Link className={`${style.nav_linkperson}`} to={`profile/`}>
                      <i className="fa-solid fa-user"></i>
                    </Link>
                  </li>
                  {/* <Link  className={`${style.nav_link} nav-link`} to="login">Logout</Link> */}
                  <li className="nav-item ">
                    <a href="/" className="nav-link" onClick={props.logout}>
                      {t("logOut")}
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ">
                    <Link className="nav-link" to="login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {props.userData ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`${style.nav_link}`} to="home">
                    {t("homePage")}
                    {/* الرئيسيه */}
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
