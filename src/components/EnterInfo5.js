import '../App.css';
import React, { useState } from "react";
import Button from './Button';
import ToggleButton from './ToggleButton'


const EnterInfo5 = ({ onInput }) => {
  const [sugarAmount, setSugarAmount] = useState("3.5");

  const updateSugarAmount = (e) => {
    setSugarAmount(e.target.value);
  }

  return (
    <div class="EnterInfoone">
       <div id="top">
      <header>
        <h1>Mängd socker</h1>
      </header>
      </div>

      <div id="content"> 
      <p id="info">3.5 eller 4.5 kilo socker</p>
      <div class="btn-group" data-toggle="buttons">
      <ToggleButton active={sugarAmount} option1="3.5" option2="4.5" onToggle={setSugarAmount}>
         </ToggleButton>
        </div>
      </div>
      <Button onClick={() => onInput(sugarAmount)}>NÄSTA</Button>

      <div class= "footer_dot">
      <div class="grey"></div>
      <div class="grey"></div>
      <div class="grey"></div>
      <div class="white"></div>
      </div>

    </div>


  );
}
export default EnterInfo5;