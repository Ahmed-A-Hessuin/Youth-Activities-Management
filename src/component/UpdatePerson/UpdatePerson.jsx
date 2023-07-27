import React, { useEffect, useState } from 'react'
import style from '../Person/Person.module.css'
import stylex from './UpdatePerson.module.css'
import PersonSideBar from '../PersonSideBar/PersonSideBar'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { headers } from '../../locale/Header.api'
// import { headers } from '../../locale/Header.api'
import { Image, Transformation } from 'cloudinary-react';
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
// <===========Icons=============>
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';


export default function Person() {
  let [error, setError] = useState("");
  const [token, setToken] = useState('');
  const [person, setPerson] = useState('');
  const [updated, setUpdated] = useState('');
  const [t, i18n] = useTranslation()

  const [values, setValues] = useState({
    name: '', email: '', code: '', phone: '', Specialization: '', image: ''
  })

  // {{URL}}/students/myProfile

  const getDataProfile = async () => {
    const { data } = await axios.get(`https://actitvityv1.onrender.com/students/myProfile`, headers());

    if (data) {
      setPerson(data.Student);

      console.log(data.Student);
      setValues({
        ...values, name: data.Student.fullName, email: data.Student.email, code: data.Student.code,
        phone: data.Student.phone, Specialization: data.Student.Specialization, image: data.Student.image

      })
    } else {
      setPerson([]);

    }
  };

  const handalUpdate = (e) => {
    e.preventDefault()
    const file = e.target.files;
    const formData = new FormData();
    formData.append('file', file);
    console.log(file);
    formData.append('upload_preset', 'YOUR_UPLOAD_PRESET_NAME');
    axios.put(`https://actitvityv1.onrender.com/students/myProfile/update`, values, headers())
      .then(res => {

        console.log(res.data.message);
        setUpdated(res.data.message)
        setImageUrl(res.data.secure_url);
        console.log('updated');
      })
      .catch(err => console.log(err))

  };
  const [imageUrl, setImageUrl] = useState('');

  // function handleImageUpload(event) {
  //   event.preventDefault()
  //   const file = event.target.files;
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   console.log(file[0]);
  //   formData.append('upload_preset', 'YOUR_UPLOAD_PRESET_NAME');

  //   axios.put(
  //     `https://actitvityv1.onrender.com/students/myProfile/update`,formData ,headers())
  //     .then(response => {
  //     console.log(response.data);
  //     console.log('response');
  //     setImageUrl(response.data.secure_url);
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }






  const sendImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('https://actitvityv1.onrender.com/students/myProfile/update', formData, headers());

      console.log(response.data);
    } catch (error) {
      console.error(error);
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
          <div className={`${style.sidebar} col-md-12 container`} dir="ltr">
            <div className={`${style.form_block}  mx-auto`} >
              <Row className={`${style.row}`} style={{ margin: "0px 20% 0px 0%" }} >
                <Col sm="8">
                  {updated ? (
                    <div
                      className={`${style.errorMsg} alert alert-primary  mt-5 mb-3 m-auto`}
                    >
                      {updated}
                    </div>
                  ) : (
                    ""
                  )}
                  <form onSubmit={handalUpdate}>
                    {/* <input type="file" name="file" onChange={handelImage} /> */}
                    {/* <button onClick={handelApi}>submit</button> */}
                    {/* <div> */}
                    <label htmlFor="image-upload" style={{ marginLeft: "10px" }}>Choose image:</label>
                    <input type="file" id="image-upload" />
                    {imageUrl && (
                      <Image publicId={imageUrl} src={values.image}>
                        <Transformation width="500" height="500" crop="fill" />
                      </Image>
                    )}
                    {/* </div> */}
                    <img className={`${style.image}`} src={values.image} alt="" />
                    <div className={`${style.dd} input-gp my-3`} dir="ltr">
                      <DriveFileRenameOutlineOutlinedIcon />
                      <label className={style.label} htmlFor="first_name" style={{ marginLeft: "10px" }}>
                        {t("Name")}{" "}
                      </label>
                      <input
                        className={`${style.input} form-control`}
                        placeholder={values.name}
                        type="text"
                        name="fullName"
                        dir="ltr"
                        onChange={(e) =>
                          setValues({ ...values, fullName: e.target.value })
                        }
                      />
                    </div>

                    <div className={`${style.dd} input-gp my-3`} dir="ltr">
                      <LocalPhoneOutlinedIcon />
                      <label className={style.label} htmlFor="age" style={{ marginLeft: "10px" }} >
                        {t("phone")}{" "}
                      </label>
                      <input
                        className={`${style.input} form-control`}
                        placeholder={values.phone}
                        type="number"
                        name="phone"
                        dir="ltr"
                        onChange={(e) =>
                          setValues({ ...values, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className={`${style.dd} input-gp my-3`} dir="ltr">
                      <GradeOutlinedIcon />
                      <label className={style.label} htmlFor="age" style={{ marginLeft: "10px" }}>
                        {" "}
                        {t("Specialization")}
                      </label>
                      <input
                        className={`${style.input} form-control`}
                        placeholder={values.Specialization}
                        type="text"
                        name="Specialization"
                        dir="ltr"
                        onChange={(e) =>
                          setValues({ ...values, Specialization: e.target.value })
                        }
                      />
                    </div>

                    <Button
                      variant="contained"
                      sx={{
                        background: '#2a2185',
                        color: "white",
                        margin: "10px 0 0 10px ",
                        fontSize: "16px",
                      }}
                    >
                      {t("Update")}
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
                          {t('personalInformation')}
                          {/* المعلومات الشخصيه */}
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
      {i18n.language === "ar" && (
        <div>
          <PersonSideBar />
          <div className={`${style.sidebar} col-md-12 container  `}>
            <div className={`${style.form_block}  mx-auto`}>
              <Row className={`${style.row}`} >
                <Col sm="8">
                  {updated ? (
                    <div
                      className={`${style.errorMsg} alert alert-primary  mt-5 mb-3 m-auto`}
                    >
                      {updated}
                    </div>
                  ) : (
                    ""
                  )}
                  <form onSubmit={handalUpdate}>
                    {/* <input type="file" name="file" onChange={handelImage} /> */}
                    {/* <button onClick={handelApi}>submit</button> */}
                    {/* <div> */}
                    <label htmlFor="image-upload">Choose image:</label>
                    <input type="file" id="image-upload" />
                    {imageUrl && (
                      <Image publicId={imageUrl} src={values.image}>
                        <Transformation width="500" height="500" crop="fill" />
                      </Image>
                    )}
                    {/* </div> */}
                    <img className={`${style.image}`} src={values.image} alt="" />
                    <div className={`${style.dd} input-gp my-3`}>
                      <DriveFileRenameOutlineOutlinedIcon />
                      <label className={style.label} htmlFor="first_name">
                        {t("Name")}{" "}
                      </label>
                      <input
                        className={`${style.input} form-control`}
                        placeholder={values.name}
                        type="text"
                        name="fullName"
                        dir="ltr"
                        onChange={(e) =>
                          setValues({ ...values, fullName: e.target.value })
                        }
                      />
                    </div>

                    <div className={`${style.dd} input-gp my-3`}>
                      <LocalPhoneOutlinedIcon />
                      <label className={style.label} htmlFor="age">
                        {t("phone")}{" "}
                      </label>
                      <input
                        className={`${style.input} form-control`}
                        placeholder={values.phone}
                        type="number"
                        name="phone"
                        dir="ltr"
                        onChange={(e) =>
                          setValues({ ...values, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className={`${style.dd} input-gp my-3`}>
                      <label className={style.label} htmlFor="age">
                        {" "}
                        {t("Specialization")}
                      </label>
                      <input
                        className={`${style.input} form-control`}
                        placeholder={values.Specialization}
                        type="text"
                        name="Specialization"
                        dir="ltr"
                        onChange={(e) =>
                          setValues({ ...values, Specialization: e.target.value })
                        }
                      />
                    </div>

                    <Button
                      variant="contained"
                      sx={{
                        background: '#2a2185',
                        color: "white",
                        margin: "10px 95px",
                        fontSize: "16px",
                      }}
                    >
                      {t("Update")}
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
                          {t('personalInformation')}
                          {/* المعلومات الشخصيه */}
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
