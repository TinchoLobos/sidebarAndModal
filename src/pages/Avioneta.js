import React from 'react'
import { ReactDom } from 'react-dom'
import '../index.css'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import {Link} from "react-router-dom"
import { FaWhatsapp,FaRegDotCircle } from 'react-icons/fa'
import Carousele from '../Carousele'
import Contact from '../Contact'
import Footer from '../Footer'
import {useGlobalContext } from '../context'
import {Carousel,Container} from "react-bootstrap";
import carousel1 from "../Images/carousel1.jpg"
import carousel2 from "../Images/carousel2.jpg"
import carousel3 from "../Images/carousel3.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';







const Avioneta = () => {

  const avionetaImg = {
    src1: "https://arc-anglerfish-arc2-prod-artear.s3.amazonaws.com/public/HWOJQDAZI3TJLTBZGJMTAYZKXU.jpg",
    src2: "https://static.abc.es/media/tecnologia/2019/01/25/pipermalibu-klcB--620x349@abc.jpg",
    src3: "https://i0.wp.com/eltiempolatino.com/wp-content/uploads/2022/05/Avioneta.jpg?fit=1200%2C798&ssl=1",
  }

  
  const {Lenguage} = useGlobalContext();
  return <>
  <main className='mainBackground1' id='Inicio'>
<Link to='/github.io/sidebarAndModal.git'>
        <button className='BackMenu'><FaArrowAltCircleLeft/></button>
      </Link>
<a href="https://api.whatsapp.com/send?phone=5492616520768&text=Hola, Nececito mas informacion!">
                      <div className="OneWhatsapp">
                    <FaWhatsapp style={{color:"#25d366",fontSize:"4rem"}}/>
                    </div>
                  </a>

   <h3 className='mainLogo' style={{textAlign:"center",color:"white", fontSize:"4rem",fontWeight:"bold"}} > {Lenguage?"VUELOS EN AVIONETA":"ENGLISH TEXT"} </h3>
  </main>
{/* section Detail */}
<div className='MainSectionDetail section'>
  <h3 className='DetailTitle'>{Lenguage?"EN QUE CONSISTE EL VUELO EN AVIONETA:":"ENGLISH TEXT"} </h3>
  <p>{Lenguage?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia soluta perferendis pariatur, debitis autem inventore, est fugit, nulla nobis totam repellendus blanditiis sint facilis nisi aliquid alias quod officia quaerat voluptatibus? Animi fuga in, saepe excepturi eos ipsam non sed veritatis blanditiis eveniet voluptates neque consequuntur suscipit consequatur nobis.":"ENGLISH TEXT"}</p>
{/*section Opciones disponibles*/}
<div className='MainOptions'>
  <h3 className='DetailTitle'>{Lenguage?"OPCIONES DISPONIBLES":"ENGLISH TEXT"}</h3>
<ul >

  <li className='DetailList'><section><FaRegDotCircle/> {Lenguage?"PARQUE SAN MARTIN":"ENGLISH TEXT"} <FaRegDotCircle/> <br />{Lenguage?"DURACION 25 MIN":"ENGLISH TEXT"}</section> <br /> <p>{Lenguage?"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, voluptatibus mollitia deserunt perspiciatis vitae veniam consequuntur. Architecto cupiditate enim exercitationem.":"ENGLISH TEXT"}</p> 
  </li>
    
    <li className='DetailList'><section><FaRegDotCircle/> {Lenguage?"BODEGAS Y PRECORDILLERA":"ENGLIS TEXT"} <FaRegDotCircle/> <br />{Lenguage?"DURACION 45 MIN":"ENGLISH TEXT"}</section> <br /> <p>{Lenguage?"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, voluptatibus mollitia deserunt perspiciatis vitae veniam consequuntur. Architecto cupiditate enim exercitationem.":"ENGLISH TEXT"}</p>
    </li>


      <li className='DetailList'><section><FaRegDotCircle/> {Lenguage?"EL CARRIZAL":"ENGLIS TEXT"} <FaRegDotCircle/> <br /> {Lenguage?"DURACION 60 MIN":"ENGLISH TEXT"}</section><br /> <p>{Lenguage?"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, voluptatibus mollitia deserunt perspiciatis vitae veniam consequuntur. Architecto cupiditate enim exercitationem.":"ENGLIS TEXT"}</p>
      </li>

      <li className='DetailList'><section><FaRegDotCircle/> {Lenguage?"MAS LUGARES DISPONIBLES":"ENGLIS TEXT"} <FaRegDotCircle/> <br /> {Lenguage?"DURACION 120 MIN":"ENGLIS TEXT"}</section><br /> <p>{Lenguage?"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, voluptatibus mollitia deserunt perspiciatis vitae veniam consequuntur. Architecto cupiditate enim exercitationem.":"ENGLISH TEXT"}</p>
      </li>
</ul>
</div>
</div>

{/* CARRUZEL IMAGES */}
<div>
 <h3 className='DetailTitle'>{Lenguage?"IMAGENES":"IMAGES"}</h3>

<Carousel >
  
  <Carousel.Item>
    <img 
      className="d-block w-100 carouselMain MainCarousel'"
      src={avionetaImg.src1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carouselMain"
      src={avionetaImg.src2}
      alt="Second slide"
    />
    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carouselMain"
      src={avionetaImg.src3}
      alt="Third slide"
    />

    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
{/* CONTACT */}
<Contact/>
{/* FOOTER */}
<Footer/>






  </>

}

export default Avioneta