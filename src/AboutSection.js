import React from 'react'
import img from "./Images/nosotros.jpg"
import './AboutSection.css'
import { useState } from 'react'
import {useGlobalContext } from './context'

const AboutSection = () => {
const {Lenguage} = useGlobalContext();

  return (
  <section>
      <div class="section-center clearfix">
         <article class="about-img">
            <div class="about-picture-container">
               <img src={img} alt="FONDOHANGAR2" className="about-picture"/>
            </div>
         </article>
         <article class="about-info">
            <div class="section-title">
               <h3>{Lenguage? "Nosotros":"Ours"}</h3>
               <h2>{Lenguage? "Vola por Mendoza":"Flight in Mendoza"}</h2>
            </div>
            <p class="about-text">{Lenguage?"Situado en la provincia Argentina de Mendoza, en la localidad de La Puntilla – Lujan de Cuyo, se encuentra unos de los Aeroclubes precursores de la aeronáutica argentina, el emblemáticoAeroclub Mendoza. Fundado oficialmente el 2 de Agosto de 1915.":"English text"}</p>
            <p class="about-text">{Lenguage?"Allá por el año 1908, un grupo de navegantes del cielo, entre los que se encontraban los hermanos Jorge y Eduardo Newbery, concretaban la fundación del Aeroclub Argentino, semilla de la aviación civil y militar Argentina. Transcurría 1911, cuando un puñado de mendocinos se reunía con visiones e inquietudes aeronáuticas, donde bien podemos decir que en ellos tuvo sus orígenes esta institución.":"Enlish text"}</p>
         </article>
      </div>
   </section>
  )
}
export default AboutSection