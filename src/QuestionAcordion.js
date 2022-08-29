import React, { useState } from 'react';
import data from './DataAcordion';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './indexAcordion.css'
import {useGlobalContext } from './context'

const Question = ({id,title,title2,info,info2}) => {
const {Lenguage} = useGlobalContext();
 const [toggle,setToggle] = useState(true);
 const togglerbtn = ()=>setToggle(!toggle)
  
  return( 
  <>
  <article key={id} className='questionAcordion gridear2Acordion'>
  <div> 
    <h4 className='questionsSize'>{Lenguage?`${title}`:`${title2}`}</h4>
  <p>{toggle?"":`${Lenguage?`${info}`:`${info2}`}`}</p>
  </div>
  <div>
  <button style={{color:"white"}} type='button' onClick={() =>togglerbtn()} className='btn '>{toggle?<AiOutlinePlus/>:<AiOutlineMinus/>}</button>
  </div>
  </article>
</>
  )

};


export default Question;
