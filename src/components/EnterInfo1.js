import React, { useState } from "react";
import Button from './Button';
import '../EnterInfo.css';

const EnterInfo1 = ({ onInput }) => {
  const [text, setText] = useState("");

  return (
    <div class="EnterInfoone">
      <div id="top">
        <header>
          <h1 >NAMNGE</h1>
        </header>
      </div>
      <div id="theText">
        <input class="Input" type="text" placeholder="Ange namn" onChange={(e) => setText(e.target.value)} ></input>
      </div>

      <Button onClick={() => onInput(text)}>NÄSTA</Button>

      <div class="footer_dot">
        <div class="white"></div>
        <div class="grey"></div>
        <div class="grey"></div>
        <div class="grey"></div>
      </div>

    </div>
  );
}

export default EnterInfo1;