import { useState } from 'react'
import { Flashcard, Button } from './style'
import arrowPlayIcon from '/src/assets/images/seta_play.png'
import turnIcon from '/src/assets/images/seta_virar.png'

import notRememberIcon from '/src/assets/images/icone_erro.png'
import almostIcon from '/src/assets/images/icone_quase.png'
import rememberIcon from '/src/assets/images/icone_certo.png'

function gameIcon(result) {
   return result === 'initial'
      ? arrowPlayIcon
      : result === 'failed'
      ? notRememberIcon
      : result === 'almost'
      ? almostIcon
      : rememberIcon
}
function gameDatatest(result) {
   return result === 'initial'
      ? 'play-btn'
      : result === 'failed'
      ? 'no-icon'
      : result === 'almost'
      ? 'partial-icon'
      : 'zap-icon'
}

function Flashcards({
   questionIndex,
   question,
   answer,
   hits,
   setHits,
   questionsAnswered,
   setQuestionsAnswered
}) {
   const [face, setFace] = useState('firstFace')
   const [result, setResult] = useState('initial')
   const [exec, setExec] = useState(true)

   return (
      <Flashcard face={face} result={result} data-test="flashcard">
         {face === 'firstFace' ? (
            <div className={face}>
               <span data-test="flashcard-text">Pergunta {questionIndex}</span>
               <img
                  data-test={gameDatatest(result)}
                  src={gameIcon(result)}
                  alt=""
                  onClick={() => (exec ? setFace('secondFace') : '')}
               />
            </div>
         ) : face === 'secondFace' ? (
            <div className={face}>
               <span data-test="flashcard-text">{question}</span>
               <div className="image">
                  <img
                     data-test="turn-btn"
                     src={turnIcon}
                     alt=""
                     onClick={() => setFace('lastFace')}
                  />
               </div>
            </div>
         ) : (
            <div className={face}>
               <span data-test="flashcard-text">{answer}</span>
               <div>
                  <Button
                     data-test="no-btn"
                     index="notRemember"
                     onClick={() => {
                        setQuestionsAnswered([...questionsAnswered, [notRememberIcon, 'no-icon']])
                        setHits(hits + 1)
                        setExec(false)
                        setFace('firstFace')
                        setResult('failed')
                     }}
                  >
                     Não lembrei
                  </Button>
                  <Button
                     data-test="partial-btn"
                     index="almostNotRemember"
                     onClick={() => {
                        setQuestionsAnswered([...questionsAnswered, [almostIcon, 'partial-icon']])
                        setHits(hits + 1)
                        setExec(false)
                        setFace('firstFace')
                        setResult('almost')
                     }}
                  >
                     Quase não lembrei
                  </Button>
                  <Button
                     data-test="zap-btn"
                     index="remember"
                     onClick={() => {
                        setQuestionsAnswered([...questionsAnswered, [rememberIcon, 'zap-icon']])
                        setHits(hits + 1)
                        setExec(false)
                        setFace('firstFace')
                        setResult('remember')
                     }}
                  >
                     Zap!
                  </Button>
               </div>
            </div>
         )}
      </Flashcard>
   )
}

export default Flashcards
