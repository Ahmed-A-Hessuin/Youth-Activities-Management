import React from "react";
import { Link } from "react-router-dom";
import style from "./PersonSideBar.module.css";
import { useTranslation } from "react-i18next";
import "./style.css";
import { Group, Help, Home, Message, Settings } from "@mui/icons-material";
export default function PersonSideBar() {
  const { t, i18n } = useTranslation();
  let list = document.querySelectorAll(".navigation li");

  function activeLink() {
    list.forEach((item) => {
      item.classList.remove("hovered");
    });
    this.classList.add("hovered");
  }
  // list.forEach((item) => item.addEventListener("mouseover", activeLink));

  return (
    // <div className={`${style.sidebar} col-md-4  m-auto  container`} >
    //   <div className="d-flex flex-column justify-content-start ">
    //     <Link to="/profile/person" style={{ textDecoration: "none" }}>
    //       <div
    //         className={`${style.tittle} admin-side-text my-1  p-2 mx-auto text-center fs-4`}
    //       >
    //         {t("personalInformation")}
    //         {/* المعلومات الشخصيه */}
    //       </div>
    //     </Link>
    //     <Link to="/profile/repassword" style={{ textDecoration: "none" }}>
    //       <div
    //         className={`${style.tittle} admin-side-text my-1  p-2 mx-auto text-center fs-4`}
    //       >
    //         {t("changePassword")}
    //         {/* تغيير كلمه المرور  */}
    //       </div>
    //     </Link>

    //     <Link to="/profile/updateperson" style={{ textDecoration: "none" }}>
    //       <div
    //         className={`${style.tittle} admin-side-text my-1  p-2 mx-auto text-center fs-4`}
    //       >
    //         {t("EditPersonalInformation")}
    //         {/* تعديل المعلومات الشخصيه */}
    //       </div>
    //     </Link>
    //   </div>
    // </div>
    <>
      {i18n.language === "en" && (
        <div dir='ltr'>
          <div className="navigation">
            <ul>
              <li>
                <a href="/home">
                  <span className="icon">
                    <Home />
                  </span>
                  <span className="title">{t('Thebes Academy')}</span>
                </a>
              </li>

              <li>
                <Link to="/profile/person" >

                  <span className="icon">
                    <Group />
                  </span>
                  <span className="title">{t("personalInformation")}</span>

                </Link>
              </li>

              <li>
                <Link to='/profile/repassword'>
                  <span className="icon">
                    <Message />
                  </span>
                  <span className="title"> {t("changePassword")}</span>
                </Link>
              </li>

              <li>
                <Link to='/profile/updateperson'>
                  <span className="icon">
                    <Settings />
                  </span>
                  <span className="title">{t("EditPersonalInformation")}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {i18n.language === "ar" && (
        <div dir='rtl'>
          <div className="navigation">
            <ul>
              <li>
                <a href="/home">
                  <span className="icon">
                    <Home />
                  </span>
                  <span className="title">{t('Thebes Academy')}</span>
                </a>
              </li>

              <li>
                <Link to="/profile/person" >

                  <span className="icon">
                    <Group />
                  </span>
                  <span className="title">{t("personalInformation")}</span>

                </Link>
              </li>

              <li>
                <Link to='/profile/repassword'>
                  <span className="icon">
                    <Message />
                  </span>
                  <span className="title"> {t("changePassword")}</span>
                </Link>
              </li>

              <li>
                <Link to='/profile/updateperson'>
                  <span className="icon">
                    <Settings />
                  </span>
                  <span className="title">{t("EditPersonalInformation")}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
