import React, { useEffect, useState }  from "react";
import "./Layout.css";
import Numbers from "../buttonComponents/NumberComponents/calcNumberButtons";
import CalcDisplay from "../DisplayComponents/calcDisplay";
import Operators from "../buttonComponents/OperatorComponents/calcOperatorButtons";

const Layout = () => {

    const [numList, setNumList] = useState(['0']);
    const [operator, setOperator] = useState();
    const [newOperator, setNewOperator] = useState(false);
    const [isDecimal, setIsDecimal] = useState(false);
    const [displayValue, setDisplayValue] = useState('0');
    const [operand1, setOperand1] = useState(0);

    // takes in the value from the calculator button
    let handleNumbers = (buttonValue) => {

        if (newOperator) {
            setNumList([buttonValue]);
            setIsDecimal(false);
            setNewOperator(false)
           
        }
        else if (numList.length == 1 && numList[0] == '0' && buttonValue != '.'){            
        
            setNumList([buttonValue]);
            
        }
        else if (buttonValue === '.' && !isDecimal) {
            setIsDecimal(true);
            setNumList([...numList, buttonValue])

        }
        else if (buttonValue !== '.') {
    
            setNumList([...numList, buttonValue])
     
        }
    }       

    let handleOperator = (buttonValue) => {

        setOperator(buttonValue); 

        setNewOperator(true);

        handleOperand();

        
    }

    let handleOperand = () => {

        let temp = "";        

        for(let i = 0; i < numList.length; i++) {
            temp += numList[i];
        
        }
        setOperand1(Number.parseFloat(temp));
    }

    let handleAllClear = () => {
        setNumList(['0']);
        setOperand1(0);
        setOperator();
        setNewOperator(false);
        setIsDecimal(false);
        handleDisplayChange();
    }

    let handleCalculation = () => {

        
        let operand2;

        let temp = "";

        for(let i = 0; i < numList.length; i++) {
            temp += numList[i];            
        }

        operand2 = Number.parseFloat(temp); 


        if (operator === "÷" ) {
            setOperand1(operand1 / operand2);
            setDisplayValue(operand1 / operand2);
        }
        else if (operator === "*" ) {
            setOperand1(operand1 * operand2);
            setDisplayValue(operand1 * operand2);
        }
        else if (operator === "+" ) {
            setOperand1(operand1 + operand2);
            setDisplayValue(operand1 + operand2);
        }
        else if (operator === "-" ) {
            setOperand1(operand1 - operand2);
            setDisplayValue(operand1 - operand2);
        }
    }

    let handleDisplayChange = () => {       

        let temp = "";

        for(let i = 0; i < numList.length; i++) {
            temp += numList[i];            
        }

        setDisplayValue(temp);

    }

    useEffect(() => {
        handleDisplayChange();

    }, [numList])

    return (
        <div>
            {/* <CalcDisplay numList={numList}/> */}
            <div>
                <h1>{ displayValue }</h1>
            </div>
            <div className="calculator-grid">
                
                <Numbers newNum={"7"} handleOperand={ () => handleNumbers('7') }/>
                <Numbers newNum={"8"} handleOperand={ () => handleNumbers('8') }/>
                <Numbers newNum={"9"} handleOperand={ () => handleNumbers('9') }/>
                <Numbers newNum={"4"} handleOperand={ () => handleNumbers('4') }/>
                <Numbers newNum={"5"} handleOperand={ () => handleNumbers('5') }/>
                <Numbers newNum={"6"} handleOperand={ () => handleNumbers('6') }/>
                <Numbers newNum={"1"} handleOperand={ () => handleNumbers('1') }/>
                <Numbers newNum={"2"} handleOperand={ () => handleNumbers('2') }/>
                <Numbers newNum={"3"} handleOperand={ () => handleNumbers('3') }/>
                <Numbers newNum={"."} handleOperand={ () => handleNumbers('.') }/>
                <Numbers newNum={"0"} handleOperand={ () => handleNumbers('0') }/>
                <Operators newOperator={'='} handleOperator={ () => handleCalculation() }/>
                <Operators newOperator={'÷'} handleOperator={ () => handleOperator('÷') }/>
                <Operators newOperator={'*'} handleOperator={ () => handleOperator('*') }/>
                <Operators newOperator={'+'} handleOperator={ () => handleOperator('+') }/>
                <Operators newOperator={'-'} handleOperator={ () => handleOperator('-') }/>             
                <Operators newOperator={"AC"} handleOperator={ () => handleAllClear() }/>             
            </div>

        </div>
    );
}

export default Layout;