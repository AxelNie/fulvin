import React, { useState } from "react";
import LandingPage from './components/LandingPage';
import NewBrew from './pages/NewBrew';
import ReceptPage from './pages/ReceptPage';
import Handbook from './pages/Handbook';
import './App.css';
import Home from './pages/Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'	
import { faHome } from '@fortawesome/free-solid-svg-icons'	
import { faBook } from '@fortawesome/free-solid-svg-icons'	
import { faGlassMartini } from '@fortawesome/free-solid-svg-icons'

function App() {

// Saving to storage


const [colorHome, setColorHome] = useState("#F7727D")
const [colorBook, setColorBook] = useState("#AAAAAA")
const [colorGlassMartini, setColorGlassMartini] = useState("#AAAAAA")  
  
const [brewList, setBrewList] = React.useState(JSON.parse(localStorage.getItem('myValueInLocalStorage')) || [])

React.useEffect(() => {
  localStorage.setItem('myValueInLocalStorage', JSON.stringify(brewList));
}, [brewList]);

  const homeIcon = <FontAwesomeIcon icon={faHome} color={colorHome}/>	
  const bookIcon = <FontAwesomeIcon icon={faBook} color={colorBook}/>	
  const hatIcon = <FontAwesomeIcon icon={faGlassMartini} color={colorGlassMartini}/> 

  function onNewBrew(brew) {
    setBrewList([...brewList, brew])
  }
  

  function setBrewListFunction(newArr) {
    setBrewList(newArr);
  }

  function changeColorHome(){
      setColorHome("#F7727D");
      setColorBook("#AAAAAA");
      setColorGlassMartini("#AAAAAA");
  }

  function changeColorRecipie(){
    setColorHome("#AAAAAA");
    setColorBook("#AAAAAA");
    setColorGlassMartini("#F7727D");
}
function changeColorHandbook(){
  setColorHome("#AAAAAA");
      setColorBook("#F7727D");
      setColorGlassMartini("#AAAAAA");
  }
  

  return (
    <div >
      <Router>
        <Switch>
          <Route path="/NewBrew">
            <NewBrew onNewBrew={onNewBrew} brewList={brewList} />
          </Route>
          <Route path="/Recepies">
            <ReceptPage /> 
          </Route>
          <Route path="/Handbook">
            <Handbook /> 
          </Route>
          <Route path="/Home">
            <Home brewList={brewList} setBrewListFunction={setBrewListFunction} />
          </Route>
          <Route path="/">
            <LandingPage /> 
          </Route>
          
          

          </Switch> 
          <div class="Footer">
          <Link to="/Recepies" onClick={() => changeColorRecipie()} ><div class="Foot-left"> <p class="Footer_text" style = {{color: colorGlassMartini}}><div className="icon" >{hatIcon}</div> Recept </p> </div></Link>
          <Link to="/Home" onClick={() => changeColorHome()} ><i class="fas fa-home"></i><div class="Foot-middle"> <p class="Footer_text" style = {{color: colorHome}}> <div className="icon">{homeIcon}</div> Hem </p> </div></Link>
          <Link to="/Handbook" onClick={() => changeColorHandbook()}><div class="Foot-right" > <p class="Footer_text" ><div className="icon">{bookIcon}</div> Handbok </p> </div></Link>
        </div>
      </Router>
    </div>
  );
}

export default App;
