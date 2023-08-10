import React, {useState} from "react"
const Products = ({product}) => {

    const [photoIndex, setPhotoIndex] = useState(0)

    const toLeft = () => {
        if (photoIndex > 0) {
            setPhotoIndex(photoIndex - 1);
        }
    };

    const toRight = () => {
        if (photoIndex < product.images.length - 1) {
            setPhotoIndex(photoIndex + 1);
        }
    };

    return (
        <div className="productCard m-10">
            <div className="imageContainer">
                <img src={product.images[photoIndex]} alt="" style={{ transitionDuration: "3s" }}/>
                <button className="leftSide" onClick={toLeft}>⬅</button>
                <button className="rightSide" onClick={toRight}>➡</button>
            </div>
            <p><b>Product name:</b> {product.title}</p>
            <p><b>Product price:</b> {product.price}$</p>
        </div>
    );
}

export default Products;