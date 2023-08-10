import React, {useState} from "react"

const Box = ({ index, progress, selectedColors, handleBoxClick }) => (
    <div className="box flex-1 d-flex">
        <div className="progressBar m-10">
            <p>Added:<br /> {progress}</p>
            <div className="progress">
                <div className="filledProgress" style={{ height: `${progress}%` }}></div>
            </div>
        </div>
        <div className="addedColors m-10">
            <input type="radio" name="checked" onChange={() => handleBoxClick(index)} />
            <div className="addedBoxes d-flex flex-wrap">
                {selectedColors.map((color, colorIndex) => (
                    <div key={colorIndex} className="colorBox" style={{ backgroundColor: color }}></div>
                ))}
            </div>
        </div>
    </div>
);

export default Box;