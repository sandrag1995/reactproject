
const NumberCard = ({number, setNumber}) =>{

    return (
<div className="numberBox m-10">
    <h1>{setNumber}</h1>
    <button onClick={number}>Add number</button>
</div>
    );

}


export default NumberCard;