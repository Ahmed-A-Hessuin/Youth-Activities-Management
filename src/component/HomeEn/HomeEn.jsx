import React, { useEffect, useState } from "react";
import style from "./HomeEn.module.css";
import { Link, useNavigate } from "react-router-dom";
import NewFooter from "../Footer/NewFooter";
import About from "../About/About";
import axios from "axios";
// import NewFooter from '../NewFooter/NewFooter';
import { useTranslation } from "react-i18next";
import ChatBoot from "../ChatBoot/ChatBoot";
import { Col, Row } from "react-bootstrap";
import "./generalcard.css"
import { Button } from "@mui/material";
export default function HomeEn(props) {
  let [data, setData] = useState([]);
  let [date, setDate] = useState([]);
  let [category, setCategory] = useState([]);
  const { t, i18n } = useTranslation();

  


  useEffect(() => {
    fetch("https://actitvityv1.onrender.com/?lang=en")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.result[0]);
        setData(result.result[0]);
      });
  }, []);
 



  const getCategory = async (_id) => {
    const cat = await axios.get(`https://actitvityv1.onrender.com/categories/?lang=en`);

    if (cat.data) {
      setCategory(cat.data.result);
      // console.log(cat.data.result)
      const createdAt = data.createdAt;
      const date = new Date(createdAt);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      // console.log(`تم إنشاء العنصر في ${day}/${month}/${year}.`);
      // setDate(`${day}/${month}/${year}`);
    } else {
      setCategory([]);
    }
  };

  useEffect(() => {
    getCategory("_id");

  }, []);

  let navigate = useNavigate();
  function goToDetails(_id) {
    // alert(_id)
    navigate({ pathname: `/detailsEn`, search: `?_id=${_id}` });
  }

  return (
    <section className={`${style.body} part mt-0 mb-5 `}>
      <About />

      <div className={`${style.home} home `}>
        {/* <h3 className={`${style.h3} h3 `}> {t('title')}</h3> */}
      </div>
      <div className={`${style.content} container`}>
        <h2 className={`${style.h2}`}> {data.name_en}</h2>
        {/* <h2 className={`${style.h2}`}> {dataEn.name_en}</h2> */}
        <br />
      </div>
      <div className={style.line}></div>

      <div className={`${style.days} container`}>
        <span>
          {/* <p>
      <i className="fa-regular fa-calendar-days mx-3"></i>
        {data?.createdAt}</p> */}
          <p>
            <i className="fa-regular fa-calendar-days mx-4"></i>
            {date}
          </p>
        </span>
        <p>{data?.description_en}</p>
        {/* <p>{dataEn?.description_en}</p> */}
      </div>
      <div className="container">
        <Row>
          {category.map((cat, indx) => (
            <Col xs={12} md={6} lg={4} key={indx}>
              <div
                className="Cards__wrapper"
                onClick={() => goToDetails(cat._id)}
              >
                <div className="Card__wrapper">
                  <img className="Card__img" src={cat.coverImage} alt="" />
                  <Button
                    onClick={() => goToDetails(cat._id)}
                    key={cat._id}
                    color="primary"
                    variant="contained"
                    sx={{
                      fontWeight:"bold",
                      fontSize: "1rem",
                      height: "3rem",
                      cursor: "pointer",
                    }}
                  >
                    {cat.title_en}
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <ChatBoot />

      <NewFooter />
    </section>
  );
}
