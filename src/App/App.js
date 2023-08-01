import { useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import style from './App.module.css';
import '../colors.css'
import Welcome from '../Welcome/Welcome';
import About from '../About/About';
import Projects from '../Projects/Projects';

function App() {
  //navbar - good enough
  //welcome screen (pretty) - nice
  //about
  //experience
  //education
    //include skills with those e things
  //projects
    //little card guys

  const welcomeScreen = useRef();
  const aboutMe = useRef();
  const projects = useRef();
    
  return (
    <div className={style.App}>
      <Navbar welcomeScreen={welcomeScreen} aboutMe={aboutMe} projects={projects}/>
      <div ref={welcomeScreen}><Welcome /></div>
      <div ref={aboutMe}><About /></div>
      <div ref={projects}><Projects /></div>
    </div>
  );
}

export default App;
