import './App.css';
import  "./components/Box";
import {useState} from "react"
import Box from "./components/Box";

function task7() {

    const colors = ['red', 'purple', 'blue', 'orange'];
    const boxes = [1, 2];
    const [selectedBoxIndex, setSelectedBoxIndex] = useState(null);
    const [progress, setProgress] = useState([0, 0]);
    const [selectedColors, setSelectedColors] = useState(Array(boxes.length).fill([]));

    function colorOnClick(colorIndex) {
        if (selectedBoxIndex !== null && progress[selectedBoxIndex] < 100) {
            const newProgress = [...progress];
            newProgress[selectedBoxIndex] += 10;
            setProgress(newProgress);

            const newSelectedColors = [...selectedColors];
            newSelectedColors[selectedBoxIndex] = [...newSelectedColors[selectedBoxIndex], colors[colorIndex]];
            setSelectedColors(newSelectedColors);
        }
    }

    function handleBoxClick(boxIndex) {
        setSelectedBoxIndex(boxIndex);
    }

    return (
        <div className="container1 d-flex">
            <div className="boxContainer d-flex m-10">
                {boxes.map((boxNumber, index) => (
                    <Box key={boxNumber} index={index} progress={progress[index]} selectedColors={selectedColors[index]} handleBoxClick={handleBoxClick}/>))}
            </div>

            <div className="colorContainer d-flex m-10">
                {colors.map((color, index) => (
                    <div key={index} className="colorBox" style={{ backgroundColor: color }} onClick={() => colorOnClick(index)}></div>
                ))}
            </div>
        </div>
    );


}

export default task7;