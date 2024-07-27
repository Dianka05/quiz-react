import { useState } from 'react'
import './App.css'
import Result from './components/Result'
import {questions} from './questions'
import Games from './components/Games'

function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]

  
  const onClickVariant = (index, event) => {
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
    let className = 'answer'
    if (index === question.correct) {
      className += ' correct';
    } else {
      className += ' incorrect';
    }
    event.target.className = className
    setTimeout(()=>{
      setStep(step + 1)
      event.target.className = 'answer'
    }, 1000)
  }
  return (
    <>
      <h1>React quiz - a mini project made with React </h1>
      <div className='game'>
        {step !== questions.length && <Games step={step} question={question} onClickVariant={onClickVariant}/>}
        {step === questions.length &&  <Result correct={correct} /> }
      </div> 
    </>
  )
}

export default App
