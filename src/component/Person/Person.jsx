import React, { useEffect, useState } from "react";
import style from "./Person.module.css";
import PersonSideBar from "../PersonSideBar/PersonSideBar";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { headers } from "../../locale/Header.api";
import { useTranslation } from "react-i18next";

// <===========Icons=============>
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';

export default function Person() {
  let [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [person, setPerson] = useState("");
  const [t, i18n] = useTranslation();

  const [values, setValues] = useState({
    name: "",
    email: "",
    code: "",
    phone: "",
    Specialization: "",
    image: "",
  });

  // {{URL}}/students/myProfile

  const getDataProfile = async () => {
    const { data } = await axios.get(
      `https://actitvityv1.onrender.com/students/myProfile`,
      headers()
    );

    if (data) {
      setPerson(data.Student);
      console.log(data.Student);
      setValues({
        ...values,
        name: data.Student.fullName,
        email: data.Student.email,
        code: data.Student.code,
        phone: data.Student.phone,
        Specialization: data.Student.Specialization,
        image: data.Student.image,
      });
    } else {
      setPerson([]);
    }
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  return (
    <>
      {i18n.language === "en" && (
        <div>
          <PersonSideBar />
          <div className="container">
            <div className={`${style.sidebar} col-md-12 container  `} >
              <div className={`${style.form_block}  mx-auto`} >
                <Row className={`${style.row}`}>
                  <Col sm="8" style={{ 'margin': '50px 20%' }} >
                    <form >
                      <div className={`${style.dd} input-gp my-3`} dir="ltr" >
                        <DriveFileRenameOutlineOutlinedIcon />
                        <label className={style.label} htmlFor="first_name" style={{ marginLeft: "10px" }} >
                          {t("Name")}{" "}
                        </label>
                        <input
                          className={`${style.input} form-control`}
                          type="text"
                          name="fullName"
                          value={values.name}
                          dir="ltr"
                        />
                      </div>
                      <div className={`${style.dd} input-gp my-3`} dir="ltr">
                        <CodeOutlinedIcon />
                        <label className={style.label} htmlFor="age" style={{ marginLeft: "10px" }}>
                          {t("code")}
                        </label>
                        <input
                          className={`${style.input} form-control`}
                          type="number"
                          name="code"
                          value={values.code}
                          dir="ltr"
                        />
                      </div>
                      <div className={`${style.dd} input-gp my-3`} dir="ltr">
                        <EmailOutlinedIcon />
                        <label className={style.label} htmlFor="email" style={{ marginLeft: "10px" }}>
                          {t("email")}{" "}
                        </label>
                        <input
                          className={`${style.input} form-control`}
                          type="email"
                          name="email"
                          value={values.email}
                          dir="ltr"
                        />
                      </div>
                      <div className={`${style.dd} input-gp my-3`} dir="ltr">
                        <LocalPhoneOutlinedIcon />
                        <label className={style.label} htmlFor="age" style={{ marginLeft: "10px" }}>
                          {" "}
                          {t("phone")}
                        </label>
                        <input
                          className={`${style.input} form-control`}
                          type="number"
                          name="phone"
                          value={values.phone}
                          dir="ltr"
                        />
                      </div>
                      <div className={`${style.dd} input-gp my-3`} dir="ltr" >
                        <GradeOutlinedIcon />
                        <label className={style.label} htmlFor="first_name" style={{ marginLeft: "10px" }}>
                          {t("Specialization")}{" "}
                        </label>
                        <input
                          className={`${style.input} form-control`}
                          type="text"
                          name="Specialization"
                          value={values.Specialization}
                          dir="ltr"
                        />
                      </div>
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
                            to="/profile/repassword"
                          >
                            {t('changePassword')}
                            {/* تغيير كلمه المرور */}
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
          <div className={`${style.sidebar} col-md-12 container  `}>
            <div className={`${style.form_block}  mx-auto`}>
              <Row className={`${style.row}`}>
                <Col sm="8">
                  <form>

                    <div className={`${style.dd} input-gp my-3`}>
                      <DriveFileRenameOutlineOutlinedIcon />
                      <label className={style.label} htmlFor="first_name">
                        {t("Name")}{" "}
                      </label>
                      <input
                        className={`${style.input} form-control`}
                        type="text"
                        name="fullName"
                        value={values.name}
                        dir="ltr"
                      />
                    </div>

                    <div className={`${style.dd} input-gp my-3`}>
                      <CodeOutlinedIcon />
                      <label className={style.label} htmlFor="age">
                        {t("code")}
                      </label>
                      <input
                        className={`${style.input} form-control`}
                        type="number"
                        name="code"
                        value={values.code}
                        dir="ltr"
                      />
                    </div>
                    <div className={`${style.dd} input-gp my-3`}>
                      <EmailOutlinedIcon />
                      <label className={style.label} htmlFor="email">
                        {t("email")}{" "}
                      </label>
                      <input
                        className={`${style.input} form-control`}
                        type="email"
                        name="email"
                        value={values.email}
                        dir="ltr"
                      />
                    </div>

                    <div className={`${style.dd} input-gp my-3`}>
                      <LocalPhoneOutlinedIcon />
                      <label className={style.label} htmlFor="age">
                        {" "}
                        {t("phone")}
                      </label>
                      <input
                        className={`${style.input} form-control`}
                        type="number"
                        name="phone"
                        value={values.phone}
                        dir="ltr"
                      />
                    </div>
                    <div className={`${style.dd} input-gp my-3`}>
                      <GradeOutlinedIcon />
                      <label className={style.label} htmlFor="first_name">
                        {t("Specialization")}{" "}
                      </label>
                      <input
                        className={`${style.input} form-control`}
                        type="text"
                        name="Specialization"
                        value={values.Specialization}
                        dir="ltr"
                      />
                    </div>

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
                          to="/profile/repassword"
                        >
                          {t('changePassword')}
                          {/* تغيير كلمه المرور */}
                        </Link>
                      </button>
                    </div>
                  </form>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
