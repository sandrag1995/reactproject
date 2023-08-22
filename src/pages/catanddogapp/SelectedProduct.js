import React, {useState, useEffect, useRef} from 'react'
import {useParams, useNavigate} from "react-router-dom";
const SelectedProduct = () => {
    const { id } = useParams();

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setSelectedProduct(data);
            });
    }, [id]);

    if (!selectedProduct) {
        return <div>Loading...</div>;
    }

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    return (
        <div className="m-10">
            <h1>Product info:</h1>
            <div className="productInfo d-flex gap-20">
                <div className="images flex-1">
                    <img src={selectedProduct.images[selectedImageIndex]} alt="" style={{height: "400px"}}/>
                    <div className="d-flex">
                        {selectedProduct.images.map((image, index) => (
                            <img src={image} alt="" style={{height: "50px", margin: "10px", cursor: 'pointer'}} key={index} onClick={() => handleImageClick(index)}/>
                            ))}
                    </div>
                </div>

                <div className="productDetails flex-1">
                    <h2>{selectedProduct.title}</h2>
                    <p><b>Category:</b> {selectedProduct.category}</p>
                    <p><b>Price</b>: {selectedProduct.price}$</p>
                    <p><b>Description: </b>{selectedProduct.description}</p>
                </div>
            </div>
        </div>
    );
}

export default SelectedProduct