import { useState } from 'react'
import Flashcards from '../Flashcards/Flashcards'
import Login from '../Login/Login'

import { ContainerApp, FooterApp, HeaderApp } from './style'
import GlobalStyle from '/src/styles/globalstyle.js'
import logo from '/src/assets/images/logo.png'
import congratulationsIcon from '/src/assets/images/party.png'
import lamentationIcon from '/src/assets/images/sad.png'

const cards = [
   { question: 'O que é JSX?', answer: 'Uma extensão da linguagem JavaScript' },
   { question: 'O React é __', answer: 'Uma biblioteca JavaScript para construção de interfaces' },
   { question: 'Componentes devem iniciar com __', answer: 'Letra maiúscula' },
   { question: 'Podemos colocar __ dentro do JSX', answer: 'expressões' },
   {
      question: 'O ReactDOM nos ajuda __',
      answer: 'Interagindo com a DOM para colocar componentes React na mesma'
   },
   {
      question: 'Usamos o npm para __',
      answer: 'Gerenciar os pacotes necessários e suas dependências'
   },
   { question: 'Usamos props para __', answer: 'Passar diferentes informações para componentes' },
   {
      question: 'Usamos estado (state) para __',
      answer:
         'Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
   }
]

function App() {
   const [hits, setHits] = useState(0)
   const [questionsAnswered, setQuestionsAnswered] = useState([])
   const [isLogin, setIsLogin] = useState(true)
   
   const verify = questionsAnswered.map(item => item[1])
   
   return (
      <ContainerApp hits={hits}>
         <GlobalStyle />

         {isLogin && <Login isLogin={isLogin} setIsLogin={setIsLogin} />}

         {!isLogin && (
            <>
               <HeaderApp>
                  <img src={logo} alt="logo zapRecall" />
                  <h1>ZapRecall</h1>
               </HeaderApp>

               {cards.map((card, index) => {
                  return (
                     <Flashcards
                        key={index}
                        questionIndex={index + 1}
                        question={card.question}
                        answer={card.answer}
                        hits={hits}
                        setHits={setHits}
                        questionsAnswered={questionsAnswered}
                        setQuestionsAnswered={setQuestionsAnswered}
                     />
                  )
               })}

               <FooterApp data-test="footer">
                  {verify.includes('no-btn') &&
                     verify.length === cards.length && (
                        <div data-test="finish-text">
                           <span>
                              <img src={lamentationIcon} alt="" /> Putz...
                           </span>
                           <p>Ainda faltam alguns... Mas não desanime!</p>
                        </div>
                     )}

                  {!verify.includes('no-btn') &&
                     verify.length === cards.length && (
                        <div data-test="finish-text">
                           <span>
                              <img src={congratulationsIcon} alt="" /> Parabéns!
                           </span>
                           <p>Você não esqueceu de nenhum flashcard!</p>
                        </div>
                     )}

                  <div>
                     <span>{`${hits}/${cards.length}`} CONCLUÍDOS</span>
                     <div>
                        {questionsAnswered.map((item, index) => (
                           <img key={index} src={item[0]} data-test={item[1]} alt="" />
                        ))}
                     </div>
                  </div>
               </FooterApp>
            </>
         )}
      </ContainerApp>
   )
}

export default App
