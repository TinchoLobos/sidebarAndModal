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
import Home from './Home'

function App() {
  return (<BrowserRouter>
      <Routes>
        <Route path="/github.io-sidebarAndModal.git" element={<Home/>} />
        <Route path="/sidebarAndModal/Globo" element={<Globo/>} />
        <Route path="/sidebarAndModal/Avioneta" element={<Avioneta/>} />
        <Route path="/sidebarAndModal/Helicoptero" element={<Helicoptero/>} />
        <Route path="/sidebarAndModal/Paracaidismo" element={<Paracaidismo/>} />
        <Route path="/sidebarAndModal/Parapente" element={<Parapente/>} />
        <Route path="/sidebarAndModal/Planeador" element={<Planeador/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
