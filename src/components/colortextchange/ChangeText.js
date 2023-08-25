import React from "react";
import {useDispatch} from "react-redux";
import {useRef} from "react";
import {updateText} from "../../features/colorcont";

const ChangeText = () =>{
    const ref = useRef()
    const dispatch = useDispatch()

    function setText() {
        dispatch(updateText(ref.current.value))
    }

return (
    <div className="changeText m-10">
        <input type="text" placeholder="Insert any text here" ref={ref}/><br/>
        <button onClick={setText}>SUBMIT!</button>
    </div>
)
}

export default ChangeText