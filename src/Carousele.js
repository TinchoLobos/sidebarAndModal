import React from 'react'
import {Carousel,Container} from "react-bootstrap";
import carousel1 from "./Images/carousel1.jpg"
import carousel2 from "./Images/carousel2.jpg"
import carousel3 from "./Images/carousel3.jpg"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useGlobalContext } from './context'


const Carousele = () => {
  const {Lenguage} = useGlobalContext();

  return (
  
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 carouselMain"
      src={carousel1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Edu Boschi</h3>
      <p>Elenco de Bailarines</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carouselMain"
      src={carousel2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Clase alumnas </h3>
      <p>Presentacion 2019</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carouselMain"
      src={carousel3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Competencia Nacional</h3>
      <p>Escuela Divergente presente</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  )
}

export default Carousele
