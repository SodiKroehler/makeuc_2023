import styles from './page.module.css'
import ChooseLoginOrSignUp from './../components/ChooseLoginOrSignUp';
import ReactDOM from 'react-dom';
import Navbar from './../components/Navbar';

const LoginOrSignUpChoice = () => {
  return (
    <main>
      <Navbar />
      <ChooseLoginOrSignUp />
    </main>
  )
} 

export default LoginOrSignUpChoice;