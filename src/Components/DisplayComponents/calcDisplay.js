import React, { useState } from "react";
import "./calcDisplay.css"

const CalcDisplay = ({ numList }) => {

    console.log(numList);

    let temp = "";

        for(let i = 0; i < numList.length; i++) {
            temp += numList[i];            
        }

    // const [displayValue, setDisplayValue] = useState(temp);

    const displayValue= useState(temp);

    


    return (
    <div key={ Math.random }>
        <h1>{ displayValue }</h1>
    </div>

    );
}

export default CalcDisplay;