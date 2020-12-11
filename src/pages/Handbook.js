import React from "react";
import './Handbook.css'
console.log("hjäkldsjö")

function Handbook () {
  
  return (
    
    <div className='Handbook'>
     <div className='breaker1'><h2 className='handbookHeader'>Handbok</h2></div>
      <div className='handbook'>
        <div className='box1'>
          <h2 className='rubriker'>Material</h2>
          <ul className='handbookList1'>
            <li>Rulles 7-dagars vin, rött eller vitt</li>
            <li>Jäshink  25 liter</li>
            <li>Jäsrör</li>
            <li>Hävert</li>
            <li>3.5 - 4.5 kg socker</li>
          </ul>
        </div>
        <div className='box2'>
          <h2 className='rubriker'>Instruktioner</h2>
          <ol className='handbookList1'>
            <li>
              I en väl rengjord jäshink löses sockret i 8 liter varmt kranvatten. Häll i fruktsaften och fyll på 
              med 10 liter kallt vatten. Tillsätt jästnärsalt, påse A - skaka om noga. Temperaturen bör nu vara 25-30 
              grader. Tillsätt jästen - påse 1, låt stå 10 minuter och skaka sen om ordentligt. Sätt på jäsrör och låt 
              stå i jämn temperatur, inte under 20 grader. 
            </li>
            <br/>
            <li>
              Jäsningen tar 3-4 dagar, sedan slutar det bubbla ur jäsröret, vinet börjar klarna vid ytan och smakar 
              inte längre sött. Detta gäller vid ovan angivna temperaturer. Är de lägre tar jäsningen längre tid. 
              Tillsätt jässtopp - påse 2 och skaka ur kolsyran. Skaka flera gånger med 15-30 minuters mellanrum. 
              Tillsätt klarning - påse 3 och skaka om. Tillsätt klarning - påse 4 (samt essenspåsen märkt med 
              namnet på sorten du gör - ej rödvin). Skaka om noga igen och ställ vinet på ett bord. 
              Klarningen tar 3-4 dagar. För rödvin görs nu en omtappning. Tappa först om 5 liter, 
              tillsätt rödvinsfärg och skaka om. Tappa över resten av vinet och skaka.  
            </li>    
          </ol>
        </div>

      </div>
    </div>
  )
}

export default Handbook
