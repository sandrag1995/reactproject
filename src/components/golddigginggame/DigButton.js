const DigButton = ({loweringEnergy}) =>{

    return (
        <div className="digBtn m-10">
            <button onClick={loweringEnergy}>⛏<span>DIG GOLD!</span>⛏</button>
        </div>
    );

}


export default DigButton;