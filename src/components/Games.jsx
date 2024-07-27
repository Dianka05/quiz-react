import {questions} from "../questions";

export default function Games({question, onClickVariant, step}) {
    const percentage = Math.round(step / questions.length * 100);
  
    return(
      <>
        <div className='progress'>
          <div className='progress-inner' style={{width: `${percentage}%`}}></div>
        </div>
        <h2>{question.title}</h2>
        <ul>
          {question.variants.map((q, index) => {
  
            return <li className='answer' onClick={(event) => onClickVariant(index, event)} key={index}>{q}</li>
            })}
        </ul>
      </>
    )
}