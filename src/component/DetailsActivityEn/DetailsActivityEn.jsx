import axios from "axios";
import style from "./DetailsActivityEn.module.css";
import React, { useEffect, useState, useTransition } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ReactStars from 'react-rating-stars-component';
import { headers } from "../../locale/Header.api";
import ReactRating from 'react-rating';
import Alert from "react-bootstrap/Alert";
import NewFooter from "../Footer/NewFooter";


export default function DetailsActivityEn({props}) {
  
  let [searchParams, setSearchParams] = useSearchParams();
  let [date, setDate] = useState([]);
  let currentId = searchParams.get("_id");
  const [rating, setRating] = useState(0);
  let [errorMsg,setErrorMsg]=useState("");
  let [error,setError]=useState("");
  const [token, setToken] = useState('');
  const [success, setSuccess] = useState('');
  const [cancel, setCancel] = useState('');
  const [isEnrolled, setIsEnrolled] = useState(false);


  const [activity, setActivity] = useState('');

  // console.log(currentId);

  let [detailsActivity, setDetailsActivity] = useState([]);

  let [img, setImg] = useState([]);



// { <ReactStars
//   count={5}
//   onChange={(newRating) => setRating(newRating)}
// /> }

  async function getDetailsActivity() {
    
    let  {data}  = await axios.get(
      `https://actitvityv1.onrender.com/categories/6407a4aa04c364c71a43260b/activities/${currentId}/?lang=en`
    );

    if (data) {
      setDetailsActivity(data.result);
      setImg(data.result.images);
   

      const createdAt = data.result.createdAt;
      // console.log(data.result.createdAt);
      const date = new Date(createdAt);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      
      // console.log(`تم إنشاء العنصر في ${day}/${month}/${year}.`);
      setDate(`${day}/${month}/${year} `);

    } else {
      setDetailsActivity([]);
    }
  }

  
  
  let header={token:localStorage.getItem('token')}
 


// to handel submit 

async function handleSubmit(e) {
  e.preventDefault();
  await axios.get(`https://actitvityv1.onrender.com/categories/6407a4aa04c364c71a43260b/activities/${currentId}/enroll/activity`,headers())
  .then((response) => {
    const retrievedToken = token;

     setToken(retrievedToken);
    // console.log(token);
    // console.log(response);
    console.log(response.data.message);
    const x=response.data.message
    setSuccess(x);
    // console.log(success);
    setIsEnrolled(true);
  })
  .catch((error) => {
    console.log(error);
    setError(error.response.data.message);
  });
}



// to handel cancel 
async function handelCancel (e) {
  e.preventDefault();
  await axios.get(`https://actitvityv1.onrender.com/categories/6407a4aa04c364c71a43260b/activities/${currentId}/enroll/cancel`,headers())
  .then((response) => {
    const retrievedToken = token;
     setToken(retrievedToken);

    console.log(response.data.message);
    const x=response.data.message
    setCancel(x);
    setIsEnrolled(false); 
  })
  .catch((error) => {
    console.log(error);
    setError(error.response.data.message);
  });
}

// to handel Rating
<ReactRating
  initialRating={0}
  emptySymbol={<i className="far fa-star"></i>}
  fullSymbol={<i className="fas fa-star"></i>}
/>
async function handleRatingChange(value) {
  console.log(`تم تحديد التقييم: ${value}`);
  await axios.post(`https://actitvityv1.onrender.com/categories/6407a4aa04c364c71a43260b/activities/${currentId}/rate`, { rate: value },headers())
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        const rating=response.data.message
        setRating(rating);
        console.log(rating);
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg(error.response.data.message);
        
        // alert(error.response.data.message)
      });
}


<ReactRating
  initialRating={0}
  emptySymbol={<i className="far fa-star"></i>}
  fullSymbol={<i className="fas fa-star"></i>}
  onChange={handleRatingChange}
/>

  useEffect(() => {
    getDetailsActivity();
  });

  return (
      <>
         <div className="container mt-0">
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
                src={detailsActivity.coverImage}
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
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <div className={style.icons}>
            <div className={`${style.down}`}></div>
          </div>
        </div>
      </div>

    <div className="container mt-5 mb-5">
      
       {/* <button onClick={isEnrolled ? handelCancel : handleSubmit}>
      {isEnrolled ? 'Cancel' : 'Enroll'}
    </button> */}
    <div className={`${style.body} `}>

    <form >
      {error?<div className={`${style.errorMsg} alert alert-danger  mb-3 m-auto`}>{error}</div>:""}
      {success?<div className={`${style.errorMsg} alert alert-danger  mb-3 m-auto`}>{success}</div>:""}
      {cancel?<div className={`${style.errorMsg} alert alert-danger  mb-3 m-auto`}>{cancel}</div>:""}

      </form>
  
      <button  className={`${style.button} mx-auto btn `} onClick={isEnrolled ? handelCancel : handleSubmit}>
      {isEnrolled ? 'Cancel' : 'Enroll'}
    </button>

    {/* {success ?(<button className={`${style.button} mx-auto btn `} onClick={handleSubmit}>
    {'cancel'}
  </button>
    )
    :(
      <button className={`${style.button} mx-auto btn `} onClick={handelCancel}>
      {' enroll'}
    </button>
    ) 
    } */}


  

   
    {errorMsg?<div className={`${style.errorMsg} alert alert-danger  mt-3 m-auto`}>{errorMsg}</div>:""}
    {rating?<div className={`${style.errorMsg} alert alert-danger  mt-3 m-auto`}>{rating}</div>:""}
      
    <div className="my-3 mt-4 mx-5 fs-5" >
    <ReactRating
      size={100}
  initialRating={0}
  emptySymbol={<i className="far fa-star"></i>}
  fullSymbol={<i className="fas fa-star"></i>}
  onChange={handleRatingChange}
/>
    </div>

      <h2 className={style.h2}>{detailsActivity.title_en}</h2>
     <div className={style.line}></div>
     <p className={style.createdAt}>{date}</p>

      <p className={style.p}>{detailsActivity.description_en}</p>
    </div>
    </div>
<NewFooter/>
    </>
  );
}
