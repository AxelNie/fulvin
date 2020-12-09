import React, { useState } from "react";
import EnterInfo1 from '../components/EnterInfo1'
import EnterInfo2 from '../components/EnterInfo2'
import EnterInfoLast2 from '../components/EnterInfoLast2'
import EnterInfoLast from '../components/EnterInfoLast'
import EnterInfo4 from "../components/EnterInfo4";
import EnterInfo5 from "../components/EnterInfo5";
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const trashIcon = <FontAwesomeIcon icon={faTrash} />


function NewBrew({ onNewBrew, brewList }) {

  const [activeStep, setActiveStep] = useState(1);
  const [brew, setBrew] = useState({ name: "Bryggning", initialDate: null, finalDate: null, task2Date: null, type: null, volumeLiter: null, volumeBatch: null, sugarAmount: null, activeStep: 0, ratio: null });

  function stepOneCompleted(input) {//Namn
    if (input === "") { //Om inget namn anges

      setBrew({ ...brew, name: "Bryggning " + (brewList.length + 1) })
    } else {
      setBrew({ ...brew, name: input })
    }
    setActiveStep(2);

  }

  function stepTwoCompleted(date, datePref) { //Datum
    setActiveStep(3);

    if (datePref === "Start") { setBrew({ ...brew, initialDate: date }) }
    else { setBrew({ ...brew, finalDate: date }) }
  }
/*
  function stepFourCompleted(volume, volumePref, ratio) { //Volym
    

    if (volumePref === "Liter") {
      if (volume % 40 === 0) {
        setBrew({ ...brew, volumeLiter: volume, volumeBatch: volume / 40 })
      }
      else {
        setBrew({ ...brew, volumeLiter: volume, volumeBatch: Math.floor(volume / 40) + 1 })
      }
    }
    else {
      setBrew({ ...brew, volumeBatch: volume, volumeLiter: volume * 40 })
    }
    setActiveStep(4);
  }
  */

 function stepFourCompleted(volumeBatch, volumeLiter, volumePref, ratio) { //Volym

      setBrew({ ...brew, volumeBatch: volumeBatch, volumeLiter: volumeLiter, ratio: ratio})
    
  setActiveStep(4);
}

  function stepFiveCompleted(input) // Mängd socker
  {
    if (brew['initialDate']) {

      if (input === "3.5") {
        setBrew({ ...brew, finalDate: addDays(brew['initialDate'], 8), task2Date: addDays(brew['initialDate'], 4), sugarAmount: input })

      } else {
        setBrew({ ...brew, finalDate: addDays(brew['initialDate'], 14), task2Date: addDays(brew['initialDate'], 10), sugarAmount: input })
      }

    } else {
      if (input === "3.5") {
        setBrew({ ...brew, initialDate: addDays(brew['finalDate'], -8), task2Date: addDays(brew['finalDate'], -4), sugarAmount: input })

      } else {
        setBrew({ ...brew, initialDate: addDays(brew['finalDate'], -14), task2Date: addDays(brew['finalDate'], -4), sugarAmount: input })
      }

    }
    setActiveStep(5);
  }

  function stepSixCompleted() {
    onNewBrew(brew);
    setActiveStep(6);
  }


  function onInput() {
    //Tillbakaknapp
    if (activeStep > 1) {
      setActiveStep(activeStep - 1)
    }
    else {
      setActiveStep(1); //Hur ska vi gå tillbaka till "/Home"?
    }
  }


  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }


  let Btn;
  if (activeStep != 1) {
    Btn = <button className="backbtn" onClick={() => onInput()}></button>;
  }
  else { Btn = Btn = <button></button>; }

  return (
    <div>
      {activeStep === 1 && <EnterInfo1 onInput={stepOneCompleted} />}  {/*Ange namn*/}
      {activeStep === 2 && <EnterInfo2 onInput={stepTwoCompleted} />}  {/*Ange datum*/}
      {activeStep === 3 && <EnterInfo4 onInput={stepFourCompleted} />}  {/*Ange mängd*/}
      {activeStep === 4 && <EnterInfo5 onInput={stepFiveCompleted} />}
      {activeStep === 5 && <EnterInfoLast onInput={stepSixCompleted} />} {Btn}
      {activeStep === 6 && <EnterInfoLast2 />} {/*Fråga handledare hur vi ska kunna gå till "/Home" när vi är klara. Vill inte ha en länk som användaren måste klicka på*/}
    </div>
  );
}

export default NewBrew;