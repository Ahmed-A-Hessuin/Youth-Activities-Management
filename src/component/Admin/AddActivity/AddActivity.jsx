import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useState } from 'react'
import avatar from "../../../images/cultural/cultural1.jpg";
import axios from 'axios';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import style from './AddActivity.module.css';


const AddActivity = (props) => {
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
            setSelectedFile(event.target.files[0])
        }
    }

      //save data in database
    //   const handelSubmit = async (event) => {
    //     event.preventDefault();
    //     if (name === "" || selectedFile === null) {
    //         console.log('من فضلك اكمل البيانات')
    //         return;
    //     }
    //     const formData = new FormData();
    //     formData.append("name", name)
    //     formData.append("image", selectedFile)
    //     setLoading(true)
    //     setIsPress(true)
        
    //     setLoading(false)
    // }
    let [user,setUser]=useState({
        tittle:"",description:"",
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
            await axios.post("https://actitvityv1.onrender.com/activities",user)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
              setError(error.response.data.message);
            //   alert(error.response.data.message)
      
            });
      
          }


    return (
        <>
        <AdminSideBar/>
        <div className="contents">

<div className="container">
  <div className="row ">
    <div className="col-md-12">
    <div className={`${style.sidebar} col-md-8 container  `}>

      <div className={`${style.form_block}  mx-auto`}>
        {/* <div className={`${style.activity} col-md-8  container `}> */}
              {error?<div className={`w-50 mt-3 d-flex justify-content-center text-align-center alert alert-danger  mb-3 m-auto`}>{error}</div>:""}
         {errorsList.map((error,index)=><div key={index} className="alert alert-danger text-align-center">{error.message}</div>)}
      {errorMsg?<div className="alert alert-danger text-align-center">{errorMsg}</div>:""}
        <Row className="justify-content-start ">
                <Col sm="8">
                <div className="admin-content-text d-flex justify-content-center text-align-center pb-4 fa-2x mt-2">اضف نشاط جديد</div>
                    <div className="text-form pb-2">صوره النشاط</div>
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
                    <button  className="btn btn-success d-inline w-50 mt-5 ">حفظ </button>
      </form>
                    {/* <input onChange={onChangeName} value={name} type="text" className='form-control d-block mt-3 px-3 ' placeholder="اسم النشاط"  /> */}



                    {/* <input
                        onChange={onChangeName}
                        value={name}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف"
                    /> */}

                </Col>
            </Row>



        {/* //////////////////////////////////////////////////////// */}




            {/* <Row className="justify-content-end   ">
                <Col sm="8">
                <div className="admin-content-text pb-4 fa-2x mt-3">اضف نشاط جديد</div>
                    <div className="text-form pb-2">صوره النشاط</div>
                    <img src={avatar} alt="" height="100px" width="120px" />
        <input  type="text" className='form-control mt-3 ' placeholder="اسم النشاط"  />
                    <button className="btn btn-success d-inline w-50 mt-5 ">حفظ </button>
                </Col>
            </Row> */}
        </div>
        </div>
        {/* </div> */}
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default AddActivity
