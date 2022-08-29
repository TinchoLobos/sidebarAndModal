import React from 'react'
import './index.css'
import {FaBeer,FaMedal,FaSitemap,FaSlideshare,FaPlaneDeparture} from 'react-icons/fa';
import {useGlobalContext } from './context'

const SkillSection = () => {
const {Lenguage} = useGlobalContext();
  return (
  <section className="skills">
      <article className="skiller">
         <span className="skill-icon">
          <FaPlaneDeparture/> 
         </span>
         <h4 className="skill-title">{Lenguage?"EXPERIENCIA":"Englis text"}</h4>
         <p className="skill-text">
            {Lenguage?"Con mas de 10 años de experiencia somos de las academias mas antiguas de Mza":"English text"}
         </p>
      </article>
   
      <article className="skiller">
         <span className="skill-icon">
            <FaMedal/>
         </span>
         <h4 className="skill-title">{Lenguage?"PROFESORES":"English text"}</h4>
         <p className="skill-text">
            {Lenguage?"Aprende de los profesores mas experimentados":"English text"}
         </p>
      </article>
 
      <article className="skiller">
         <span className="skill-icon">
            <FaSitemap/>
         </span>
         <h4 className="skill-title">{Lenguage?"UBICACION":"Englis text"}</h4>
         <p className="skill-text">
            {Lenguage?"Estamos ubicados en pleno centro de Mendoza":"English text"}  
         </p>
      </article>
 
      <article className="skiller">
         <span className="skill-icon">
            <FaBeer/>
         </span>
         <h4 className="skill-title">{Lenguage?"CANTINA":"Englis text"}</h4>
         <p className="skill-text">{Lenguage?"Aprovecha para comer o tomar algo en nuestras instalaciones.":"English text"}</p>
      </article>
   </section>
 
  )
}

export default SkillSection