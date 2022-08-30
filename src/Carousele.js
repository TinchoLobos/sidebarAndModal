import React from 'react'
import "./index.css"
import {Carousel,Container} from "react-bootstrap";
import carousel1 from "./Images/carousel1.jpg"
import carousel2 from "./Images/carousel2.jpg"
import carousel3 from "./Images/carousel3.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useGlobalContext } from './context'
import {avionetaImg} from './context'

const Carousele = (props) => {
  const {Lenguage} = useGlobalContext();

  return (
  
    <Carousel >
  
  <Carousel.Item>
    <img 
      className="d-block w-100 carouselMain MainCarousel'"
      src={props.src1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carouselMain"
      src={props.src2}
      alt="Second slide"
    />

    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carouselMain"
      src={props.src3}
      alt="Third slide"
    />

    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  )
}

export default Carousele
