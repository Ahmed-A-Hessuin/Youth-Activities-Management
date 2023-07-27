import React, { useEffect, useState, useTransition } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import style from "./Details.module.css";
import { Col, Row } from "react-bootstrap";
import "./generalcard.css";
import NewFooter from "../Footer/NewFooter";
export default function Details() {
  let [searchParams, setSearchParams] = useSearchParams();
  let currentId = searchParams.get("_id");

  // console.log(currentId);
  // console.log(searchParams);
  // alert(currentId)

  const [t, i18n] = useTransition();

  let [details, setDetails] = useState([]);
  let [Activity, setActivity] = useState([]);
  let [ActivityDetails, setActivityDetails] = useState([]);

  let [img, setImg] = useState([]);
  let [goal, setGoal] = useState([]);

  async function getDetails(_id) {
    let { data } = await axios.get(
      `https://actitvityv1.onrender.com/categories/${currentId}`
    );

    if (data) {
      setDetails(data.result);
      console.log(data.result);
      setImg(data.result.images);
      // console.log(img);
      // console.log(data.result.images);
    } else {
      setDetails([]);
    }
    const goals = data.result.goles_ar;
    const goal = goals.split("،");
    setGoal(goal);
    // console.log(goal);
  }

  const getActivity = async (_id) => {
    const response = await axios.get(
      `https://actitvityv1.onrender.com/categories/${currentId}/activities`
    );
    if (response.data) {
      setActivity(response.data.result);
      console.log(response.data.result);
    } else {
      setActivity([]);
    }
  };

  useEffect(() => {
    getDetails();
    getActivity("_id");
  }, []);

  let navigate = useNavigate();
  function goToDetails(catId) {
    // alert(catId)
    navigate({ pathname: `/detailsActivity`, search: `?_id=${catId}` });
  }
  return (
    <>
      <div className="container ">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className={`${style.slidImage} d-block w-100`}
                src={details.coverImage}
                alt=""
              />
              {/* <img className={`${style.coverImage} `}  src={data?.coverImage} alt="" /> */}
              <div className="carousel-caption d-none d-md-block"></div>
            </div>

            {img.map((ele) => (
              <div className="carousel-item">
                <img
                  src={ele.url}
                  className={`${style.slidImage} d-block w-100`}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              style={{ fillColor: "red" }}
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
          <div className={style.icons}>
            <div className={`${style.down}`}></div>
          </div>
        </div>
      </div>

      <div className="">
        <div className={`${style.content} container`}>
          <h2 className={`${style.h2}`}> {details.title_ar}</h2>
          <br />
        </div>
        <div className={style.line}></div>

        <div className={`${style.days} container`}>
          <span>
            <p>
              {details?.createdAt}
              <i className="fa-regular fa-calendar-days mx-3"></i>
            </p>
          </span>
          <p>{details?.description_ar}</p>
        </div>
        <div className={`${style.activity} container`}>
          <h4>اهداف النشاط :-</h4>
          <div className={`${style.details} container`}>
            {/* <p>{details?.goles_ar}</p> */}

            {goal.map((ele) => (
              <p>{ele}</p>
            ))}
            {/* {
              <p>
                {details.goles_ar.split("،").map((g) => (
                  <p>{g}</p>
                ))}
              </p>
            } */}
          </div>
        </div>
      </div>
      <div className="container">
        <Row>
          {Activity.map((response, indx) => (
            <Col xs={12} md={6} lg={4} key={indx}>
              <div className="Cards__wrapper">
                <div className="Card__wrapper">
                  <img
                    className="Card__img"
                    src={response.images[0].url}
                    alt=""
                  />

                  <div className="textdiv">
                    <div className="textdivinner">
                      {response.description_ar}

                      <button className="kimo">Read More</button>
                    </div>
                  </div>

                  <button
                    style={{
                      backgroundColor: '#eb1919',
                      color: "white",
                    }}
                    className="Card__button"
                    onClick={() => {
                      navigate({
                        pathname: `/detailsActivityEn`,
                        search: `?_id=${response._id}`,
                      });
                    }}
                  >
                    {response.title_ar}
                  </button>

                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <NewFooter />
    </>
  );
}
