import './App.css';
import {useState} from "react";

function task2() {
    const [getColor, setColor] = useState("red")
    const [radius, setRadius] = useState(0)

    const [border, setBorder] = useState({
        size: 1,
        color: "black"
    })

    function updateBorder() {
        setBorder({
            size: 5,
            color: "green"
        })
    }

    return (
        <div className="d-flex">

            <div className="box grow1" style={{backgroundColor: getColor}}>
                <h1>Some text</h1>
                <button onClick={() => setColor("blue")}>Change</button>
            </div>

            <div className="box grow1" style={{backgroundColor: getColor, borderRadius: radius + "%"}}>
                <h1>Some text</h1>
                <button onClick={() => setRadius(50)}>Change</button>
            </div>

            <div className="box grow1" style={{border: `${border.size}px solid ${border.color}`}}>
                <h1>Some text</h1>
                <button onClick={updateBorder}>Change</button>
            </div>
        </div>
    );
}

export default task2;
