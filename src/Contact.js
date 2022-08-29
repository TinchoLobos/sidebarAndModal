import React from 'react'
import './index.css'
import {FaWhatsapp} from 'react-icons/fa'
import {FaPhoneSquare} from 'react-icons/fa'
import gps from './Images/ubicacionMaps.jpg'
import {useGlobalContext } from './context'

const Contact = () => {
   const {Lenguage} = useGlobalContext();
  return (

<div id='Contacto' className='contactMain'>
   <h3 className='contactoTitle'>{Lenguage?"CONTACTANOS":"English text"}</h3>

 <section className="contact">
      <div className="section-center clearfix">
         <article className="contact-info">
            <div className="contact-item">
               <h4 className="contact-title">
                  <span className="contact-icon">
                     <i className="fas fa-location-arrow"></i>
                  </span>
                  {Lenguage?"DIRECCION":"English text"}
               </h4>
               <h4 className="contact-text" id="direccion">Los Cerrillos S/N - Ruta Panamericana KM 7,5
                  La Puntilla - Luján de Cuyo</h4>
            </div>
            <div className="contact-item">
               <h4 className="contact-title">
                  <span className="contact-icon">
                     <i className="fas fa-envelope"></i>
                  </span>
                  {Lenguage?"CORREO ELECTRONICO":"English text"}
               </h4>
               <h4 className="">info@aeroclubmendoza.com.ar</h4>
            </div>
            <div className="contact-item">
               <h4 className="contact-title">
                  <span className="contact-icon">
                     <i className="fab fa-whatsapp-square"></i>
                  </span>
                  {Lenguage?"TELEFONO / WHATSAPP":"English text"}
               </h4>
               <h4 className="contact-text">+549-2616520768</h4>
            </div>
            <div className="contact-item">
               <h4 className="contact-title">
                  <span className="contact-icon">
                     <i className="fas fa-clock"></i>
                  </span>
                  {Lenguage?"HORARIOS":"English text"}
               </h4>
               <h4 className="contact-text"> {Lenguage?"TODOS LOS DIAS":"English text"} <br /> <br />  10:00hs a 13:00hs <br /> 17:00 a 20:00hs 
               </h4>
            </div>
         </article>
<article className='contact-form id=contacto'>




<div>
<h3>{Lenguage?"Donde encontrarnos":"English text"}</h3>
<img src={gps} alt="gps" />
</div>
<a href="https://api.whatsapp.com/send?phone=5492616520768&text=Hola, Nececito mas informacion!">
                      <div className="wasapi">
                      {Lenguage?"Envianos un Whatsapp Click Aqui":"English text"} <FaWhatsapp className='logoContact'/>
                     </div>
                  </a>
   <div  className='number'>
      <div className="wasapi2">
      {Lenguage?"Llamanos al":"English text"} +549-2616520768 <FaPhoneSquare className='logoContact'/>
         </div>
      </div>



         {/* <article className="contact-form" id="contacto">
            
            <h3>CONTACTANOS</h3>

            <form action="https://formspree.io/f/mayaowpy" method="POST">

              <div className="form-group">
                  <input type="text" placeholder="Tu Nombre" className="form-control" name="Tu nombre">
                  <input type="email" placeholder="Tu Email" className="form-control" name="Tu email">
                  <textarea name="message" id="" cols="30" rows="5" placeholder="Dejanos tu mensaje"
                     className="form-control"></textarea>
            </div>

               <button type="submit" className="submit-btn btn">ENVIAR MENSAJE</button>
               <div className="whatsapp">
                  <a href="https://api.whatsapp.com/send?phone=5492616520768&text=Hola, Nececito mas informacion!">
                      <div className="wasapi">
                      Envianos un Whatsapp Click Aqui <i className="fab fa-whatsapp"></i>
                     </div>
                  </a>
               </div>
         </article>
         </form> */}

         </article>

      </div>
   </section>
<br />
    </div>
  )
}

export default Contact