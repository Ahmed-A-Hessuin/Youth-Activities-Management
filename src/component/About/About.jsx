import React, { useEffect, useState } from 'react'
import style from './About.module.css'
import axios from 'axios';
export default function About() {
  let [data, setData] = useState([]);
  let [img, setImg] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://actitvityv1.onrender.com/");
    if(response.data){
      setData(response.data.result[0]);
      setImg(response.data.result[0].images);
      // console.log(img);
      // console.log(response.data.result[0].images)
    }else {
      setData([])
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <>
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
          {/* <div className="carousel-item active">
      <img className={`${style.coverImage} `}  src={data?.coverImage} alt="" />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div> */}

          {img.map((ele, idx) => (
            <div className="carousel-item active" key={idx}>
              <img
                src={ele.url}
                className={`${style.image} d-block w-100`}
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
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
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
    </>
  );
}
