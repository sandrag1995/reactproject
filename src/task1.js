import './App.css';
import {useState} from "react"
function task1() {

    const [getName, setName] = useState("random name");
    const [getAge, setAge] = useState("random age");
    const [getCity, setCity] = useState("random city");

    function changeName(){
        setName("Mina")
    }

    function changeAge(){
        setAge("28")
    }

    function changeCity(){
        setCity("Vilnius")
    }

    return (
        <div className="App">
            <div className="ChangeInfo">
                <div>
                    <p>Name: {getName}</p>
                    <button onClick={changeName}>change name</button>
                </div>
                <div>
                    <p>Age: {getAge}</p>
                    <button onClick={changeAge}>change age</button>
                </div>
                <div>
                    <p>City: {getCity}</p>
                    <button onClick={changeCity}>change city</button>
                </div>
            </div>
        </div>
    );
}

export default task1;