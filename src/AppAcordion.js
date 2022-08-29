import React, { useState } from 'react';
import data from './DataAcordion';
import SingleQuestion from './QuestionAcordion';
import './indexAcordion.css'
import {useGlobalContext } from './context'

function AppAcordion() {
  const {Lenguage} = useGlobalContext();
  const [questions, setQuestions] = useState(data)

  return(
  <div className='mainAcordionData'>
   <h3 className='titleAcordion'>{Lenguage?"PREGUNTAS FRECUENTES":"English text"}</h3>
  <ma in className='containerAcordion'>
    <div>
      <div></div>
    {questions.map((question) => {
      return(
      <SingleQuestion
      key={question.id}
      {...question}
      />
      )
    })}
    </div>
  </ma>
  </div>
  )
  

}

export default AppAcordion;
