import React from "react";
import {useDispatch} from "react-redux";
import {updateColor} from "../../features/colorcont";

const ChangeColor = () =>{
    const dispatch = useDispatch()

    function setColor(color) {
        dispatch(updateColor(color))
    }
return (
    <div className="changeColor m-10 d-flex">
        <div className="color-box" style={{backgroundColor: "gold"}} onClick={()=> setColor("gold")}></div>
        <div className="color-box" style={{backgroundColor: "aquamarine"}} onClick={()=> setColor("aquamarine")}></div>
        <div className="color-box" style={{backgroundColor: "indianred"}} onClick={()=> setColor("indianred")}></div>
    </div>
)
}

export default ChangeColor