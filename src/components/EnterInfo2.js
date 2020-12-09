import '../App.css';
import React, { useState } from "react";
import Button from './Button';
import DatePicker from 'react-date-picker'
import '../EnterInfo.css';
import ToggleButton from './ToggleButton'

console.log("hjahdjhaskldjaksldjklaasjkldjaskjka")

// Sets intitial and final date

const EnterInfo2 = ({ onInput }) => {
  const [date, setDate] = useState(new Date());
  const [datePref, setDatePref] = useState("initialDate");

  const updateDatePref = (e) => {
    
  }




  return (

    <div class="EnterInfoone">
      <div id="top">
        <header>
          <h1>ANGE DATUM</h1>
        </header>
      </div>
      <div id="content">
        <p id="info"> Ange om du vill bestämma startdatum eller när
        fulvinet ska vara klart </p>
        <div class="btn-group" >

        <ToggleButton active={datePref} option1="Start" option2="Klar" onToggle={setDatePref}>
         </ToggleButton>
     
        </div>
        <DatePicker className="DatePick" value={date} onChange={setDate} />


      </div>
      <Button onClick={() => onInput(date, datePref)}>NÄSTA</Button>
      <div class="footer_dot">
        <div class="grey"></div>
        <div class="white"></div>
        <div class="grey"></div>
        <div class="grey"></div>

      </div>
      {datePref}
    </div>
  );
}

export default EnterInfo2;

