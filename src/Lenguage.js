import React from 'react'
import './index.css'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext } from './context'
import LOGOPNG from './Images/LOGOPNGpng.png'
import spain from './Images/spain.png'
import eeuu from './Images/eeuu.png'
import dualflag from './Images/dualflag.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from "react-scroll"
import { FaWhatsapp } from 'react-icons/fa'





const Lenguage = () => {
  
const {openSideBar,openModal,ChangeLenguage,Lenguage} = useGlobalContext();
  return <main className='mainBackground' id='Inicio'>
  <button className='sidebar-toggle' onClick={openSideBar}>
    <FaBars/>
  </button>

<button onClick={ChangeLenguage} className='EnglishFlag'> <img src={dualflag} alt="spain" /> </button>
<a href="https://api.whatsapp.com/send?phone=5492616520768&text=Hola, Nececito mas informacion!">
                      <div className="OneWhatsapp">
                    <FaWhatsapp style={{color:"#25d366",fontSize:"4rem"}}/>
                    </div>
                  </a>

   <Link to='contact' smooth={true} duration={1000} ><img className='mainLogo' src={LOGOPNG} alt="img" /></Link>
  </main>
}

export default Lenguage
