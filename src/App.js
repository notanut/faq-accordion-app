import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Faq'
import box from './images/illustration-box-desktop.svg'
import woman from './images/illustration-woman-online-desktop.svg'
import woman2 from './images/illustration-woman-online-mobile.svg'

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className="container">
        <img src={box} alt="" className='image-1'/>
        <img src={woman2} alt="" className='image-3'/>
      <div className="left-container">
        <img src={woman} alt="" className='image-2'/>
      </div>
      <div className="right-container">
        <h1>FAQ</h1>
        <section className='question-container'>
            {questions.map((question) => {
              return (
                <SingleQuestion key={question.id} {...question}></SingleQuestion>
              )
            })}
        </section>
      </div>
      </div>
    </main>
  )
}

export default App