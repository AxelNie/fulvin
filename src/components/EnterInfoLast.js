import '../App.css';
import React, { useState } from "react";

const EnterInfoLast = ({ onInput }) => {
  return (
    <div>
      {onInput()};
    </div>
  );
}


export default EnterInfoLast;