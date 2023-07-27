import React from 'react'
import style from './Footer.module.css'
// import counter from "../../images/counter-bg.jpg";

export default function Footer() {
  return (
    <>


    <div className={`${style.footer}  mt-5`}>
      <div className={style.layer} >
        <div className={`${style.info} container mb-5`}>
          <div className={`${style.address} col-md-4`}>
            <h4>العنوان</h4>
            <p>أول كورنيش النيل - خلف مستشفى النيل بدراوي ، القاهرة ، مصر</p>
          
            </div>
            <div className={`${style.address} col-md-4`}>
              <h4>رقم التليفون</h4>     
            <p>0552151021 - 21502051303</p>
            </div>
            <div className={`${style.address} col-md-4`}>
            <h4>البريد الإلكتروني</h4>
            <p>أرسل استفسارك.</p>
            </div>
          
           
        </div>

        <div className={`${style.links} container  mt-5`} >
        <div className={`${style.text} `}>
            <h5>روابط تهمك</h5>
            <h6 className={style.line}>
              <hr/>
            </h6>
            <div>
              <ul>
                <li>
                  <i className="fa-solid fa-angle-left"></i>
                  خريطة الموقع
                </li>
                <li>
                  <i className="fa-solid fa-angle-left"></i>
                  الجامعات المصرية       
                 </li>
                <li>
                  <i className="fa-solid fa-angle-left"></i>
                  بنك المعرفة المصري      
                 </li>
                <li>
                  <i className="fa-solid fa-angle-left"></i>
                  بوابة الحكومة المصرية      
                 </li>
                <li>
                  <i className="fa-solid fa-angle-left"></i>
                  ... المزيد       
                 </li>
              </ul>
            </div>
            
          </div>
          <div className={`${style.text} `}>
            <h5>الكليات و البرامج النوعية</h5>
            <h6 className={style.line}>
              <hr/>
            </h6>
            <ul>
              <li>
                  <i className="fa-solid fa-angle-left"></i>
                  كليات الجامعة 
              </li> 
              <li>
                  <i className="fa-solid fa-angle-left"></i>
                  برامج المرحلة الجامعية الأولى
              </li>
              <li>
                  <i className="fa-solid fa-angle-left"></i>
                  برامج الدراسات العليا
              </li>
            </ul>
            
          </div>
          
          <div className={`${style.text} `}>
            <h5>النشرة الإخبارية</h5>
            <h6 className={style.line}>
              <hr/>
            </h6>
            <p>سجل ليصلك أحدث الأخبار</p>
            <form className={style.form} action="">
              <input type="email" name='email' className='form-input' placeholder='البريد الالكترونى' />
              <button  type='submit' className={`${style.btn} form-button`}>
              <i className="fa-sharp fa-solid fa-arrow-left"></i>
              </button>
           </form>
           <a href="/">رايك يهمنا</a>
          </div>
        </div>





        <div className={`${style.share} mt-5  container`}>
            <a className="fa-brands fa-youtube"></a>
            <a className="fa-brands fa-telegram"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="https://www.linkedin.com/school/thebes-academy/" className="fab fa-linkedin"></a>
            <a href="https://www.facebook.com/ThebesInstitutes/" className="fab fa-facebook-f"></a>
        </div>
<hr />

    <div className={style.credit}>created by Developer <span>Hamza Ramadan</span> | all rights reserved 2023</div>

    </div>

    </div>
    </>
  )
}
