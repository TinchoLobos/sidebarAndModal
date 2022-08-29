import React from 'react'
import './AboutSection.css'
import {FaPlaneDeparture} from 'react-icons/fa'
import info1 from "./Images/san martin (4).jpg"
import info2 from "./Images/san martin (6).jpg"
import info3 from "./Images/san martin (3).jpg"
import img1 from "./Images/piloto-comercial-3.jpg"
import img2 from "./Images/bangkok-private-jet-charter-by-gulfstream-g200-10.jpg"
import img3 from "./Images/planeSimulator.jpg"
import img4 from "./Images/HELITRONADOR.jpg"
import img5 from "./Images/avion.jpg"
import img6 from "./Images/parapente2.jpg"
import img7 from "./Images/paracaidismo.jpg"
import img8 from "./Images/hotAirBallon.jpg"
import img9 from "./Images/planeSimulator.jpg"
import img10 from "./Images/planeSimulator.jpg"
import img11 from "./Images/planeador.jpg"
import {useGlobalContext } from './context'
import { Link } from "react-router-dom";


import {
  FaFacebook,
  FaPlane,
  FaHome,
  FaInstagram,
  FaParachuteBox,
  FaFlagUsa,
  FaFlag,
  FaRegFlag,
  FaHelicopter,
} from 'react-icons/fa';
import{
  GiParachute,
  GiAirBalloon,
} from 'react-icons/gi';
import{
  GrContact
} from 'react-icons/gr';



const VuelosAvion = () => {
   const {Lenguage} = useGlobalContext();
  return (
    <section className="services" id="bautismos">
      <div className="section-title services-title">
         <h3>{Lenguage?"Todos":"English text"}</h3>
         <h2>{Lenguage?"Nuestros Servicios":"English text"}</h2>
      </div>
      <div className="section-center clearfix cardsGrid">
         <article className="service-card">
            <div className="service-img-container">
               <img src={img4} className="service-img" alt="PARQUESANMARTIN" id='Vuelos Helicoptero'/>
               <span className="service-icon">
                 <FaHelicopter/>
               </span>
            </div>
            <div className="service-info">
               <h4>{Lenguage?"VUELOS HELICOPTERO":"Englis text"}<br/> <br />{Lenguage?" Helitronador":"English text"}</h4>
               <p>{Lenguage?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam aperiam sequi eius quod. Non.":"English text"}</p>
                  <Link to='/sidebarAndModal/Helicoptero'>
             <button href="./index3.html" target="_blank"
                  className="btn service-btn">{Lenguage?" MAS INFO ":"MORE INFO"}</button>
                  </Link>
                  
            </div>
         </article>

         <article className="service-card">
            <div className="service-img-container">
               <img src={img5} className="service-img" alt="BODEGAS" id='Vuelos en Avioneta'/>
               <span className="service-icon">
                  <FaPlaneDeparture/>
               </span>
            </div>
            <div className="service-info">      
               <h4> {Lenguage?"VUELOS EN AVIONETA":"English text"} <br/> <br /> {Lenguage?"Aeroclub Mendoza":"English text"}</h4>
               <p>{Lenguage?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam aperiam sequi eius quod. Non.":"English text"}</p>
                 <Link to='/sidebarAndModal/Avioneta'>
               <button href="./bodegas.html" target="_blank"
                  className="btn service-btn"> {Lenguage?"MAS INFO":"English text"}</button>
                  </Link>
                  
            </div>
         </article>
         <article className="service-card">
            <div className="service-img-container">
               <img src={img6} className="service-img" alt="PARQUESANMARTIN" id='Vuelos en parapente'/>
               <span className="service-icon">
                  <FaParachuteBox/>
               </span>
            </div>
            <div className="service-info">
               <h4> {Lenguage?"VUELOS EN PARAPENTE":"English text"} <br/> <br /> {Lenguage?"Escuela Mendocina de parapente":"English text"}</h4>
               <p>{Lenguage?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam aperiam sequi eius quod. Non.":"English text"}</p>
               <Link to='/sidebarAndModal/Parapente'>
               <button href="./carrizal.html" target="_blank"
                  className="btn service-btn">
                  {Lenguage?"MAS INFO":"English text"}</button>
               </Link>

            </div>
         </article>
          <article className="service-card">
            <div className="service-img-container">
               <img src={img7} className="service-img" alt="PARQUESANMARTIN" id='Paracaidismo' />
               <span className="service-icon">
                  <GiParachute/>
               </span>
            </div>
            <div className="service-info">
               <h4> {Lenguage?"PARACAIDISMO":"English text"}<br/> <br /> {Lenguage?"Escuela de paracaidismo":"English text"}</h4>
               <p>{Lenguage?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam aperiam sequi eius quod. Non.":"English text"}</p>
               <Link to='/sidebarAndModal/Paracaidismo'>
               <button href="./carrizal.html" target="_blank"
                  className="btn service-btn">
                  {Lenguage?"MAS INFO":"English text"}</button>
               </Link>

            </div>
            
         </article>
          <article className="service-card">
            <div className="service-img-container">
               <img src={img8} className="service-img" alt="PARQUESANMARTIN" id='Vuelos Globo'/>
               <span className="service-icon">
                  <GiAirBalloon/>
               </span>
            </div>
            <div className="service-info">
               <h4> {Lenguage?"VUELOS EN GLOBO":"English text"} <br/> <br /> {Lenguage?"AirMza Company":"English text"}</h4>
               <p>{Lenguage?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam aperiam sequi eius quod. Non.":"English text"}</p>


               <Link to='/sidebarAndModal/Globo'>
       <button href="./carrizal.html" target="_blank"
                  className="btn service-btn">
                  {Lenguage?"MAS INFO":"English text"}</button>
               </Link>
               
            </div>
            
         </article>
          <article className="service-card">
            <div className="service-img-container">
               <img src={img11} className="service-img" alt="PARQUESANMARTIN" id='Vuelos en planeador'/>
               <span className="service-icon">
                  <FaPlaneDeparture/>
               </span>
            </div>
            <div className="service-info">
               <h4> {Lenguage?"VUELOS EN PLANEADOR":"English text"} <br/> <br /> {Lenguage?"Aeroclub San Martin":"English text"}</h4>
               <p>{Lenguage?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam aperiam sequi eius quod. Non.":"English text"}</p>

               <Link to='/sidebarAndModal/Planeador'>
               <button href="./carrizal.html" target="_blank"
                  className="btn service-btn">
                  {Lenguage?"MAS INFO":"English text"}</button>
               </Link>
            </div>
            
         </article>
      </div>
   </section>
  )
}

export default VuelosAvion