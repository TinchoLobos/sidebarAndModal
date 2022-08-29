import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Lenguage from './Lenguage'
import About from './AboutSection'
import SkillSection from './SkillSection'
import NuestrosServicios from './NuestrsosServicios'
import VuelosAvion from './VuelosAvion'
import Contact from './Contact'
import Footer from './Footer'
import AppAcordion from './AppAcordion'
import Carousele from './Carousele'
import Us from './Us'
import {useGlobalContext } from './context'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Avioneta from './pages/Avioneta'
import Globo from './pages/Globo'
import Helicoptero from './pages/Helicoptero'
import Paracaidismo from './pages/Paracaidismo'
import Parapente from './pages/Parapente'
import Planeador from './pages/Planeador'

const Home = () => {
  return (<div>
   <Lenguage/>
      <Modal/>    
      <Sidebar/>
      <SkillSection/>
      <About/>
      {/* <Us/> */}
      {/* <NuestrosServicios/> */}
      <VuelosAvion/>
      {/* <Carousele/> */}
      <AppAcordion/>
       <Contact/>
      <Footer/>
    </div>
  )
}

export default Home