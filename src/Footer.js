import React from 'react'
import './index.css'
import {FaFacebookSquare,FaInstagram} from 'react-icons/fa'
import {useGlobalContext } from './context'

const Footer = () => {
   const {Lenguage} = useGlobalContext();
return (
   <section className="footer">
      <div className="section-center">
         <div className="social-icons">
            <a href="https://www.instagram.com/aeromendoza/?hl=es-la" className="social-icon mediaFooter">
              <i className="fab fa-facebook"> <FaInstagram/></i>
            </a>
            <a href="https://www.facebook.com/AeroclubMendoza/" className="social-icon mediaFooter">
              <i className='fab fa-instagram'><FaFacebookSquare/></i> 
            </a>
         </div>
         <h4 className="footer-text">
            &copy; <span></span> {Lenguage?"Desarrollador":"English text"} <span className="Yo">Lobos Martin <span></span>|</span> <span
               id="date">2022</span><span> VOLA POR MENDOZA |
            </span>
            {Lenguage?"Todos los derechos reservados.":"English text"}
         </h4>
      </div>
   </section>
)
}

export default Footer