import React from 'react'
import logo from './logo.svg'
import './index.css'
import { FaTimes } from 'react-icons/fa'
import { social, links,idiomas} from './data'
import { AppContext, useGlobalContext } from './context'  
import {Link} from "react-scroll"




const Sidebar = () => {
const {Lenguage} = useGlobalContext();
const {isSidebarOpen,closeSideBar} = useGlobalContext();
console.log(isSidebarOpen);

// className: show-sidebar
  return <aside className={`${isSidebarOpen? `sidebar show-sidebar`: `sidebar`}`}>
    <div className="sidebar-header">
      {/* <img src={logo} alt="logo" className='logo' /> */}
      <h3 className='tituloSideBar'>{Lenguage?"VOLA POR MENDOZA":"FLIGTH THROW MENDOZA"}</h3>
      <button className='close-btn' onClick={closeSideBar}> <FaTimes/></button>
    </div>
    <div>
      <ul className='links'>
        {links.map((link) =>{
          const {id,url,text,text2,icon} = link
          return(
            <Link to={text} smooth={false} duration={1000} onClick={closeSideBar} >
            <li key={id}>
          <a href={url}>
            {icon}
            {Lenguage?`${text}`:`${text2}`}
          </a>
            </li>
            </Link>
          )
        })}
      </ul>

    </div>
    
      <ul className='social-icons'>
        {social.map((link) => {
          const {id,url,icon} = link
          return(
            <li key={id}>
              <a  href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
  </aside>
}

export default Sidebar
