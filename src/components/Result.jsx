import {questions} from "../questions.js";

export default function Result({correct}) {
    return(
      <div className='result'>
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" style={{width: '30%'}}/>
        <h2>You guessed {correct} the answer from {questions.length}</h2>
        <a href="">
          <button>Try again</button>
        </a>
      </div>
    )
}