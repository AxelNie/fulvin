import '../App.css';
import React, { useState } from "react";
import Button from './Button';
import '../EnterInfo.css';
import { createStyles, Slider } from '@material-ui/core'

import ToggleButton from './ToggleButton'

const EnterInfo4 = ({ onInput }) => {
  const [ratio, setRatio] = useState(50);
  const [volume, setVolume] = useState(0);
  const [volumePref, setVolumePref] = useState("Liter");

  var volumeBatch;
  var volumeLiter;
  var volumeOfBrew;

  const updateVolumePref = (e) => {
    setVolumePref(e.target.value);
  }

  const getValue = (e, val) => {
    setRatio(val)
  }

  function calcValues(ratio, volume, volumePref){
    if (volumePref === "Liter") {
      console.log("Beräknar utifrån liter")
      volumeOfBrew = volume * ratio * 0.01
      if (volumeOfBrew % 20 === 0) {
        volumeBatch = volumeOfBrew / 20 
        if(volumeBatch === 0){ volumeBatch = 1} //volumeBatch kan inte vara 0
        
      }
      else {
        console.log("Beräknar utifrån satser")
        volumeBatch = Math.floor(volumeOfBrew / 20) + 1
        
      }
      volumeLiter = volumeBatch * (20/(ratio * 0.01))
    }
    else { //VolumePref === satser
      volumeBatch = volume;
      volumeLiter = volumeBatch * (20/(ratio * 0.01))
      volumeOfBrew = volume;
    }

  }

  let maxi = 100;

  const marks = [
    {
      value: 20,
      label: '20%',
    },
    {
      value: 40,
      label: '40%',
    },
    {
      value: 60,
      label: '60%',
    },
    {
      value: 80,
      label: '80%',
    },
  ];
calcValues(ratio, volume, volumePref)
  return (
    
    <div class="EnterInfoone">
      <div id="top">
        <header>
          <h1>Hur mycket?</h1>
        </header>
      </div>
      <div id="content">
        <p id="info"> Ange mängd i antal liter utblandat eller satser </p>

        <div class="btn-group">
          <ToggleButton active={volumePref} option1="Liter" option2="Satser" onToggle={setVolumePref}>
          </ToggleButton>
        </div>

        <input class="Input" type="text" placeholder="Ange mängd" onChange={(e) => setVolume(e.target.value)} ></input>
        <Slider marks={marks} valueLabelDisplay="auto" defaultValue={50} step={10} max={maxi} min={0} color="white" onChange={getValue} text={getValue}  ></Slider>
        <p>{ratio}</p>
        {volumePref === "Liter"  && volume > 0 && <p>Ger {volumeBatch} satser och {volumeLiter} liter utblandat</p> }
        {volumePref === "Satser" && <p>Ger {volumeLiter} liter</p>}

     


      </div>
     
      <Button onClick={() => onInput(volumeBatch, volumeLiter, volumePref, ratio)}>NÄSTA</Button>

      <div class="footer_dot">
        <div class="grey"></div>
        <div class="grey"></div>
        <div class="white"></div>
        <div class="grey"></div>
      </div>
    </div>

  );
}

export default EnterInfo4;