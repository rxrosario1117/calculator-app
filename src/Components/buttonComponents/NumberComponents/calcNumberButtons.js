import React, { useState } from "react";
// import "../Buttons.css";

const Numbers = ({newNum, handleOperand}) => {

    const num = useState(newNum);

    return (
        <div>
            <button onClick={ () => handleOperand() }>{ num }</button>            
        </div>
    );
}

export default Numbers;