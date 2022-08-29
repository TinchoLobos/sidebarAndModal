import React from 'react';
import {Link} from "react-scroll";
import {
  FaFacebook,
  FaPlane,
  FaHome,
  FaInstagram,
  FaParachuteBox,
  FaFlagUsa,
  FaFlag,
  FaRegFlag,
  FaHelicopter,
} from 'react-icons/fa';
import{
  GiParachute,
  GiAirBalloon,
} from 'react-icons/gi';
import{
  GrContact
} from 'react-icons/gr';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Inicio',
    text2:'English text',
    icon: <FaHome />, 
  },
  {
    id: 2,
    url: '/team',
    text: 'Vuelos en Avioneta',
    text2:'English text',
    icon: <FaPlane />
  },
  {
    id: 3,
    url: '/projects',
    text: 'Vuelos en parapente',
    text2:'English text',
    icon: <FaParachuteBox />
  },
  {
    id: 4,
    url: '/calendar',
    text: 'Paracaidismo',
    text2:'English text',
    icon: <GiParachute />
  },
  {
    id: 5,
    url: '/documents',
    text: 'Vuelos Globo',
    text2:'English text',
    icon: <GiAirBalloon />
  },
   {
    id: 6,
    url: '/documents',
    text: 'Vuelos Helicoptero',
    text2:'English text',
    icon: <FaHelicopter />
  },
    {
    id: 7,
    url: '/documents',
    text: 'Vuelos en planeador',
    text2:'English text',
    icon: <FaPlane />,
  },
  {
    id: 8,
    url: '/documents',
    text: 'Contacto',
    text2:'English text',
    icon: <GrContact />,
  },

];

export const idiomas = [
  {
    id: 1,
    url: '/',
    text: 'English',
    icon: <FaFlagUsa />, 
  },
  {
    id: 2,
    url: '/team',
    text: 'Portuges',
    icon: <FaFlag />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'Español',
    icon: <FaRegFlag />,
  }
]

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaInstagram />,
  },
  
];
