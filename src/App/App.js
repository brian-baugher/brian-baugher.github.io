import Navbar from '../Navbar/Navbar';
import style from './App.module.css';
import '../colors.css'

function App() {
  //navbar
  //welcome screen (pretty)
  //about
  //experience
  //education
    //include skills with those e things
  //projects
    //little card guys
  return (
    <div className={style.App}>
      <Navbar/>
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
