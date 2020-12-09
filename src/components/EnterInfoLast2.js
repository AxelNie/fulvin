
import '../App.css';
import React, { useState } from "react";
import '../EnterInfo.css';

import {
  Link,
} from "react-router-dom";

const EnterInfoLast = () => {
  return (
    <div class="EnterInfoone">
      <div id="top">
        <header>
          <h1>Färdig!</h1>
        </header>
      </div>
      
      <p id="finalText">Nu är din bryggning redo</p>
      <div id="tillbakaa"> 
        <Link id="link_home" to="/Home">TILL BRYGGNINGEN <div id="pil_lila2"></div> </Link>
      </div>
    </div>
  );

}

export default EnterInfoLast;