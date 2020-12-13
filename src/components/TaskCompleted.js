import '../App.css';
import React from "react";




const TaskCompleted = ({ brewList, nBrew, months }) => {

    var text1 = " I en väl rengjord jäshink löses sockret i 8 liter varmt kranvatten. " +
"Häll i fruksaften och fyll på med 10 liter kallt vatten. Tillsätt jästnärsalt," +
"påse A och skaka om noga. Temperaturen bör nu vara 25-30 grader. Tillsätt jästen, påse 1" +
", låt stå 10 minuter och skaka sedan om ordentligt. Sätt på jäsrör och låt stå i jämn temperatur" +
", inte under 20 grader." 

var text2 = "Jäsningen tar i regel 4 dagar. Det ska då ha slutat bubbla ur jäsröret, " +
"vinet ska ha börjat klarna vid ytan och inte längre smaka sött. Detta gäller vid angivna " +
"temperaturer. Är temperaturen lägre tar jäsningen längre tid. Tillsätt jässtopp, påse 2 och "+
"skaka ur kolsyran. Skaka flera gånger med 15-30 mellanrum. Tillsätt klarning, påse 3 och skaka om. " +
"Tillsätt klarning, påse 4. Skaka om noga igen och ställ vinet på ett bord"

var text3 = "Tappa upp vinet i en ren behållare med hjälp av en hävert. Se till att inte hinkens " +
"bottensats rörs upp och förs med till behållaren. Nu återstår bara smaksättningen av fulvinet. Du har valt " +
"följande utspädningshalt: " + brewList[nBrew]['ratio']+"% vin."


    if (brewList[nBrew]['activeStep'] === 3) {
        return (
            <div>
                <div id="uppgiftAvslutad"> <p id="datum" > {new Date(brewList[nBrew]['initialDate']).getDate()} {months[new Date(brewList[nBrew]['initialDate']).getMonth()]} </p>
                    <p id="uppgift_text" > {text1} </p>
                </div>
                <div id="uppgiftAvslutad"> <p id="datum" > {new Date(brewList[nBrew]['task2Date']).getDate()} {months[new Date(brewList[nBrew]['task2Date']).getMonth()]} </p>
                    <p id="uppgift_text" > {text2} </p>
                </div>
                <div id="uppgiftAvslutad"> <p id="datum" > {new Date(brewList[nBrew]['finalDate']).getDate()} {months[new Date(brewList[nBrew]['finalDate']).getMonth()]} </p>
                    <p id="uppgift_text" > {text3} </p>
                </div>
            </div>
        );
    }
    else if (brewList[nBrew]['activeStep'] === 2) {
        return (
            <div>
                <div id="uppgiftAvslutad"> <p id="datum" > {new Date(brewList[nBrew]['initialDate']).getDate()} {months[new Date(brewList[nBrew]['initialDate']).getMonth()]} </p>
                    <p id="uppgift_text" > {text1} </p>
                </div>
                <div id="uppgiftAvslutad"> <p id="datum" > {new Date(brewList[nBrew]['task2Date']).getDate()} {months[new Date(brewList[nBrew]['initialDate']).getMonth()]} </p>
                    <p id="uppgift_text" > {text2} </p>
                </div>
            </div>
        );

    }
    else if (brewList[nBrew]['activeStep'] === 1) {
        return (
            <div id="uppgiftAvslutad"> <p id="datum" > {new Date(brewList[nBrew]['initialDate']).getDate()} {months[new Date(brewList[nBrew]['initialDate']).getMonth()]} </p>
                <p id="uppgift_text" > {text1} </p>
            </div>
        );
    }
    else if(brewList[nBrew]['activeStep'] === 0){
        return (
            <div id="taskText" > Här visas avslutade uppgifter</div>
        )   
    }
    else{
        return (
            <div></div>
        )
    }
}
export default TaskCompleted;