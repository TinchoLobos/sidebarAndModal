import React from 'react'
import './globo.css'
import { Link } from "react-router-dom";
import {FaArrowAltCircleLeft,FaWhatsapp} from 'react-icons/fa'

const Helicoptero = () => {
  return (
       <div>
      <Link to='/github.io-sidebarAndModal.git'>
        <button className='BackMenu'><FaArrowAltCircleLeft/></button>
      </Link>
      <a href="https://api.whatsapp.com/send?phone=5492616520768&text=Hola, Nececito mas informacion!">
                      <div className="OneWhatsapp">
                       <FaWhatsapp style={{color:"green",fontSize:"4rem"}}/>
                     </div>
                  </a>
      <h3 style={{textAlign:"center",marginTop:"2rem"}}>VUELOS EN HELICOPTERO</h3>
      </div>
  )
}

export default Helicoptero