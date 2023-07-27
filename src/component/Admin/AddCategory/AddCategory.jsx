import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useState } from 'react'
import avatar from "../../../images/cultural/cultural1.jpg";
import axios from 'axios';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import style from './AddCategory.module.css';
import { headers } from '../../../locale/Header.api';
import { InvalidTokenError } from 'jwt-decode';


const AddCategory = (props) => {
    const [img, setImg] = useState(avatar)
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isPress, setIsPress] = useState(false)
    let [errorMsg,setErrorMsg]=useState("");
    let [errorsList,setErrorsList]=useState([]);
  let [error,setError]=useState("");


    //to change name state
    const onChangeName = (event) => {
        event.persist();
        setName(event.target.value)
    }

    //when image change save it 
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.files[0]);

        }
    }


    let [user,setUser]=useState({
      photo:"",tittle:"",description:"",goles:""
        });
    
    function getFormValue(e){
        let myUser={...user};  // Deep Copy  
        myUser[e.target.name]=e.target.value;
        setUser(myUser);
    
        console.log(myUser);
      }

    // async function submitFromData(e){
    //     e.preventDefault(e);
    //       let {data}=await axios.post("https://actitvityv1.onrender.com/activities",user);
    //       alert('go to home')
    //       if(data.message=='success'){
    //         localStorage.setItem("userToken",data.token);
    //         props.saveUserData();
    
    //       }else{
    //        setErrorMsg(data.message)
  
    //       }
        
    //     setLoading(false);
    
    //     }

        async function handleSubmit(e) {
            e.preventDefault();
            await axios.post("https://actitvityv1.onrender.com/categories/",user,headers())
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
              setError(error.response.data.message);
              alert(error.response.data.message)
      
            });

            
          }
     
          

    return (
      <>
        <div style={{display:'flex',alignItems:'cneter',width:'100%'}}>
          
            <AdminSideBar />
        

          <div style={{flex:'8'}}>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-12">
                  <div className={`${style.sidebar} col-md-8 container  `}>
                    <div className={`${style.form_block}  mx-auto`}>
                      {error ? (
                        <div
                          className={`w-50  d-flex justify-content-center text-align-center alert alert-danger  mb-1 m-auto`}
                        >
                          {error}
                        </div>
                      ) : (
                        ""
                      )}
                      {errorsList.map((error, index) => (
                        <div
                          key={index}
                          className="alert alert-danger text-align-center"
                        >
                          {error.message}
                        </div>
                      ))}
                      {errorMsg ? (
                        <div className="alert alert-danger text-align-center">
                          {errorMsg}
                        </div>
                      ) : (
                        ""
                      )}

                      <Row className="justify-content-start ">
                        <Col sm="8">
                          <div className="admin-content-text d-flex justify-content-center text-align-center pb-4 fa-2x mt-2">
                            اضف فئه جديد
                          </div>
                          <div className="text-form pb-2">صوره الفئه</div>
                          <div>
                            <label for="upload-photo">
                              <img
                                src={img}
                                alt="fzx"
                                height="150px"
                                width="150px"
                                style={{ cursor: "pointer" }}
                                onChange={onImageChange}
                              />
                            </label>
                            <input
                              className="d-none"
                              type="file"
                              name="photo"
                              onChange={onImageChange}
                              id="upload-photo"
                            />
                          </div>
                          <form onSubmit={handleSubmit}>
                            <div className="input-gp my-3">
                              <label htmlFor="email">العنوان / tittle</label>
                              <input
                                onChange={getFormValue}
                                type="text"
                                className="form-control"
                                name="tittle"
                              />
                            </div>

                            <div className="input-gp my-3">
                              <label htmlFor="password">الوصف</label>
                              <input
                                onChange={getFormValue}
                                type="text"
                                className="form-control"
                                name="description"
                              />
                            </div>
                            <div className="input-gp my-3">
                              <label htmlFor="password">الاهداف</label>
                              <input
                                onChange={getFormValue}
                                type="text"
                                className="form-control"
                                name="goles"
                              />
                            </div>
                            <button
                              className={`${style.btn} btn  d-inline w-50 mt-3 mb-5 mx-auto`}
                            >
                              حفظ{" "}
                            </button>
                          </form>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////////// */}
        {/* <div className={`${style.activity} col-md-8  container `}>
              {error?<div className={`w-25 mt-3 d-flex text-align-center alert alert-danger  mb-3 m-auto`}>{error}</div>:""}
         {errorsList.map((error,index)=><div key={index} className="alert alert-danger text-align-center">{error.message}</div>)}
      {errorMsg?<div className="alert alert-danger text-align-center">{errorMsg}</div>:""}
        <Row className="justify-content-start ">
                <Col sm="8">
                <div className="admin-content-text pb-4 fa-2x mt-3">اضف فئه جديد</div>
                    <div className="text-form pb-2">صوره الفئه</div>
                    <div>
                        <label for="upload-photo">
                            <img
                                src={img}
                                alt="fzx"
                                height="150px"
                                width="150px"
                                style={{ cursor: "pointer" }}
                                
                            />
                        </label>
                        <input
                        className='d-none'
                            type="file"
                            name="photo"
                            onChange={onImageChange}
                            id="upload-photo"
                        />
                    </div>
                    <form onSubmit={handleSubmit} >
      <div className='input-gp my-3'>
        <label  htmlFor="email">العنوان  / tittle</label>
        <input onChange={getFormValue} type="text" className='form-control' name='tittle' />
      </div>

      <div className='input-gp my-3'>
        <label  htmlFor="password">الوصف</label>
        <input onChange={getFormValue} type="text" className='form-control' name='description' />
      </div>
      <div className='input-gp my-3'>
        <label  htmlFor="password">الاهداف</label>
        <input onChange={getFormValue} type="text" className='form-control' name='goles' />
      </div>
                    <button  className="btn btn-success d-inline w-50 mt-5 ">حفظ </button>
      </form>
                 

                </Col>
            </Row>



      
        </div> */}
      </>
    );
}

export default AddCategory
