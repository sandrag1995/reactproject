const GoldPrice = ({defaultValue, defaultMoney}) =>{

    return (
        <div className="goldPrice m-10">
            <h2>GOLD PRICE PER 1g: {defaultValue.toFixed(2)}$</h2>
            <h2>Earn Money: {defaultMoney.toFixed(2)}$</h2>
        </div>
    );

}


export default GoldPrice;