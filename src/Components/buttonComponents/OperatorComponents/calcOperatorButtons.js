import React, { useState } from "react";

const Operators = ({newOperator, handleOperator}) => {

    const operator = useState(newOperator);

    return (
        <div>
            <button onClick={ () => handleOperator() }>{ operator }</button>
        </div>
    );


}

export default Operators;