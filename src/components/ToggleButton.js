import { withTheme } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import React from "react"

const buttonStyle = {
    color: "#FE9677",
    /*color: "#cd5b5f",*/
    backgroundColor: "white" ,
    zIndex: 1
}


const ToggleButton = ({onToggle ,option1, option2, active}) => {
    return (
        <div> 
        <button className="left_btnn" style={active===option1? buttonStyle : {}} onClick={()=>onToggle(option1)}> {option1}
        </button> 
  
        <button className="right_btnn" style={active===option2? buttonStyle : {}} onClick={()=>onToggle(option2)}> {option2}</button>
    </div>
    )
}

export default ToggleButton