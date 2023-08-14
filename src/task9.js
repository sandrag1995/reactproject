import './App.css';
import  "./components/NumberCard";
import NumberCard from "./components/NumberCard";
import React, {useState} from "react"

function task9() {

    const [defaultNumber, setNumber] = useState(0)

    function addNumberOne(){
        setNumber(defaultNumber + 1)
    }

    function addNumberFive(){
        setNumber(defaultNumber + 5)
    }

    function addNumberEight(){
        setNumber(defaultNumber + 8)
    }

    return (
        <div className="container">
            <h1>Number sum: {defaultNumber}</h1>
            <div className="numberContainer d-flex">
                <NumberCard number={addNumberOne} defaultNumber={defaultNumber} setNumber={1} className="numberBox"/>
                <NumberCard number={addNumberFive} defaultNumber={defaultNumber} setNumber={5} className="numberBox"/>
                <NumberCard number={addNumberEight} defaultNumber={defaultNumber} setNumber={8} className="numberBox"/>
            </div>
        </div>

    );


}

export default task9;