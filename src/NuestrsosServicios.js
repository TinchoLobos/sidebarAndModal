import React from 'react'
import img1 from "./Images/piloto-comercial-3.jpg"
import img2 from "./Images/bangkok-private-jet-charter-by-gulfstream-g200-10.jpg"
import img3 from "./Images/planeSimulator.jpg"
import img4 from "./Images/HELITRONADOR.jpg"
import img5 from "./Images/planeSimulator.jpg"
import img6 from "./Images/planeSimulator.jpg"
import {useGlobalContext } from './context'

const NuestrosServicios = () => {
   const {Lenguage} = useGlobalContext();
  return (
    <section className="products" id="servicios">
      <div className="section-center clearfix">
         <article className="product-info">
            <div className="section-title">
               <h3>Nuestros</h3>
               <h2>Servicios</h2>
            </div>
            <p className="product-text">Dentro de las actividades que se llevan a cabo se encuetra la ESCUELA DE PILOTOS
               que actualmente sigue formando, entrenando y creando aviadores
               profesionales y deportivos. Tambien contamos con VUELOS BAUTISMOS para disfrutar Mendoza desde el cielo. Vení a enrtenarte en nuestro simulador de vuelo.</p>
         </article>
         <article className="product-inventory clearfix">
            <div className="product">
               <img src={img1} alt="PILOTO PRIVADO AVION" className="product-img" id='helicoptero' />
               <h4 id="piloto" className="product-title">VUELO EN AVION</h4>
               <button href="./index2.html" target="_blank" className="btn"> MAS INFO</button>
            </div>
            <div className="product">
               <img src={img2} alt="PILOTO PRIVADO AVION"
                  className="product-img" id='' />
               <h4 className="product-title">VUELO PARAPENTE </h4>
               <button href="#bautismos" className="btn scroll-link"> MAS INFO</button>
            </div>
            <div className="product">
               <img src={img3} alt="PILOTO PRIVADO AVION" className="product-img" />
               <h4 className="product-title">VUELO EN GLOBO </h4>
               <button href="./AEROCLUB MENDOZA SIMULADOR.pdf" className="btn" target="_blank"> MAS INFO</button>
            </div>
            <div className="product">
               <img src={img4} alt="PILOTO PRIVADO AVION" className="product-img" />
               <h4 id="piloto" className="product-title">VUELO EN HELICOPTERO</h4>
               <button href="./index2.html" target="_blank" className="btn"> MAS INFO</button>
            </div>
            <div className="product">
               <img src={img2} alt="PILOTO PRIVADO AVION"
                  className="product-img" />
               <h4 className="product-title">PARACAIDISMO </h4>
               <button href="#bautismos" className="btn scroll-link"> MAS INFO</button>
            </div>
  
         </article>
      </div>
   </section>
  )
}

export default NuestrosServicios