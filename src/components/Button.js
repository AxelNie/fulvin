import '../App.css';
import React, { Children } from "react";

 const Button = ({onClick,children}) => {
  return (
    <div className="ButtonHome" onClick={onClick}>
      {children}
      <div id="pil_lila"></div>
    </div>
  );
}

export default Button;
