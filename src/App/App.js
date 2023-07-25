import { useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import style from './App.module.css';
import '../colors.css'
import Welcome from '../Welcome/Welcome';
import About from '../About/About';

function App() {
  //navbar - good enough
  //welcome screen (pretty) - nice
  //about
  //experience
  //education
    //include skills with those e things
  //projects
    //little card guys

  const welcomeScreen = useRef()
    
  return (
    <div className={style.App}>
      <Navbar welcomeScreen={welcomeScreen}/>
      <div ref={welcomeScreen}><Welcome /></div>
      <div><About /></div>
      <header className={style.App_header}>
        <img className={style.App_logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={style.App_link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
