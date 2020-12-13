import React from "react";
import './ReceptPage.css'

function ReceptPage () {
  
  return (
    
    <div className='Recept'>
     <div className='breaker1'><h2 className='handbookHeader'>Recept</h2></div>
      <div className='recept'>
        <div className='Majs'>
          <h2 className='rubriker'>Majs</h2>
          <ul className="receptList">
            <li>20% FUN Light Tropical Fruits</li>
            <li>80% Vatten</li>
          </ul>
            <div className="receptIcon1"></div>
        </div>
        <div className='cant'>
          <h2 className='rubriker'>3Cant</h2>
          <ul className="receptList">
            <li>20% Ica Basic Röda Bär</li>
            <li>80% Vatten</li>
          </ul>
          <div className="receptIcon2"></div>
        </div>

      </div>
    </div>
  )
}

export default ReceptPage
