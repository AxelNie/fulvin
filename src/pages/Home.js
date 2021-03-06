import React, { useState } from "react";
import './Home.css';
import './wave.css';
import Task from '../components/Task'
import LandingPage from "../components/LandingPage";
import TaskCompleted from '../components/TaskCompleted'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'	
import { faTrash } from '@fortawesome/free-solid-svg-icons'	
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NewBrew from "./NewBrew";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import Wave from 'react-wavify'


const checkButtonIcon = <FontAwesomeIcon icon={faCheckSquare} color="#F7727D"/>	

const trashIcon = <FontAwesomeIcon icon={faTrash} />
const plusIcon = <FontAwesomeIcon icon ={faPlus} /> 

function Home({  brewList, setBrewListFunction}) {
  const [activeStepList, setActiveStepList] = useState([0, 0, 0, 0, 0]); //index 0 = active step for nBrew= 0
  const [nBrew, setNBrew] = useState(0); //Numrering av brew, ändra för att visa andra slots i brewList[]

  let checkButton = true;
  let prevId = "prevUnavailable"
  let nextId = "nextAvailable";
  var months = ["jan", "feb", "mar", "apr", "maj","jun","jul","aug","sep","okt","nov","dec"];

/* Funktioner för att bläddra mellan olika bryggninngar*/
  function increaseNBrew() {
    if (nBrew < brewList.length - 1) {
      console.log(brewList.length);
      setNBrew(nBrew + 1);
    }
  }

  function decreaseNBrew() {
    if (nBrew > 0) {
      setNBrew(nBrew - 1)
    }
  }
  

  function updateTasks() {
    console.log("yjpjakdjskl")
    let newArr = [...brewList];
    newArr[nBrew]['activeStep'] = newArr[nBrew]['activeStep'] + 1;
    setBrewListFunction(newArr);
    console.log("hej funkar jagh")
  }

  /* Raderar en bryggning*/
  function deleteNBrew() {
    //Kopierar arrayen brewList, tar bort brew på plats nBrew och förskjuter resterande
    let newArr = [...brewList];
    newArr[nBrew] = null;
    for (var i = nBrew; i < newArr.length - 1; i++) {
      newArr[i] = newArr[i + 1];
    }
    newArr.pop()
    setBrewListFunction(newArr);
/*
    //Kopierar arrayen activeStepList, tar bort activeStep på plats nBrew och förskjuter resterande
    let newArr2 = [...activeStepList];
    newArr2[nBrew] = 0;
    for (var i = nBrew; i < newArr.length; i++) {
      newArr2[i] = newArr2[i + 1];
    }
    newArr2.pop()

    //Uppdaterar nBrew
    setActiveStepList(newArr2);
*/
    
    if (nBrew > 0) {
      setNBrew(nBrew - 1);
    }
  }
  console.log(brewList);

  function upDateId()
  {

    if (nBrew < brewList.length -1 )
    {
      nextId = "nextAvailable"
    } else {
      nextId = "nextUnavailable"
   }

    if (nBrew > 0)
    {
      prevId = "prevAvailable"
    }else{
      prevId = "prevUnavailable" 
    }
}

 function showCheckButton()
 {
  if(brewList[nBrew]['activeStep'] == 0 && daysBetween(new Date(), new Date(brewList[nBrew]['initialDate']))==0 )
  {
    checkButton = true;
  } else if (brewList[nBrew]['activeStep'] == 1 && daysBetween(new Date(), new Date(brewList[nBrew]['task2Date']))==0)
  {
    checkButton = true; 
  } else if (brewList[nBrew]['activeStep'] == 2 && daysBetween(new Date(), new Date(brewList[nBrew]['finalDate']))==0)
  {
    checkButton = true;
  } else{
    checkButton = false;
  }
 }

/*Kollar om datum behöver uppdateras, körs varje gång sidan laddas*/
  function upDateDates(){

    if (brewList[nBrew]['activeStep'] === 0) {
      if (daysBetween(new Date(), new Date(brewList[nBrew]['initialDate']) )< 0){
        brewList[nBrew]['task2Date'] = addDays(new Date(brewList[nBrew]['task2Date']), -daysBetween(new Date(), new Date(brewList[nBrew]['initialDate'])))
        brewList[nBrew]['finalDate'] = addDays(new Date(brewList[nBrew]['finalDate']), -daysBetween(new Date(), new Date(brewList[nBrew]['initialDate'])))
        brewList[nBrew]['initialDate'] = new Date()
      }
    }
    else if (brewList[nBrew]['activeStep'] === 1) {
      if (daysBetween(new Date(), new Date(brewList[nBrew]['task2Date'])) < 0){
        brewList[nBrew]['finalDate'] = addDays(new Date(brewList[nBrew]['finalDate']), -daysBetween(new Date(), brewList[nBrew]['task2Date']))
        brewList[nBrew]['task2Date'] = addDays(new Date(brewList[nBrew]['task2Date']), -daysBetween(new Date(), brewList[nBrew]['task2Date']))
      }
    }
    else if (brewList[nBrew]['activeStep'] === 2) {
      if (daysBetween(new Date(), new Date(brewList[nBrew]['finalDate'])) < 0){
        brewList[nBrew]['finalDate'] = addDays(new Date(brewList[nBrew]['finalDate']), -daysBetween(new Date(), brewList[nBrew]['finalDate']))
      }
    }
  }

  if (brewList.length != 0) {
    upDateDates()
    upDateId()
    showCheckButton()
    
    return (
      <div className="Wrapper">
        <div class="info">
          <div class="top">
            <button className="trashBtn" onClick={() => deleteNBrew()}> <div className="icon">{trashIcon}</div></button>
          </div>

          <div class="middle">
            <div class="vänster"> 
              <p class="undertext">
                <p class="övertext">{new Date(brewList[nBrew]['finalDate']).getDate()} {months[(new Date(brewList[nBrew]['finalDate']).getMonth())]}
                </p> Beräknat slutdatum
              </p>
            </div>
            
             <div class="progress">
            <Wave mask="url(#mask)" fill="white" options={{
            height: calcProgressBar(brewList[nBrew]['sugarAmount'], brewList[nBrew]['finalDate']),
            amplitude: 2,
            speed: 0.25,
            points: 3}}>
              
              <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                  <stop offset="1.0" stopColor="white" />
                  <stop offset="4.5" stopColor="black" />
                </linearGradient>
                <mask id="mask">
                  <rect x="0" y="0" width="2000" height="10.6vh" fill="url(#gradient)"  />
                </mask>
              </defs>
            </Wave>
          </div>

           
          <div class="höger"> 
            <p class="övertext"> {daysUntilNextTask()} Dagar</p>
            <p class="undertext"> till nästa uppgift </p>
          </div>
        </div>

          <div class="bottom">

            <div class="vänster"> <p class="övertext"> { } </p>
              <p class="undertext"> Satser : {brewList[nBrew]['volumeBatch']}</p></div>

            <div class="mitten"> <p class="övertext"> {Math.round(calcAlcohol(brewList[nBrew]['ratio'],brewList[nBrew]['sugarAmount']),2)}% </p>
              <p class="undertext"> Alkohol </p> </div>


            <div class="höger"> <p class="övertext"> { } </p>
              <p class="undertext"> Liter totalt: {Math.round(brewList[nBrew]['volumeLiter'])} </p>
            </div>

          </div>
        </div>


        <div id="fulvinsnamn">
          <div class="prevone">
          <button id={prevId} onClick={() => decreaseNBrew()}></button>
          </div>

          <div class="prevtwo"> 
            <p class="fulvinsnamn_text"> {brewList[nBrew]['name']} </p>    
          </div>
          
          <div class="prevtre">
          <button id= {nextId} onClick={() => increaseNBrew()}></button>
          </div>
        </div>
        <div classname="plus1">
        <Link to="/NewBrew"><button className="plusBtn"> <div className="icon">{plusIcon}</div></button></Link>
        </div>
       

        <div id="kommande"> <p id="kommande_text"> Kommande uppgifter </p>
        {brewList[nBrew]['activeStep'] < 3 && checkButton==true && <div id="checkButton" onClick={updateTasks}>{checkButtonIcon}</div>} 
          <Task  months = {months} brewList={brewList} nBrew={nBrew}></Task>
        </div>

        <div id="avslutade"> <p id="kommande_text"> Avslutade uppgifter </p>
        <TaskCompleted months = {months} brewList={brewList} nBrew={nBrew}></TaskCompleted>
        </div>

      
    </div>
    );
  }
  else {
    return (
      <LandingPage></LandingPage>
    )
  }

  
  /*Räknar ut antal dagar till nästa task*/
  function daysUntilNextTask() {
    var daysLeft;
    if (brewList[nBrew]['activeStep'] === 0) {
      daysLeft = 0;
    }
    else if (brewList[nBrew]['activeStep'] === 1) {
      daysLeft = daysBetween(new Date(), new Date(brewList[nBrew]['task2Date']))
    }
    else if (brewList[nBrew]['activeStep'] === 2) {
      daysLeft = daysBetween(new Date(), new Date(brewList[nBrew]['finalDate']))
    }
    return daysLeft;
  }

  /* Räknar ut antal dagar mellan inparametrarna*/
  function daysBetween(first, second) {

    // Copy date parts of the timestamps, discarding the time parts.
    var one = new Date(first.getFullYear(), first.getMonth(), first.getDate());
    var two = new Date(second.getFullYear(), second.getMonth(), second.getDate());

    // Do the math.
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    var millisBetween = two.getTime() - one.getTime();
    var days = millisBetween / millisecondsPerDay;

    // Round down.
    return Math.floor(days);
  }
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function calcAlcohol(ratio, sugarAmount){
    if(sugarAmount === 3.5){
      return ratio * 0.01 * 11;
    }else{
      return ratio * 0.01 * 14;
    }
  }
  function calcProgressBar(sugarAmount, finalDate){ //Returnar värden mellan 5 och 60
var daysUntilDone = daysBetween(new Date(), new Date(finalDate));
console.log("Days:")
console.log(daysUntilDone)
    if(sugarAmount === "3.5"){ //En bryggning tar 8 dagar
      console.log((60 - 55*((8-daysUntilDone)/8)))
      return (60 - 55*((8-daysUntilDone)/8))

    }else{ // 4.5 kg socker, en bryggning tar 14 dagar
      console.log((60 - 55*((14-daysUntilDone)/14)))
      return (60 - 55*((14-daysUntilDone)/14))
    }

  }
  
}



export default Home;
