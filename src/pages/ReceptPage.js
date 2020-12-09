import React from "react";
import './ReceptPage.css'

function ReceptPage () {
  
  return (
    
    <div className='receptPage'>
      <div className='header'><h1 className='receptHeader'>Recept</h1></div>
      <div className='recept'>
        <div className='receptIcon1' />
        <div className='receptOne'>
          <h2 className='receptName'>Majs</h2>
          <ul className='receptParts1'>
          20% FUN Light Tropical Fruits
            <br />
            <br />
          80% Vatten
          </ul>
        </div>
        <div className='receptIcon2' />
        <div className='receptTwo'>
          <h2 className='receptName'>3Cant</h2>
          <ul className='receptParts2'>
          20% Ica basic röda bär
            <br />
            <br />
          80% Vatten
          </ul>
        </div>

      </div>
      <div className='breaker' />
    </div>
  )
}

export default ReceptPage
