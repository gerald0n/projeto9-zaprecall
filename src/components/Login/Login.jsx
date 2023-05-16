import logoIcon from '/src/assets/images/logo.png'
import { ContainerLogin } from './ContainerLogin'

function Login({isLogin, setIsLogin}) {
   return (
      <ContainerLogin>
         <div>
            <img src={logoIcon} alt="" />
            <h1>ZapRecall</h1>
            <button data-test="start-btn" onClick={() => setIsLogin(!isLogin)}>Iniciar Recall!</button>
         </div>
      </ContainerLogin>
   )
}

export default Login
